'use client'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DownIcons } from '../icon';
import { LangArr } from '@/muck/data';
import Link from 'next/link';
import Image from 'next/image';
import ru from "@/public/lang/ru.png"
import uz from "@/public/lang/uz.png"
import en from "@/public/lang/en.png"
import i18nConfig from '../../../i18nConfig';

const langFlag:any = {
    ru:ru,
    uz:uz,
    en:en,
    uz_cyr:uz,
}
const redirectToLocale = (locale: any, pathname: string) => {
    if (!pathname) {
      return '/';
    }
  
    const pathParts = pathname.split('/');
  
    pathParts[1] = locale;
  
    const url = pathParts.join('/');
  
    return url;
  };
export default function Lang() {
  const { i18n,t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [open, setOpen] = useState(false)

  const handleChange = (e: any) => {
    const newLocale = e.target.getAttribute("value") || "en";
    // set cookie for next-i18n-router

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
    return (
      <>
        <div className="relative ml-auto md:ml-0 cursor-pointer bg-neutral-50  dark:bg-[#001E45] flex items-center p-3 pr-2 border-r-3 rounded-xl gap-[2px] sm:gap-4"
        onClick={()=>setOpen(!open)}>
       
        <p className="font-normal text-base flex items-center">
            {/* <RuIcons/> */}
            <Image src={langFlag?.[currentLocale]} alt='img' width={20} height={20}/>
            <span className="pl-2 hidden sm:block"> 
                {t('lang') }
            </span>
            <span className="px-2">
              <DownIcons/>
            </span>
        </p>
       
    {
        open ? <ul onClick={handleChange} className='max-w-[108px] absolute top-12  bg-neutral-50 bg-white dark:bg-[#00132D] dark:text-[#FFFFFF] py-2 sm:py-3 rounded-xl w-full left-0"'>
            {
                            LangArr.map((e,i) => (
                                <li className='flex font-normal text-base p-2   hover:bg-neutral-200' value={e?.value} key={e.id}>
                                    <span className="px-2">
                                    <Image src={langFlag?.[e?.value]} alt='img' width={20} height={20}/>
                                    </span>
                                    {e.label}
                                    </li>
                ))
            }
        </ul>:""
    }
    </div>
      </>
      
  )
}




