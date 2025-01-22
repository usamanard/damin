"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Scrollbar]);



const MovingText = ({ }) => {
    const swiperRef = useRef(null); // new line
    return (
        <div className='flex items-center justify-center'>
            <Swiper
                ref={swiperRef}
                className='sample-slider '
                slidesPerView={1} 
                spaceBetween={20}
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

                <SwiperSlide >
                  <div className='flex items-center w-auto'>
                  <h3 className=' text-3xl md:text-6xl text-center font-montserrat-semibold tracking-tighter   text-black '>
                        And here&apos;s how Damin does the magic And here&apos;s how Damin does the magic 
                    </h3>

                    
                  </div>
                </SwiperSlide>


                
                <SwiperSlide >
                  <div className='flex items-center w-auto'>
                  
                    <h3 className=' text-3xl md:text-6xl text-center font-montserrat-semibold tracking-tighter   text-black '>
                    Icon here
                    </h3>
                    
                    <h2 className=' text-3xl md:text-6xl text-center font-montserrat-semibold tracking-tighter   text-black'>
                    his is texting Button Here
                    </h2>
                  </div>
                </SwiperSlide>


                


            </Swiper>
        </div>
    );
};

export default MovingText;
