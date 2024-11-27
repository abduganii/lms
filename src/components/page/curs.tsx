
"use client"
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Container from "../ui/container";
import { fetchData } from "@/service/get";
import { Unnom } from "../icon";

export default function CursPage({curs}:any) {
  const {i18n} = useTranslation()
  
  return (
    <Container className='md:pt-[160px] pt-[120px] pb-[104px]'>
        <div className="w-full flex md:flex-nowrap flex-wrap items-center gap-10 bg-[#F5F5F5] p-10  mb-12 rounded-md dark:bg-[#001E45] dark:text-[#FFFFFF]">
            <div className='w-full md:max-w-[568px]'>
                  <h3 className=" text-[36px] font-semibold leading-[48px]">{ curs?.name}</h3>
                <p className="mt-5 mb-4 text-[#5B6871] dark:text-white text-[14px] font-normal leading-[24px]">{curs?.description}
                </p>
                  <p className="text-sm font-normal mb-4 leading-6 text-left flex items-center text-[#5B6871] dark:text-white" >{ curs?.allocated_time}</p>
                <button 
                  onClick={async ()=>{
                    fetchData(`${process.env.NEXT_PUBLIC_URL}/auth/init`,i18n.language || 'en')
                       .then(data=>  window.open(data.url, '_blank'))
                       .catch(err => console.log(err))
               }}
                className="inline-block bg-[#13399A] rounded-xl px-[22px] py-[11px]  text-white text-base font-semibold leading-7 text-left">
                        Регистрация 
                </button>
            </div>
            {curs?.img && <Image src={curs?.img }  title={curs?.img}  alt="img" width={464} height={384} className="w-full rounded-xl md:max-w-[464px]"/> }
        </div>  
        <h3 className="mb-6 text-[28px] font-semibold leading-[36px]">Материалы курса</h3> 
          {curs?.context && curs?.context?.map((e:any) => (
            
            <div key={e?.id} className="w-full flex items-center bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md gap-4 mb-4">
              <Unnom/>
                <p className="text-[16px] font-medium leading-[26px] " dangerouslySetInnerHTML={{__html:e?.name}}/>
                <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871] dark:text-white" >
                {e?.duration}
                </p>
            </div>
        ))  }
        
    </Container>
  )
}
