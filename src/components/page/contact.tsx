
"use client"
import { useTranslation } from "react-i18next";
import React from 'react'
import Container from '../ui/container'
import { RightIcons1 } from '../icon'
import YandexMap from '../ui/yandex-map'

export default function ContactPage() {
    const {t} = useTranslation()

    return(
    <Container  className='py-[120px] md:py-[160px]' >
            <h3 className="text-4xl font-semibold leading-[38.73px] text-left mb-8">{ t('contact')}</h3>
     <div className='flex flex-wrap md:flex-nowrap md:gap-6 w-full mb-6'>
        <div className='w-full'>
            <div className='w-full bg-[#F5F5F5] dark:bg-[#001E45] p-4 md:p-6 ms:mb-6 mb-3 rounded-2xl'>
                <h4 className='text-[20px] font-semibold leading-[28px] '>{ t('phone_number')}</h4>
                <p className='text-[16px] font-normal leading-[26px] text-[#48535B] dark:text-white'>+998 71 207 04 43</p>
            </div>
            <div className='w-full bg-[#F5F5F5] dark:bg-[#001E45] p-4 md:p-6 ms:mb-6 mb-3 rounded-2xl'>
                <h4 className='text-[20px] font-semibold leading-[28px] '>{ t('email')}</h4>
                <p className='text-[16px] font-normal leading-[26px] text-[#48535B] dark:text-white'>info@adliya.uz</p>
            </div>
        </div>
        <div className='w-full bg-[#F5F5F5] dark:bg-[#001E45] p-4 md:p-6 ms:mb-6 mb-3 rounded-2xl'>
                <h4 className='text-[20px] font-semibold leading-[28px] '>{ t('address')}</h4>
                <p className='text-[16px] font-normal leading-[26px] text-[#48535B] dark:text-white'>Республика Узбекистан 100047, г. Ташкент. ул. Сайилгох, 5</p>
                <p className='flex items-center text-[#13399A] mt-2 cursor-pointer'> { t('go')} <RightIcons1/></p>
        </div>
     </div>
     <YandexMap/>
    </Container>
  )
}
