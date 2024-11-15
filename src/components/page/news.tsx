
"use client"
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Container from '../ui/container'
import NewsCard from '../card/news'
import _ from 'lodash'

export default function NewsPage({news}:any) {
  const {t} = useTranslation()
  const [newsArr,setNewsArr] = useState<any>([])
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handlePage  = (p:any) => {
    if(p <= news?.last_page){
      params.set('page', p  );
      replace(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(()=>{
    setNewsArr(news?.data || [])
  },[news])
  return (
    <Container  className='py-[120px] md:py-[160px]' >
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left">{t('news')}</h3>
    <div className="flex items-center flex-wrap gap-6 mt-8 ">
       {
        newsArr.length ? newsArr?.map((e:any)=>(
          <NewsCard key={e?.id} className={"colm2"}
            navlink={`/news/${e?.slug}`}
            disc={e?.short_description}
            image={e?.image}
            title={e?.title} 
            date={e?.created_at}
          />
        )):""
       }
    </div>
   
      {news?.last_page > 1 ?  <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: news?.last_page }, (_, index) => index + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(Number(p))}
            className={`px-4 py-2 rounded-lg border ${
              p === news?.current_page
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-gray-300"
            } hover:bg-blue-100`}
          >
            {p}
          </button>
        ))}
      </div>:""}
</Container>
  )
}
