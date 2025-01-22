"use client"
import React, { useRef } from 'react';
import Image from 'next/image';

import reviewimagepng from '@/assets/home/reviewimagepng.png'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';


SwiperCore.use([Navigation, Pagination, EffectFade]); // Initialize Navigation and Pagination modules





const Finance = [
    {
        id: 1,
        image: reviewimagepng,
        name: "Howard Davies",
        title: "Happy Client",
        review: "\"Amar was awesome to work with! He provided high quality webpage designs, was extremely collaborative throughout the ideation and design refinement process; then delivered a WP site which exactly matched our requirements: high quality coding, lots of dynamic / responsive...\"",
    },
    {
        id: 3,
        image: reviewimagepng,
        name: "Howard Hamza",
        title: "Happy Client",
        review: "\"Amar was awesome to work with! He provided  extremely collaborative throughout the ideation and design refinement process; then delivered a WP site which exactly matched our requirements: high quality coding, lots of dynamic / responsive...\"",
    },
    {
        id: 4,
        image: reviewimagepng,
        name: "Howard Davies",
        title: "Happy Client",
        review: "\"Amar was awesome toas extremely collaborative throughout the ideation and design refinement process; then delivered a WP site which exactly matched our requirements: high quality coding, lots of dynamic / responsive...\"",
    },
    {
        id: 5,
        image: reviewimagepng,
        name: "Howard Davies",
        title: "Happy Client",
        review: "\"Amar was awesome to work with! He provided high and design refinement process; then delivered a WP site which exactly matched our requirements: high quality coding, lots of dynamic / responsive...\"",
    },


]



const TestimonialCara = () => {

    const swiperRef = useRef(null);

    return (
        <>  
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={false}
                initialSlide={0}

                pagination={{ clickable: true, type: "bullets", el: ".custom-pagination" }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1280: {
                        slidesPerView: 1,
                    },
                    1556: {
                        slidesPerView: 1,
                    },
                }}
                className="swiper"
                ref={swiperRef}
                effect={'fade'} // Add this line
                fadeEffect={{ crossFade: true }} // And this line. Set to true for simultaneous fade of current and next slide. Set to false for independent fade.


            >
                {Finance.map((person, index) => (
                    <SwiperSlide key={index}>
                        <div className=" " >
                            <figure className="flex flex-col gap-2">


                                <p className='text-MainColor  mb-8 font-BearFont-medium  text-base tracking-tight '>{person?.review}</p>

                                <div className='flex gap-4 item-center '>
                                    <div>
                                        <Image
                                            src={reviewimagepng}
                                            alt=''
                                        />

                                    </div>

                                    <div className='flex justify-center   flex-col'>
                                        <p className='text-MainColor   font-BearFont-mediumWide  h4Heading22px   '>{person?.name}</p>
                                        <p className='text-[#73808B] font-BearFont-mediumWide text-[14px]  '>{person?.title}</p>



                                    </div>
                                </div>


                            </figure>
                        </div>
                    </SwiperSlide>
                ))}

                <div className='flex py-5  items-center   ' style={{ position: 'relative', zIndex: 100 }}>

                    <div className='w-full md:w-1/2 hidden md:block text-white'>


                    </div>

                    <div className='w-full md:w-1/2 flex justify-end '>
                        <div className='flex gap-2'>
                            <div className='swiper-button-prev-custom cursor-pointer '>

                                <button
                                    className="bg-[#1C1C1C] border border-1 border-white hover:border-[#6E6E73]  text-white hover:text-[#6E6E73] p-3 rounded-[50%]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                    </svg>

                                </button>

                            </div>
                            <div className='swiper-button-next-custom cursor-pointer '>
                                <button
                                    className="bg-[#1C1C1C] border border-1 border-white hover:border-[#6E6E73]  text-white hover:text-[#6E6E73] p-3 rounded-[50%]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>

                                </button>
                            </div>
                        </div>

                    </div>

                </div>


            </Swiper>
        </>
    )
}

export default TestimonialCara