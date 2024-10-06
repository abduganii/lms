'use client'
import React, { useEffect, useState } from 'react'
import Container from '../ui/container'
import CursCard from '../card/curs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import _ from 'lodash'
import SelectLocal from '../ui/select';
export default function TrainingVideosPage({curs,category}:any) {
  const [cursArr,setcursArr] = useState<any>([])
  const [categoryArr,setcategoryArr] = useState<any>([])
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page: any = params.get('page')? Number(params.get('page')) : 1
  const handlePage  = (p:any) => {
    if(p <= curs?.last_page){
      params.set('page', p  );
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const handlecategory = (p: any) => {
    setcategoryArr(p)
      params.set('category', p?.id  );
      replace(`${pathname}?${params.toString()}`);
  };

  useEffect(()=>{
    // const currentPath = window.location.pathname; 
    replace(`${pathname}`);
  },[])
  useEffect(()=>{
    setcursArr(curs?.data)
  },[curs])

  return (
    <Container  className='py-[120px] md:py-[160px]' >
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Курсы</h3>
      <SelectLocal
        value={categoryArr} 
        setValue={handlecategory} 
        text={"Все категории"} 
        optionskey={'name'} 
        options={category} 
      />
    <div className="flex  flex-wrap gap-6 mt-8 ">
    {
    cursArr?.length ? cursArr?.map((e:any)=>(
          <CursCard className='colm2' image={e?.img} key={e?.id} navlink={`/curs/${e?.id}`} title={e?.name} end_date={e?.end_date} start_date={e?.start_date}/>
      )):"no data"
  }
                   
    </div>
      {curs?.last_page > 1 ?  <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: curs?.last_page }, (_, index) => index + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(Number(p))}
            className={`px-4 py-2 rounded-lg border ${
              p === curs?.current_page
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
