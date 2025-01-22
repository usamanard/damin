"use client"
import React, { useState, useEffect } from 'react';

import { Container } from './Container'
import { FadeIn } from './FadeIn'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Scrollbar]);

import { Collapse } from 'react-collapse';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import stackimage1 from '@/assets/product-development/stackimage1.png'
import stackimage2 from '@/assets/product-development/stackimage2.png'
import stackimage3 from '@/assets/product-development/stackimage3.png'



const faqs = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Deep diving into your business goals, target audience, and market dynamics.',
        image: stackimage1,

    },

    {
        number: '02',
        title: 'UX/UI Design',
        description: 'Creating visually appealing and user-friendly designs that resonate with users.',
        image: stackimage2,

    },

    {
        number: '03',
        title: 'Agile Development',
        description: 'Employing agile methodologies for efficient and flexible development.',
        image: stackimage3,

    },
    {
        number: '04',
        title: 'Discovery',
        description: 'Deep diving into your business goals, target audience, and market dynamics.',
        image: stackimage1,

    },
    {
        number: '05',
        title: 'Discovery',
        description: 'Deep diving into your business goals, target audience, and market dynamics.',
        image: stackimage2,

    },

];


function FaqToggle() {
    const [openIndex, setOpenIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(-1);

    const timer = React.useRef();


    const [isSlideDown, setIsSlideDown] = useState(false);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

    return (


        <>







            <div className='flex items-center justify-center'>
                <Swiper
                    className='sample-slider '
                    slidesPerView={3.2}
                    spaceBetween={10}
                    loop={true}
                // autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                // }}
                // speed={2000}
                // freeMode={true}
                // mousewheel={true}   // enables mousewheel scroll
                // scrollbar={{ draggable: true }}  // enables draggable scrollbar
                >
                    {faqs.map((faq, index) => (
                        
                        <SwiperSlide key={index} >
                            <div

                                className={`relative rounded-[16px]  overflow-hidden group bg-[#1A1A1A]  max-w-[385px] min-h-[429px]  ${hoverIndex === index ? '    ' : ''}`}
                                onMouseEnter={() => {
                                    clearTimeout(timer.current); // clear any existing timers
                                    setHoverIndex(index);
                                    setIsSlideDown(false);
                                  }}
                                  onMouseLeave={() => {
                                    timer.current = setTimeout(() => { 
                                      setHoverIndex(-1);
                                      setIsSlideDown(true);
                                    }, 400); // 400ms delay matches the animation duration
                                  }}

                            >
                                <div className='mx-6 mt-6 justify-between flex items-center'>

                                    <h4 className='text-lg font-BearFont-medium text-white'>{faq.title}</h4>
                                    <h4 className='text-lg font-BearFont-medium text-[#ffffff80] group-hover:text-white'>{faq.number}</h4>



                                </div>


                                {hoverIndex === index || (
                                    <div className='absolute bottom-0  text-[#424242] text-[90px] mx-6 mb-4 font-BearFont-medium'>
                                        {faq.number}
                                    </div>
                                )}

                                {hoverIndex === index && (
                                    <div className={`absolute bottom-0 ${isSlideDown ? 'animate-slideDown' : 'animate-slideUp'}`}>


                                        <div className='mx-6 mb-6' >

                                            <p className='text-base font-BearFont-regular max-w-xl pr-24  text-white mt-4'>{faq.description}</p>



                                        </div>

                                        <div className='rounded-t-[16px]'>
                                            <Image className='' src={faq.image} alt='' />
                                        </div>
                                    </div>
                                )}




                                {/* <Collapse isOpened={hoverIndex === index}>
                                    <div className={`absolute bottom-0 ${hoverIndex === index ? 'animate-slideUp' : (isSlideDown ? 'animate-slideDown' : '')} `}>


                                        <div className='mx-6 mb-6' >

                                            <p className='text-base font-BearFont-regular max-w-xl pr-24  text-white mt-4'>{faq.description}</p>



                                        </div>

                                        <div className='rounded-t-[16px]'>
                                            <Image className='' src={faq.image} alt='' />
                                        </div>
                                    </div>
                                </Collapse> */}
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>



        </>


    )
}


const DJCarosel = () => {
    return (
        <>

            <div>



                <Container>
                    <FadeIn>
                        <FaqToggle />
                    </FadeIn>



                </Container>

            </div>
        </>
    )
}

export default DJCarosel