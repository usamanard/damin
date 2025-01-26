"use client"
import { Container } from '@/components/Container'
import DaminHeader from '@/components/DaminHeader'
import React from 'react'
import newsetbg from '@/assets/home/newsetbg.svg'
import whyworkplus from '@/assets/home/whyworkplus.svg'

import BusinessMovingLogos from '@/components/BusinessMovingLogos'
import ShopCarasoul from '@/components/ShopCarasoul'
import Image from 'next/image'

import howitworkdemo from '@/assets/home/howitwork.png'



const FeaturesData = [

    { id: 2, title: "Average increase in AOV.", number: "001", count: 33, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 1, title: "Average increase in AOV.", number: "002", count: 18, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 3, title: "Average increase in AOV.", number: "003", count: 40, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },



];


const HowItWorkData = [

    { id: 2, title: "Turn browsers into customers", number: "Step-001", icon: howitworkdemo, description: "Use out our-of-box tools to remove pricing as a barrier at your store and increase sales." },
    { id: 1, title: "Shoppers flexibility at checkout", number: "Step-002", icon: howitworkdemo, description: "Use out our-of-box tools to remove pricing as a barrier at your store and increase sales." },
    { id: 3, title: "Get paid in full-upfront. No risk.", number: "Step-003", icon: howitworkdemo, description: "Use out our-of-box tools to remove pricing as a barrier at your store and increase sales." },



];


function HeroSection() {
    return (
        < >

            <div className='bg-[#9CFFDF]  bg-bottom  bg-no-repeat' style={{ backgroundImage: `url(${newsetbg.src})` }} >






                <DaminHeader />



                {/* Moving Gradient */}


                <Container className="py-24 md:py-28">







                    <div className='flex gap-2 flex-col md:flex-row '>


                        <div className='flex w-full flex-col md:w-1/2 pr-0 md:pr-10'>

                            <h1 className='text-6xl md:text-9xl font-NardFont-medium tracking-tight  text-black max-w-5xl'>
                                Boost your business with Damin.
                            </h1>



                            <p className='mt-4    text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-lg max-w-lg '>

                                Damin is the leading fintech platform to shop, pay and bank in Saudia Arabia and the wider GCC region, and Saudi&apos;s first fintech unicorn.
                            </p>




                        </div>





                        <div className='pl-0  mt-8 md:mt-0 md:pl-24 flex  w-full md:w-1/2'>



                        </div>

                    </div>
                </Container>

            </div>
        </>
    )
}


function Feauturs() {
    return (

        <>
            <Container>

                <div className='py-24'>

                    <div className='flex flex-col md:flex-row pt-24 items-center'>

                        <div className='w-full md:w-1/2 '>


                            <h2 className='text-3xl md:text-6xl font-montserrat-semibold tracking-tighter pr-0 md:pr-20  text-black max-w-5xl'>
                                Small payment mean big business
                            </h2>




                        </div>


                        <div className='w-full md:w-1/2 '>



                        </div>

                    </div>


                    <div className='mt-20 '>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                            {FeaturesData.map((person, index) => (


                                <div key={person.id} className='bg-[#F5F9F8] rounded-[35px] p-4 '>


                                    <div className='flex flex-col-reverse md:flex-row justify-between'>

                                        <h2 className=' p-2 text-2xl md:text-2xl font-montserrat-semibold tracking-tighter pr-0 md:pr-20  text-black max-w-5xl'>
                                            {person.title}
                                        </h2>


                                        <div className=''>

                                            <h2 className='bg-white text-[#4d4d4d] font-montserrat text-[12px] rounded-full px-4 py-4'>

                                                {person.number}

                                            </h2>


                                        </div>






                                    </div>


                                    <div className='mt-8 rounded-[20px] bg-white p-10'>

                                        <p className='  text-[#4d4d4d] font-montserrat-medium  tracking-wide text-sm '>

                                            {person.description}
                                        </p>


                                        <div className='flex items-center  mt-8'  >

                                            <Image src={whyworkplus} alt="" className='' />
                                            <h2 className='text-3xl md:text-7xl font-NardFont-extrabold tracking-tighter   text-black'>
                                                {person.count}
                                            </h2>

                                            <h2 className='text-3xl md:text-7xl font-NardFont-regular tracking-tighter   text-black '>
                                                %
                                            </h2>


                                        </div>

                                    </div>






                                </div>


                            ))}
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}


function HowItWork() {
    return (
        <div className='bg-gradient-to-b from-[#F5F9F8] to-[#ffffff]'>
            <Container>

                <div className='py-24'>

                    <div className='flex justify-center'>




                        <h2 className='text-3xl md:text-6xl font-montserrat-semibold tracking-tighter pr-0 md:pr-20  text-black max-w-5xl'>
                            How it works
                        </h2>



                    </div>


                    <div className='mt-20'>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                            {HowItWorkData.map((person, index) => (


                                <div key={person.id} className='bg-[#F5F9F8] rounded-[35px] p-4 '>


                                    <div className='flex  justify-center'>

                                        <h2 className=' mt-2 text-center px-10 text-2xl md:text-2xl font-montserrat-semibold tracking-tighter  text-black'>
                                            {person.title}
                                        </h2>




                                    </div>



                                    <div className='flex justify-center mt-6 indexcl' style={{zIndex:10}}>
                                        <h2 className='z-10 bg-white w-fit text-[#4d4d4d] font-montserrat-medium text-[12px] rounded-full px-3 py-1 border border-1 border-[#6AEBB6]'>

                                            {person.number}

                                        </h2>
                                    </div>
                                    <div className='-mt-5 '>




                                        <Image src={person.icon} alt='' className='' />



                                    </div>


                                    <p className=' mt-6 mb-8 text-[#4d4d4d] text-center px-10 font-montserrat-medium  tracking-wide text-sm '>

                                        {person.description}
                                    </p>






                                </div>


                            ))}
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}



const page = () => {
    return (
        <>
            <HeroSection />
            <BusinessMovingLogos />
            <Feauturs />
            <HowItWork />
            {/* <ShopCarasoul/> */}

            <div className='h-[400px] bg-red-400'>

            </div>
        </>
    )
}

export default page