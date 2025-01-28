"use client"

import Image from 'next/image';
import logozara from '@/assets/home/logozara.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Scrollbar]);


const MovingText = [

    { id: 1, icon: logozara },
    { id: 2, icon: logozara },
    { id: 3, icon: logozara },
    { id: 4, icon: logozara },
    { id: 5, icon: logozara },
    { id: 7, icon: logozara },
    { id: 8, icon: logozara },
    { id: 9, icon: logozara },

    { id: 10, icon: logozara },
    { id: 11, icon: logozara },
    { id: 12, icon: logozara },
    { id: 13, icon: logozara },
    { id: 14, icon: logozara },
    { id: 15, icon: logozara },


    { id: 16, icon: logozara },
    { id: 17, icon: logozara },
    { id: 18, icon: logozara },
    { id: 19, icon: logozara },
    { id: 20, icon: logozara },
    { id: 21, icon: logozara },

];




const BusinessMovingLogos = () => {


 



    return (
        <>


            <div className='   pt-10 md:pt-36'>


                <div className="flex justify-between overflow-hidden gap-6" >


                    
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>
                    <Image src={logozara} alt=''/>










                </div>

            </div>

        </>
    )
}

export default BusinessMovingLogos