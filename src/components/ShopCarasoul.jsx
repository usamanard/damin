"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Scrollbar]);




import shopimage from '@/assets/home/shopimage.png'


const logos = [
    { id: 1, src: shopimage, title: "usama" },
    { id: 2, src: shopimage, title: "usama" },
    { id: 3, src: shopimage, title: "usama" },
    { id: 4, src: shopimage, title: "usama" },
    { id: 5, src: shopimage, title: "usama" },

    // Add more logos as needed
];

const ShopCarasoul = ({ TechStact }) => {
    return (
        <div className='flex items-center justify-center'>
            <Swiper
                className='sample-slider '
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                
                // autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                // }}
                // speed={2000}
                // freeMode={true}
                // mousewheel={true}   
                // scrollbar={{ draggable: true }}
            >
                {logos.map((logo) => (
                    <SwiperSlide key={logo.id}>
                        <div className='overflow-visible'>
                            <Image src={logo.src} alt='' className='m-5 shadow-lg rounded-full flex items-center' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ShopCarasoul;
