"use client"
import { Container } from '@/components/Container'
import DaminHeader from '@/components/DaminHeader'
import React from 'react'
import newsetbg from '@/assets/home/newsetbg.svg'
import whyworkplus from '@/assets/home/whyworkplus.svg'
import choosering from '@/assets/home/choosering.svg'

import aboutimage from '@/assets/home/aboutimage.png'

import iconabout from '@/assets/home/iconabout.svg'

import Image from 'next/image'

import FooterDamin from '@/components/FooterDamin'
import Link from 'next/link'




const FeaturesData = [

    { id: 2, title: "Highly aligned but loosely coupled", number: "001", count: 33, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 1, title: "Launch early then iterate", number: "002", count: 18, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 3, title: "We turn the good into great", number: "003", count: 40, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 4, title: "One door vs two door decisions", number: "001", count: 33, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 5, title: "We represent a united front at all time", number: "002", count: 18, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },
    { id: 6, title: "Here to empower our communities", number: "003", count: 40, description: "We stay aligned to one strategy and goals. We have faith in other's abilities and knowledge, knowing we'll each make the right decisions in our areas of expertise." },



];









function HeroSection() {
    return (
        < >

            <div className='bg-[#9CFFDF]  bg-bottom  bg-no-repeat' style={{ backgroundImage: `url(${newsetbg.src})` }} >






                <DaminHeader />



                {/* Moving Gradient */}


                <Container className="py-24 md:py-28">

                    <div className='flex gap-2 flex-col md:flex-row '>


                        <div className='flex w-full flex-col justify-center md:w-1/2 '>

                            <h1 className='text-6xl md:text-9xl -mr-12 font-NardFont-medium tracking-tight  text-black max-w-5xl'>
                                Making payments easier than ever
                            </h1>



                            <p className='mt-4    text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-lg max-w-lg '>

                                Damin is the leading fintech platform to shop, pay and bank in Saudia Arabia and the wider GCC region, and Saudi&apos;s first fintech unicorn.
                            </p>




                        </div>





                        <div className='pl-0  mt-8 md:mt-0 md:pl-24 flex  w-full md:w-1/2'>
                            <Image src={aboutimage} alt='' />


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

                <div className='pb-12 md:pb-24'>

                    <div className='flex justify-center pt-24 '>

                    <h2 className='text-3xl md:text-6xl font-montserrat-semibold tracking-tighter pr-0 md:pr-20  text-black max-w-5xl'>
                                Our operating principles
                            </h2>

                        

                    </div>


                    <div className='mt-12 md:mt-20  '>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                            {FeaturesData.map((person, index) => (


                                <div key={person.id} className='bg-[#F5F9F8] rounded-[35px] p-4 '>


                                    <div className='flex flex-col-reverse md:flex-row justify-between'>

                                        <h2 className=' p-2 text-2xl md:text-2xl font-montserrat-semibold tracking-tighter pr-0 md:pr-20  text-black max-w-5xl'>
                                            {person.title}
                                        </h2>


                                        <div className=''>

                                            <h2 className='bg-white text-[#4d4d4d] w-fit font-montserrat text-[12px] rounded-full px-4 py-4'>

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



function WhatWeOffer() {
    return (
        <>
            <div>

                {/* top section  */}
                <Container>


                    <div className='flex flex-col md:flex-row pt-24 '>

                        <div className='w-full md:w-1/2 '>


                            <h2 className='text-3xl md:text-6xl font-montserrat-semibold tracking-tighter pr-0 md:pr-20  text-black max-w-5xl'>
                                What we offer
                            </h2>


                            <div className='mt-12 first-letter:flex gap-6 max-w-[250px] items-start'>


                                <Image src={choosering} alt='' />

                                <p className='   text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-lg max-w-lg '>

                                    Damin: Secure Cash on Delivery COD Solution
                                </p>
                            </div>




                        </div>


                        <div className='w-full md:w-1/2  flex justify-end'>


                            <div className=' gap-6 max-w-[420px] p-6 items-start bg-[#F4FFFB] rounded-[25px]'>




                                <p className='px-12 mt-2   text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-base '>


                                    With Tamara, you can shop and split your payments - No late fees. Our payment solutions are completely Sharia-compliant.
                                </p>


                                <div className='mt-24'>
                <Link href="" className=' flex gap-3 bg-[#ffffff] rounded-full px-3 py-3 pl-6 items-center  justify-between text-lg font-montserrat-semibold'>
                  Learn More <Image src={iconabout} alt='' />
                </Link>
                
              </div>


                                
                            </div>





                        </div>

                    </div>


                </Container>







            </div>
        </>
    )

}












const page = () => {
    return (
        <>
            <HeroSection />
            <WhatWeOffer />

            <Feauturs />



            {/* <ShopCarasoul/> */}

            <FooterDamin />
        </>
    )
}

export default page