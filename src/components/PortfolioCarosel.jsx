"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
import servicesfeature1 from '@/assets/home/portfolio/tectstack.png'
import Stars from '@/assets/home/Stars.svg'
import { Container } from './Container';

import caraimg1 from '@/assets/home/portfolio/caraimg1.png'
import caraimg2 from '@/assets/home/portfolio/caraimg2.png'
import caraimg3 from '@/assets/home/portfolio/caraimg3.png'
import { FadeIn, FadeInStagger } from './FadeIn';


const logos = [
  { id: 1, bg: caraimg1, feature: "case Study", src: servicesfeature1, title: "Damin Mobile Design" },
  { id: 2, bg: caraimg2, feature: "case Study", src: servicesfeature1, title: "Evolvere Web Design" },
  { id: 3, bg: caraimg3, feature: "case Study", src: servicesfeature1, title: "Dashboard Screen Design" },
  { id: 4, bg: caraimg1, feature: "case Study", src: servicesfeature1, title: "Damin Mobile Design" },
  { id: 5, bg: caraimg2, feature: "case Study", src: servicesfeature1, title: "Evolvere Web Design" },
  { id: 6, bg: caraimg3, feature: "case Study", src: servicesfeature1, title: "Dashboard Screen Design" },
  { id: 7, bg: caraimg1, feature: "case Study", src: servicesfeature1, title: "Damin Mobile Design" },
  { id: 8, bg: caraimg2, feature: "case Study", src: servicesfeature1, title: "Evolvere Web Design" },
  { id: 9, bg: caraimg3, feature: "case Study", src: servicesfeature1, title: "Dashboard Screen Design" },

  // Add more logos as needed
];


