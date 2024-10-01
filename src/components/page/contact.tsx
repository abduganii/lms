import React from 'react'
import Container from '../ui/container'
import { RightIcons1 } from '../icon'
import YandexMap from '../ui/yandex-map'

export default function ContactPage() {
    return(
    <Container  className='py-[120px] md:py-[160px]' >
     <h3 className="text-4xl font-semibold leading-[38.73px] text-left mb-8">Контакты</h3>
     <div className='flex flex-wrap md:flex-nowrap md:gap-6 w-full mb-6'>
        <div className='w-full'>
            <div className='w-full bg-[#F5F5F5] dark:bg-[#001E45] p-4 md:p-6 ms:mb-6 mb-3 rounded-2xl'>
                <h4 className='text-[20px] font-semibold leading-[28px] '>Телефон</h4>
                <p className='text-[16px] font-normal leading-[26px] text-[#48535B] dark:text-white'>+998 71 207 04 43</p>
            </div>
            <div className='w-full bg-[#F5F5F5] dark:bg-[#001E45] p-4 md:p-6 ms:mb-6 mb-3 rounded-2xl'>
                <h4 className='text-[20px] font-semibold leading-[28px] '>Email</h4>
                <p className='text-[16px] font-normal leading-[26px] text-[#48535B] dark:text-white'>info@adliya.uz</p>
            </div>
        </div>
        <div className='w-full bg-[#F5F5F5] dark:bg-[#001E45] p-4 md:p-6 ms:mb-6 mb-3 rounded-2xl'>
                <h4 className='text-[20px] font-semibold leading-[28px] '>Адресs</h4>
                <p className='text-[16px] font-normal leading-[26px] text-[#48535B] dark:text-white'>Республика Узбекистан 100047, г. Ташкент. ул. Сайилгох, 5</p>
                <p className='flex items-center text-[#13399A] mt-2 cursor-pointer'>Перейти <RightIcons1/></p>
        </div>
     </div>
     <YandexMap/>
    </Container>
  )
}
