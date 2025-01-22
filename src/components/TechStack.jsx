import React from 'react'
import { Container } from './Container'
import Image from 'next/image'
import Link from 'next/link'
import servicesfeature1 from '@/assets/home/servicesfeature1.svg'
import servicesfeature2 from '@/assets/home/servicesfeature2.svg'
import servicesfeature3 from '@/assets/home/servicesfeature3.svg'
import servicequestionmark from '@/assets/home/servicequestionmark.svg'


import flutter from '@/assets/home/techstack/flutter.svg'
import javascript from '@/assets/home/techstack/javascript.svg'
import nextjs from '@/assets/home/techstack/nextjs.svg'
import tailwind from '@/assets/home/techstack/tailwind.svg'
import react from '@/assets/home/techstack/react.svg'
import MovingStack from './MovingStack'

import aws from '@/assets/home/techstack/aws.svg'
import flash from '@/assets/home/techstack/flash.svg'
import strapi from '@/assets/home/techstack/strapi.svg'
import openai from '@/assets/home/techstack/openai.svg'


import figma from '@/assets/home/techstack/figma.svg'
import adobe from '@/assets/home/techstack/adobe.svg'
import sketch from '@/assets/home/techstack/sketch.svg'
import procreate from '@/assets/home/techstack/procreate.svg'
import marvel from '@/assets/home/techstack/marvel.svg'







const TechStact1 = [
    { id: 1, src: flutter, title: "flutter" },
    { id: 2, src: javascript, title: "javascript" },
    { id: 3, src: nextjs, title: "nextjs" },
    { id: 4, src: tailwind, title: "tailwind" },
    { id: 5, src: react, title: "react" },
    { id: 6, src: nextjs, title: "nextjs" },


    // Add more logos as needed
];

const TechStact2 = [
    { id: 1, src: aws, title: "Aws" },
    { id: 2, src: flash, title: "flash" },
    { id: 3, src: strapi, title: "strapi" },
    { id: 4, src: openai, title: "openai" },
    { id: 5, src: flash, title: "flash" },
    { id: 6, src: openai, title: "openai" },


    // Add more logos as needed
];


const TechStact3 = [
    { id: 1, src: figma, title: "figma" },
    { id: 2, src: adobe, title: "adobe" },
    { id: 3, src: sketch, title: "sketch" },
    { id: 4, src: procreate, title: "procreate" },
    { id: 5, src: marvel, title: "marvel" },
    { id: 6, src: procreate, title: "procreate" },


    // Add more logos as needed
];


