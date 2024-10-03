'use client'
import React, { useEffect, useState } from 'react'
import Container from '../ui/container'
import CursCard from '../card/curs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function TrainingVideosPage({curs}:any) {
  const [cursArr,setcursArr] = useState([])
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page: any = params.get('page')? Number(params.get('page')) : 1
  const handlePage  = () => {
    if(page < curs?.last_page){
      params.set('page', page + 1 );
      replace(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(()=>{
    setcursArr(cursArr.length ?[ ...cursArr ,...curs?.data,]:curs?.data)
  },[curs])
  return (
    <Container  className='py-[120px] md:py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Курсы</h3>
    <div className="flex  flex-wrap gap-6 mt-8 ">
    {
    cursArr?.length && cursArr?.map((e:any)=>(
          <CursCard className='colm2' image={e?.img} key={e?.id} navlink={`/curs/${e?.id}`} title={e?.name} end_date={e?.end_date} start_date={e?.start_date}/>
      ))
  }
                   
    </div>
    { page < curs?.last_page? <div onClick={handlePage} className='w-full px-4 py-3 text-white text-center rounded mt-9 cursor-pointer bg-[#13399A]'>
      load more
      </div>:""}
</Container>
  )
}
