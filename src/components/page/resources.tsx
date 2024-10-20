
"use client"
import { useTranslation } from "react-i18next";
import Link from "next/link";
import {  RightIcons2 } from "../icon";
import Container from "../ui/container";
import { usePathname,useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function ResourcesPage({articles}:any) {
  const {t} = useTranslation()
  const [ResourcesArr,setResourcesArr] = useState<any>([])
  const params = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const paramsValue = new URLSearchParams(params);
  const handlePage  = (p:any) => {
    if(p <= articles?.last_page){
      paramsValue.set('page', p  );
      replace(`${pathname}?${paramsValue.toString()}`);
    }
  };

  useEffect(()=>{
    setResourcesArr(articles?.data)
  },[articles])
  return (
    <Container  className='py-[120px] md:py-[160px]' >
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left mb-4"> {t('articles')}</h3>
     {
        ResourcesArr && ResourcesArr.map((e:any)=>(
          <Link href={`/resources/${e?.id}`} className="w-full cursor-pointer flex items-center  justify-between bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-4 rounded-lg mb-4">
            <div>
            <p className="text-[16px] font-medium leading-[26px] mb-3" dangerouslySetInnerHTML={{__html:e?.title}}/>
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-medium leading-[24px]"dangerouslySetInnerHTML={{__html:e?.author}}/>
              <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> {dayjs(e?.created_at).format('YYYY.MM.DD')}</p>
            </div>
            </div>
            <RightIcons2/> 
        </Link>
        ))
    }
     
      {articles?.last_page > 1 ?  <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: articles?.last_page }, (_, index) => index + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(Number(p))}
            className={`px-4 py-2 rounded-lg border ${
              p === articles?.current_page
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
