"use client"
import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import img1 from "@/public/Frame270989841.png";
import dayjs from "dayjs";
import SwiperWithScrollIcons from "../ui/swiper";
import NewsCard from "../card/news";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function BlogsIdPage({blogs,vidoe}:any) {
  const {i18n} = useTranslation()
  return (
    <div>

    <Container className="flex justify-center flex-wrap md:flex-nowrap gap-6 pt-[120px] md:pt-[160px] pb-[50px]">
      <div className="w-full md:max-w-[760px]">
       { blogs?.images && <Image
          className="w-full object-cover  rounded-xl aspect-[1.6/1] mb-12"
          alt="img"
          src={blogs?.images?.[0]}
          width={760}
          height={480}
        />}

          <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871] mb-4">
          {dayjs(blogs?.created_at).format('YYYY.MM.DD')}
        </p>
        <h3 className="mb-3 text-2xl font-semibold leading-[29.05px]" dangerouslySetInnerHTML={{__html:blogs?.name}}/>

        <p className="text-[#48535B]  text-base font-normal leading-[26px]"  dangerouslySetInnerHTML={{__html: blogs?.description.replace(
            /<oembed url="https:\/\/youtu\.be\/(.+?)".*><\/oembed>/g,
            (match:any, videoId:any) => {
              return `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
          )
          }} />
            <p className="text-[#48535B]  text-base font-normal leading-[26px]"  dangerouslySetInnerHTML={{__html: blogs?.content.replace(
            /<oembed url="https:\/\/youtu\.be\/(.+?)".*><\/oembed>/g,
            (match:any, videoId:any) => {
              return `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
          )
          }} />
           {blogs?.og_url &&<Link className='inline-block decoration-1 text-blue-400' href={blogs?.og_url}>{blogs?.og_url}</Link>}
      </div>

      
      
    </Container>
    <Container className="pb-[50px]">
      <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
            {
                vidoe?.length && vidoe?.map((e:any)=>(
                    <NewsCard  videoLink={e?.link[i18n.language]} isVideo={true} disc={e?.name[i18n.language]} image={e?.image} key={e?.id}  
                      title={e?.title} date={e?.created_at}/>
                ))
        }
        </SwiperWithScrollIcons>
    </Container>
    </div>
  );
}
