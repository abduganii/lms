'use client'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DownIcons } from '../icon';
import { LangArr } from '@/muck/data';
import Image from 'next/image';
import ru from "@/public/lang/ru.png"
import uz from "@/public/lang/uz.png"
import en from "@/public/lang/en.png"

const langFlag ={
    ru:ru,
    uz:uz,
    en:en,

}
export default function Lang() {
    const { i18n,t } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
  const [open, setOpen] = useState(false)

  const handleChange = (e:any) => {
        const newLocale = e.target.getAttribute("value");
        setOpen(false)
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
        // router.push('/' + newLocale + currentPathname);
        router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        )
        router.refresh();
    };
    return (
      <>
        <div className="relative cursor-pointer bg-neutral-50 flex items-center p-3 pr-2 border-r-3 rounded-xl gap-[2px] sm:gap-4"
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
        open ? <ul className='max-w-[108px] absolute top-12  bg-neutral-50 bg-white py-2 sm:py-3 rounded-xl w-full left-0"' onClick={handleChange}>
            {
                LangArr.map(e=>(
                    <li className='flex font-normal text-base p-2   hover:bg-neutral-200' value={e?.value} key={e.id}>
                        <span className="px-2">
                        <Image src={langFlag?.[e?.value]} alt='img' width={20} height={20}/>
                        </span>
                         {e.value}
                         </li>
                ))
            }
        </ul>:""
    }
    </div>

      </>
      
  )
}