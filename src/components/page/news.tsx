'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Container from '../ui/container'
import NewsCard from '../card/news'
import _ from 'lodash'

export default function NewsPage({news}:any) {
  const [newsArr,setNewsArr] = useState<any>([])
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page: any = params.get('page')? Number(params.get('page')) : 1
  const handlePage  = () => {
    if(page < news?.last_page){
      params.set('page', page + 1 );
      replace(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(()=>{
    setNewsArr((state:any)=>_.sortedUniq([...state,...news?.data]))
  },[news])
  return (
    <Container  className='py-[120px] md:py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Новости</h3>
    <div className="flex items-center flex-wrap gap-6 mt-8 ">
       {
        newsArr.length ?newsArr?.map((e:any)=>(
          <NewsCard key={e?.id} className={"colm2"}
            navlink={`/news/${e?.slug}`}
            image={e?.image}
            title={e?.title} 
            date={e?.created_at}
          />
        )):""
       }
    </div>
     { page < news?.last_page? <div onClick={handlePage} className='w-full px-4 py-3 text-white text-center rounded mt-9 cursor-pointer bg-[#13399A]'>
      load more
      </div>:""}
</Container>
  )
}
