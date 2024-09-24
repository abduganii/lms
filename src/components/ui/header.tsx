'use client'
import Container from "@/components/ui/container";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { HeaderNavBar, Navbar } from "@/muck/data";
import Link from "next/link";
import Lang from "./lang";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
export default function Header() {
  const {t} = useTranslation()
  const router = useRouter()
  return (
    <>
      <header className="w-full fixed  border-b border-gray-200  bg-white py-4  z-40">
        <Container className="flex items-center gap-20">
          <Link href={"/"} className="flex items-center">
            <Image alt="img" height={64} width={97} src={logo} />
            <h3 className=" text-sm font-medium leading-5 text-left w-full max-w-[237px]">
              Министерство юстиции Республики Узбекистан
            </h3>
          </Link>

          <div className="flex items-center gap-[24px] mr-auto">
            {HeaderNavBar.map((e) => (
              <div
                className=" cursor-pointer group font-inter relative text-sm font-normal leading-6 text-left "
                key={e?.id}
                onClick={e?.link ? ()=> router.push(e?.link):()=>{}}
              >
                {t(e?.label)}
               { e?.children ? <div
                  className="hidden absolute p-3 bg-white group-hover:inline-block left-0 top-5 rounded-md shadow">
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

         <Lang/>
        </Container>
      </header>
    </>
  );
}
