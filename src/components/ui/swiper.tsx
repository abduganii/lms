'use client'
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import React, { useState } from 'react';
import { SwiperLeftIcons, SwiperRightIcons } from '../icon';
import useWindowSize from '@/hook/useWindowwWidth';

export default  function SwiperWithScrollIcons({className, children,slidesPerView,slidesPerViewRes}:any) {
    const [swipers, setSwiper] = useState<any>()
    const { width } = useWindowSize();
    return  (
    <>
        <Swiper
            modules={[ Autoplay]}
            spaceBetween={8}
            slidesPerView={width > 900 ?  slidesPerView : width > 500 ? slidesPerView - 1:slidesPerViewRes|| 1 }
            // breakpoints={{
            //     640: {
            //       width: 640,
            //       slidesPerView: 1,
            //     },
            //     768: {
            //       width: 768,
            //       slidesPerView: slidesPerView - 1,
            //     },
            //     }
            //   }}
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