"use client"
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { DateIcons } from "../icon";
import Link from "next/link";

export default function CursCard({navlink='/',image,title,end_date,
    start_date, className }: any) {
    const {t} = useTranslation()
    return (
    <Link href={navlink} className={`group w-full p-3 inline-block rounded-xl bg-white dark:bg-[#00193B] ${className && className}`} >
        {image && <Image  title={image} className="w-full h-[180px]  object-cover rounded-xl aspect-w-[1.37] aspect-h-[1] " alt="img"  src={image} width={246} height={180}/>}

        <h3 className="group-hover:text-[#13399A] whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-10 "dangerouslySetInnerHTML={{__html:title}}/>

            <p className="text-sm font-normal leading-6 text-left flex items-center gap-1" > <DateIcons />
                <span>  {t('start_date')}</span>
                {start_date?.slice(0, 16)}
            </p>
            
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-1" > <DateIcons />
            <span> {t('end_date')}</span>
                {end_date?.slice(0, 16)}
            </p>    
    </Link>
    );
  }
  