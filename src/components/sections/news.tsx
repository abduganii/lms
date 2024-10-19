"use client"
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import NewsCard from "../card/news";
import Link from "next/link";
import { RightIcons } from "../icon";
import SwiperWithScrollIcons from "../ui/swiper";

export default function NewsSections({ posts }: any) {
      const {t} = useTranslation()
    return (
            <Container  className='my-[120px]' >
                <Link href={'/news'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">{t('news')} <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
                    {
                        posts?.length && posts?.map((e:any)=>(
                            <NewsCard disc={e?.short_description} image={e?.image} key={e?.id}  navlink={`/news/${e?.slug}`} 
                             title={e?.title} date={e?.created_at}/>
                        ))
                }
                
                
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  