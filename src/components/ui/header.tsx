'use client'
import Container from "@/components/ui/container";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { HeaderNavBar, Navbar } from "@/muck/data";
import Link from "next/link";
import Lang from "./lang";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { BurgerIcons,RightIcons2, XIcons } from "../icon";
import { useState } from "react";
import Theme from "./theme";
export default function Header() {
  const {t} = useTranslation()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [openId, setOpenId] = useState<any>(false)
  
  return (
    <>
      <header className="w-full fixed  border-b border-gray-200 dark:border-b-[#00132D]  bg-white dark:bg-[#00132D] dark:text-[#FFFFFF] py-4  z-40">
        <Container className="flex items-center  gap-2 lg:gap-20">
          <div className="md:hidden" onClick={()=>setOpen(!open)}><BurgerIcons/></div>
          <Link href={"/"} className="flex items-center">
            <Image alt="img" height={64} width={97} className=' w-[62px] md:w-[97px]' src={logo} />
            <h3 className=" text-sm font-medium leading-5 text-left w-full max-w-[237px]">
              {t('header_logo')}
            </h3>
          </Link>

          <div className="hidden md:flex items-center  gap-[24px] mr-auto">
            {HeaderNavBar.map((e) => (
              <div
                className=" cursor-pointer group font-inter text-nowrap relative text-sm font-normal leading-6 text-left "
                key={e?.id}
                onClick={e?.link ? ()=> router.push(e?.link):()=>{}}
              >
                {t(e?.label)}
               { e?.children ? <div
                  className="hidden dark:bg-[#001322] dark:text-[#FFFFFF] absolute p-3 bg-white group-hover:inline-block left-0 top-5 rounded-md shadow">
                 {
                  e?.children?.map(el=>(
                    <Link key={el?.id} href={el?.link} className="text-base  block text-nowrap font-normal px-3 py-2 rounded-md hover:bg-slate-200">
                    {t(el.label)}
                 </Link>
                  ))
                 }
                  </div>:""}
              </div>
            ))}
          </div>
          <div className="flex items-center  gap-2">
            <Lang />
            <Theme/>
          </div>
          
        </Container>

       {open && <div className="w-full h-screen  fixed top-0 left-0 z-50 bg-[#00000080] " onClick={()=>setOpen(!open)}>
            <div className="w-full h-screen max-w-[311px] bg-white dark:bg-[#00132D]" onClick={(e)=>e.stopPropagation()}>
                <div className="py-6 px-4 border-b "  onClick={()=>setOpen(!open)}>
                    <XIcons />
                </div>
                <div>
                    {Navbar.map((e) => (
                      <div
                      onClick={()=> setOpenId((state:any) => state == e?.id ? false: e?.id)}
                        key={e?.id}
                      >
                        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                          {t(e?.label)}
                          <div className={ openId == e?.id ? "rotate-90":""}>
                            <RightIcons2/>
                          </div>
                        </div>
                    { e?.children && openId == e?.id ? <>
                      {
                        e?.children?.map(el=>(
                          <Link key={el?.id} onClick={()=>setOpen(!open)} href={el?.link} className="text-base border-b border-gray-200 block text-nowrap font-normal px-6 py-2 hover:bg-slate-200">
                          {t(el.label)}
                        </Link>
                        ))
                      }
                        </>:""}
                    </div>
                  ))}
                </div>
            </div>
        </div>}
      </header>
    </>
  );
}
