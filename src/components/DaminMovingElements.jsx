"use client"
import { useState } from 'react';
import { FadeIn } from './FadeIn';
import bannericon from '@/assets/home/bannericon.svg'
import bannericon2 from '@/assets/home/bannericon2.svg'

import Image from 'next/image';
import Link from 'next/link';
import ar from '@/assets/home/ar.svg'


const MovingText = [

    { id: 1, text: "Protect your money", icon: bannericon },
    { id: 2, text: "Protect your money", icon: bannericon },
    { id: 3, text: "Protect your money", icon: bannericon },
    { id: 4, text: "Protect your money", icon: bannericon },
    { id: 5, text: "Protect your money", icon: bannericon },
    { id: 7, text: "Protect your money", icon: bannericon },
    { id: 8, text: "Protect your money", icon: bannericon },
    { id: 9, text: "Protect your money", icon: bannericon },

    { id: 10, text: "Protect your money", icon: bannericon },
    { id: 11, text: "Protect your money", icon: bannericon },
    { id: 12, text: "Protect your money", icon: bannericon },
    { id: 13, text: "Protect your money", icon: bannericon },
    { id: 14, text: "Protect your money", icon: bannericon },
    { id: 15, text: "Protect your money", icon: bannericon },

];


const MovingText2 = [

    { id: 1, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 2, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 3, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 4, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 5, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 7, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 8, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 9, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 10, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 11, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 12, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 13, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 14, text: "Reduced Chargeback", icon: bannericon2 },
    { id: 15, text: "Reduced Chargeback", icon: bannericon2 },

];

const TextBanner = () => {


    const [isPaused, setIsPaused] = useState(false);
    const [isPaused2, setIsPaused2] = useState(false);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const togglePause2 = () => {
        setIsPaused2(!isPaused2);
    };


    const myStyle = {

        animationPlayState: isPaused ? "paused" : "running",
    };

    const myStyle2 = {

        animationPlayState: isPaused2 ? "paused" : "running",
    };



    return (
        <div className='   py-10 md:py-16'>


            <div className="text-banner overflow-hidden ">


                <ul className="flex items-center space-x-28 animate-scroll" style={myStyle} onMouseEnter={togglePause} onMouseLeave={togglePause}  >
                    {MovingText.map((person, index) => (


                        <li key={index} className='flex gap-8 items-center' >

                            <Image src={person.icon} alt='' />

                            <p className='text-black font-montserrat-semibold tracking-tight md:text-6xl text-3xl'>{person.text}</p>




                            <div className=''>
                                <Link href="" className='w-fit flex gap-3 bg-[#9CFFDF] rounded-full px-14 py-9  text-lg font-montserrat-semibold'>
                                    Sign up now <Image src={ar} alt='' />
                                </Link>
                            </div>


                        </li>


                    ))}
                </ul>



                <ul className="mt-6 flex items-center space-x-28 animate-scroll2" style={myStyle2} onMouseEnter={togglePause2} onMouseLeave={togglePause2}   >
                    {MovingText2.map((person, index) => (


                        <li key={index} className='flex gap-8 items-center' >

                            <Image src={person.icon} alt='' />

                            <p className='text-black font-montserrat-semibold tracking-tight md:text-6xl text-3xl'>{person.text}</p>




                            <div className=''>
                                <Link href="" className='w-fit flex gap-3 bg-[#FFDF54] rounded-full px-14 py-9  text-lg font-montserrat-semibold'>
                                    Sign up now <Image src={ar} alt='' />
                                </Link>
                            </div>


                        </li>

                    ))}
                </ul>



            </div>

        </div>
    )
}

export default TextBanner