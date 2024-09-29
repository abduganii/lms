'use client'
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import React, { useState } from 'react';
import { SwiperLeftIcons, SwiperRightIcons } from '../icon';

export default  function SwiperWithScrollIcons({className, children,slidesPerView}:any) {
    const [swipers,setSwiper] = useState<any>()
    return  (
    <>
        <Swiper
            modules={[ Autoplay]}
            spaceBetween={8}
            slidesPerView={1}
            breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: slidesPerView - 1,
                },
                1024: {
                    width: 768,
                    slidesPerView: slidesPerView, 
                },
                1280: {
                    width: 1280,
                    slidesPerView: slidesPerView, 
                },
                1536: {
                    width: 1536,
                    slidesPerView: slidesPerView, 
                }
              }}
            className={`flex relative ${className && className}`}
            onSwiper={(e:any) => setSwiper(e)}
        >
            {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
        <div className='flex items-center gap-4 justify-end mt-8'>
            <button className='w-12 h-12 rounded-[40px] flex items-center justify-center p-3 bg-[#F5F5F5]' onClick={()=>swipers.slidePrev()}><SwiperRightIcons/></button>   
            <button className='w-12 h-12 rounded-[40px] flex items-center justify-center p-3 bg-[#F5F5F5]' onClick={()=>swipers.slideNext()}><SwiperLeftIcons/></button>   
        </div>
    </>
    );
};3