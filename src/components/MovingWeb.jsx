"use client"
import React ,{useRef}from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import movingweb1 from '@/assets/product-development/movingweb1.png'
import movingweb2 from '@/assets/product-development/movingweb2.png'
import movingweb3 from '@/assets/product-development/movingweb3.png'

import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Scrollbar]);



const logos = [
    { id: 1, src: movingweb1, title: "usama" },
    { id: 2, src: movingweb2, title: "usama" },
    { id: 3, src: movingweb3, title: "usama" },
   
    // Add more logos as needed
];

const MovingWeb = ({  }) => {
    const swiperRef = useRef(null); // new line
    return (
        <div className='flex items-center justify-center'>
            <Swiper
             ref={swiperRef}
                className='sample-slider '
                slidesPerView="auto" // Show 1.2 slides at a time
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={10000}
                freeMode={false} 
                simulateTouch={true} 
                mousewheel={false} 
                onTouchEnd={() => {
                    setTimeout(() => {
                      swiperRef.current.swiper.autoplay.start();
                    }, 100);
                  }}
            >
                {logos.map((logo) => (
                    <SwiperSlide key={logo.id}>
                        <div className='flex w-fit h-full items-center'>
                            <Image src={logo.src} alt='' className='flex  items-center' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovingWeb;