const PortfolioCarosel = () => {
  return (
    <>

      <div className="ml-16 pt-24  ">
        <FadeInStagger>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            centeredSlides={false}
            initialSlide={0}
            pagination={{
              clickable: true,
              type: 'bullets',
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="swiper"

          //   onSlideChange={(swiper) => {
          //     setActiveIndex(swiper.activeIndex) // Update active bullet index on slide change
          //   }}
          >
            {logos.map((latest) => (
              <SwiperSlide
                key={latest.id}
                className=" "
                style={{ width: '385px' }}
              >
                <FadeIn>
                  <div key={latest.id} className="group flex   rounded-[20px]">
                    <article className="relative flex w-full flex-col    transition    ">
                      <div className=" rounded-3xl relative  min-h-[485px]  transition ease-in   bg-cover bg-no-repeat" style={{ backgroundImage: `url(${latest.bg.src})` }}>
                        <div className="flex flex-col">


                          <div className="flex  absolute bottom-0 flex-col justify-between transition ease-in gap-0 bg-white  group-hover:bg-black rounded-[16px] mx-3 my-4 overflow-hidden  p-6">
                            <div

                              className=" cursor-pointer "
                            >

                              <h3 className=" flex gap-x-1  text-xl md:text-3xl font-BearFont-medium tracking-tight capitalize text-black group-hover:text-white">
                                {latest?.title}
                              </h3>

                              <div className=' mt-10 flex justify-between items-center'>

                                <p className='text-base font-BearFont-regular capitalize text-black group-hover:text-white'>{latest.feature}</p>
                                <Image src={latest.src} alt='' />

                                {/* <svg xmlns="http://www.w3.org/2000/svg" className='text-balck group-hover:text-white' width="32" height="33" viewBox="0 0 32 33" >
  <path d="M15.9996 3.16675C13.3625 3.16672 10.7845 3.94871 8.59185 5.41381C6.39915 6.87892 4.69015 8.96133 3.68096 11.3977C2.67178 13.8341 2.40774 16.5151 2.92224 19.1015C3.43673 21.688 4.70666 24.0638 6.57141 25.9285C8.43617 27.7932 10.812 29.0631 13.3985 29.5775C15.9849 30.0919 18.6659 29.8278 21.1022 28.8186C23.5386 27.8094 25.621 26.1003 27.086 23.9076C28.5511 21.7148 29.333 19.1369 29.3329 16.4998C29.3289 12.9648 27.9228 9.57579 25.4232 7.07623C22.9236 4.57667 19.5345 3.17069 15.9996 3.16675ZM4.01197 16.4998C4.01064 14.8186 4.36433 13.1561 5.04989 11.6211L10.7683 27.2885C8.74275 26.306 7.03476 24.773 5.83988 22.865C4.645 20.957 4.01153 18.751 4.01197 16.4998ZM15.9996 28.4884C14.8532 28.4884 13.7126 28.3239 12.6129 27.9999L16.2101 17.5483L19.8945 27.6435C19.9185 27.7008 19.9473 27.7561 19.9804 27.8087C18.7016 28.2592 17.3555 28.4891 15.9996 28.4884ZM17.6516 10.8792C18.3733 10.8413 19.0237 10.7654 19.0237 10.7654C19.1533 10.7534 19.273 10.6909 19.3569 10.5914C19.4408 10.492 19.4822 10.3634 19.4722 10.2337C19.4621 10.1039 19.4014 9.98332 19.3032 9.89794C19.2049 9.81256 19.0771 9.76925 18.9472 9.77738C18.9472 9.77738 17.0054 9.9298 15.7519 9.9298C14.5741 9.9298 12.5948 9.77738 12.5948 9.77738C12.4651 9.76965 12.3375 9.81318 12.2396 9.89859C12.1417 9.98401 12.0812 10.1045 12.0713 10.234C12.0613 10.3636 12.1026 10.4919 12.1863 10.5913C12.27 10.6906 12.3894 10.7532 12.5188 10.7654C12.5188 10.7654 13.1301 10.8413 13.7761 10.8792L15.6438 15.9966L13.0198 23.8644L8.6547 10.8792C9.37693 10.8413 10.0266 10.7654 10.0266 10.7654C10.1561 10.7533 10.2757 10.6908 10.3595 10.5913C10.4433 10.4918 10.4846 10.3634 10.4745 10.2337C10.4645 10.104 10.4038 9.98349 10.3057 9.89813C10.2075 9.81276 10.0798 9.76941 9.94995 9.77742C9.94995 9.77742 8.00872 9.92984 6.75513 9.92984C6.53019 9.92984 6.26489 9.92431 5.98365 9.91527C6.93673 8.46477 8.1935 7.2386 9.66703 6.32155C11.1406 5.4045 12.7957 4.81845 14.518 4.60393C16.2403 4.38941 17.9886 4.55155 19.6421 5.07912C21.2956 5.6067 22.8147 6.48712 24.0945 7.65951C24.0429 7.65633 23.9924 7.64991 23.9394 7.64991C23.3907 7.66625 22.8708 7.89929 22.4935 8.29801C22.1163 8.69673 21.9123 9.22867 21.9263 9.77742C22.0519 10.8053 22.4595 11.7784 23.1038 12.589C23.7338 13.5779 24.076 14.7227 24.0921 15.8951C23.9676 17.2226 23.6606 18.5267 23.18 19.7704L21.984 23.7655L17.6516 10.8792ZM22.0263 26.8614L25.6877 16.2751C26.2689 14.9171 26.5786 13.4584 26.5994 11.9814C26.6001 11.5692 26.5732 11.1573 26.5188 10.7487C28.0169 13.4903 28.3857 16.7084 27.5466 19.7179C26.7075 22.7274 24.7268 25.2904 22.0263 26.8614Z" fill="black"/>
</svg> */}



                              </div>




                            </div>
                          </div>

                        </div>
                      </div>
                    </article>
                  </div>
                </FadeIn>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInStagger>
      </div>

      <Container>
        {/* here are the code for pointer and dots */}
        <FadeIn>
        <div className="mt-10 flex items-center py-5">
          <div className="hidden w-full md:block md:w-1/2">

          </div>

          <div className="flex mb-24 w-full justify-end md:w-1/2">
            <div className="flex gap-4">
              <div className="swiper-button-prev-custom cursor-pointer">
                <button className="  rounded-[50%] border border-1 border-black bg-transparent p-3 text-black hover:border-black hover:text-white hover:bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </button>
              </div>
              <div className="swiper-button-next-custom cursor-pointer">
                <button className="rounded-[50%] border border-1 border-black bg-transparent p-3 text-black hover:border-black hover:text-white hover:bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>
      </Container>
    </>
  )
}

export default PortfolioCarosel