const TechStack = () => {
    return (
        <>

            <Container className='hidden md:block'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-[0_20px_24px_-4px_#10182814;] rounded-[12px] '>

                    <div className='border px-5 py-9  flex flex-col gap-6  border-[#EAECF0] rounded-l-[12px] '>
                        {/* <Image
                            src={servicesfeature1}
                            alt=''
                            className='mb-2'
                        /> */}

                        <div className='mb-2 max-w-[220px] py-1.5 rounded-[6px] bg-[#F9FAFB] border-1 border border-[#F2F4F7]'>
                            <MovingStack TechStact={TechStact1} />
                        </div>

                        <h3 className='font-BearFont-medium tracking-tighter  text-2xl text-black'>Our dev tools to develop your ideas</h3>

                        <Link  className='w-fit text-textColor text-[15px] font-BearFont-regular px-4 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0]' href='/product-development'>
                            See more
                        </Link>

                    </div>



                    <div className='border-y  px-5  py-9  flex flex-col gap-6  border-[#EAECF0]'>
                        
                    <div className='mb-2 max-w-[220px] py-1.5 rounded-[6px] bg-[#F9FAFB] border-1 border border-[#F2F4F7]'>
                            <MovingStack TechStact={TechStact2} />
                        </div>

                        <h3 className='font-BearFont-medium tracking-tighter text-2xl text-black'>Server tools to keep things in speed</h3>

                        <Link className='w-fit text-textColor text-[15px] font-BearFont-regular px-4 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0]' href=''>
                            See more
                        </Link>
                    </div>



                    <div className='border px-5 py-9  flex flex-col gap-6  border-[#EAECF0]'>
                    <div className='mb-2 max-w-[220px] py-1.5 rounded-[6px] bg-[#F9FAFB] border-1 border border-[#F2F4F7]'>
                            <MovingStack TechStact={TechStact3} />
                        </div>


                        <h3 className='font-BearFont-medium tracking-tighter text-2xl text-black'>Design tools to spread magic</h3>

                        <Link className='w-fit text-textColor text-[15px] font-BearFont-regular px-4 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0]' href=''>
                            See more
                        </Link>
                    </div>


                    <div className='  px-5 py-9  flex flex-col gap-6  border-[#EAECF0] bg-black rounded-r-[12px]  bg-right-top bg-no-repeat' style={{ backgroundImage: `url(${servicequestionmark.src})` }}>

                        <Image
                            src={servicesfeature3}
                            alt=''
                            className='mb-2 opacity-0'
                        />

                        <h3 className='font-BearFont-medium tracking-tighter text-2xl text-white'>Want something different?</h3>

                        <button className='w-fit rounded-full bg-gradient-to-r px-[1px] pt-[1px] pb-[2px] from-[#2045FF]  to-[#9032FF]  '>
                            <Link className='w-fit text-white text-[15px]  bg-black   font-BearFont-regular px-4 py-1 rounded-full ' href=''>
                                Talk to team
                            </Link>
                        </button>

                        {/* <Link className='w-fit text-white text-[15px] font-BearFont-regular px-4 py-1 rounded-full  border border-gradient-to-r' href=''>
                See more
              </Link> */}

                    </div>

                </div>
            </Container>

            <Container className='block md:hidden'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-[0_20px_24px_-4px_#10182814;] rounded-[12px] '>

                    <div className='border px-5 py-9  flex flex-col gap-6  border-[#EAECF0] rounded-t-[12px] '>
                        <Image
                            src={servicesfeature1}
                            alt=''
                            className='mb-2'
                        />

                        <h3 className='font-BearFont-medium tracking-tighter  text-xl text-black'>Our dev tools to develop your ideas</h3>

                        <Link className='w-fit text-textColor text-[15px] font-BearFont-regular px-4 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0]' href=''>
                            See more
                        </Link>

                    </div>



                    <div className='border-x  px-5  py-9  flex flex-col gap-6  border-[#EAECF0]'>
                        <Image
                            src={servicesfeature2}
                            alt=''
                            className='mb-2'
                        />

                        <h3 className='font-BearFont-medium tracking-tighter text-xl text-black'>Server tools to keep things in speed</h3>

                        <Link className='w-fit text-textColor text-[15px] font-BearFont-regular px-4 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0]' href=''>
                            See more
                        </Link>
                    </div>



                    <div className='border px-5 py-9  flex flex-col gap-6  border-[#EAECF0]'>
                        <Image
                            src={servicesfeature3}
                            alt=''
                            className='mb-2'
                        />

                        <h3 className='font-BearFont-medium tracking-tighter text-xl text-black'>Design tools to spread magic</h3>

                        <Link className='w-fit text-textColor text-[15px] font-BearFont-regular px-4 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0]' href=''>
                            See more
                        </Link>
                    </div>


                    <div className='  px-5 py-9  flex flex-col gap-6  border-[#EAECF0] bg-black rounded-b-[12px]  bg-right-top bg-no-repeat' style={{ backgroundImage: `url(${servicequestionmark.src})` }}>

                        <Image
                            src={servicesfeature3}
                            alt=''
                            className='mb-2 opacity-0'
                        />

                        <h3 className='font-BearFont-medium tracking-tighter text-xl text-white'>Want something different?</h3>

                        <button className='w-fit rounded-full bg-gradient-to-r px-[1px] pt-[1px] pb-[2px] from-[#2045FF]  to-[#9032FF]  '>
                            <Link className='w-fit text-white text-[15px]  bg-black   font-BearFont-regular px-4 py-1 rounded-full ' href=''>
                                Talk to team
                            </Link>
                        </button>

                        {/* <Link className='w-fit text-white text-[15px] font-BearFont-regular px-4 py-1 rounded-full  border border-gradient-to-r' href=''>
                See more
              </Link> */}

                    </div>

                </div>
            </Container>
        </>
    )
}

export default TechStack