"use client"
import { useTranslation } from "react-i18next";
import Image from "next/image";
import img1 from '@/public/content.png'
import img2 from '@/public/iPhone.png'
import img3 from '@/public/image8.png'

export default function HeroSections() {
    const {t} = useTranslation()
    return (
            <div className='flex items-center flex-wrap md:flex-nowrap justify-between ContainerLeft'>
                <div className="w-full md:max-w-[492px]">
                        <h2 className="text-3xl mb-2 md:mb-0 md:text-4xl font-semibold  leading-[29.05px] md:leading-[50px] text-left">
                    {t('header_logo')}
                        </h2>
                        <p className="mb-6 text-base font-normal leading-7 text-left"> {t('hero_text')}</p>
                        <button className="inline-block bg-[#13399A] rounded-xl px-[22px] py-[11px]  text-white text-base font-semibold leading-7 text-left">
                        {t('sign_in')} 
                        </button>
                </div>
                <div className="relative">
                <Image className="lg:block hidden  absolute top-[116px] left-[-20px] xl:left-[-125px] max-h-[321px] xl:max-h-[421px]" src={img2} width={206} height={421} alt="img"/>
                <Image className="md:block hidden"  src={img1} width={560} height={512} alt="img"/>
                <Image  className="md:hidden block my-[40px]"  src={img3} width={343} height={250} alt="img"/>
                </div>
                </div>
    );
  }
  