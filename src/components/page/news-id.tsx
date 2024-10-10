import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import img1 from "@/public/Frame270989841.png";
import dayjs from "dayjs";
import Link from "next/link";

export default function NewsIdPage({ news }: any) {
  
  return (
    <Container className="flex justify-end flex-wrap md:flex-nowrap gap-6 pt-[120px] md:pt-[160px] pb-[100px]">
      <div className="w-full md:max-w-[760px]">
        <Image
          className="w-full object-cover rounded-xl aspect-[1.6/1] mb-12"
          alt="img"
          src={news?.image}
          width={760}
          height={480}
        />

        <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871] mb-4">
          {dayjs(news?.created_at).format('YYYY.MM.DD')}
        </p>
        <h3 className="mb-3 text-2xl font-semibold leading-[29.05px]" dangerouslySetInnerHTML={{__html:news?.title}}/>

        <p className="text-[#48535B]  text-base font-normal leading-[26px]" dangerouslySetInnerHTML={{__html:news?.description.replace(
            /<oembed url="https:\/\/youtu\.be\/(.+?)".*><\/oembed>/g,
            (match:any, videoId:any) => {
              return `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
          )}}/>
      
        {news?.og_url &&<Link className='inline-block decoration-1 text-blue-400' href={news?.og_url}>{news?.og_url}</Link>}
      </div>


      <div className="w-full md:max-w-[270px]">
        <div className="pb-4 mb-4 border-b border-gray-200">
          <div className="group-hover:text-[#13399A] line-clamp-2 text-base font-semibold leading-6 text-left ">
            Министерство юстиции Республики Узбекистан ОБЪЯВЛЯЕТ Конкурс
          </div>
          <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]">
            24.07.2024
          </p>
        </div>
        <div className="pb-4 mb-4 border-b border-gray-200">
          <div className="group-hover:text-[#13399A] line-clamp-2 text-base font-semibold leading-6 text-left ">
            Министерство юстиции Республики Узбекистан ОБЪЯВЛЯЕТ Конкурс
          </div>
          <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]">
            24.07.2024
          </p>
        </div>
        <div className="pb-4 mb-4 border-b border-gray-200">
          <div className="group-hover:text-[#13399A] line-clamp-2 text-base font-semibold leading-6 text-left ">
            Министерство юстиции Республики Узбекистан ОБЪЯВЛЯЕТ Конкурс
          </div>
          <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]">
            24.07.2024
          </p>
        </div>
      </div>
    </Container>
  );
}
