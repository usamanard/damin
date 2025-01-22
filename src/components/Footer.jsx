import React from 'react'
import footerpolygon from '@/assets/home/footerpolygon.svg'
import { Container } from './Container'
import bearplexlogo from '@/assets/home/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import ImageBox from './ImageBox'
import footermail from '@/assets/home/footermail.svg'
import footerphone from '@/assets/home/footerphone.svg'
import footerfeedback from '@/assets/home/footerfeedback.svg'
import footermessage from '@/assets/home/footermessage.svg'

import SocialIcons from './SocialIcons'




const navigation = [
    {
        title: 'Explore',
        links: [
            { title: 'About Company', href: '/' },
            { title: 'Blogs/Media', href: '/' },
            { title: 'Careers', href: '/' },
            { title: 'Get in Touch', href: '/' },


        ],
    },
    {
        title: 'Our Services',
        links: [
            { title: 'Product Development', href: '/' },
            { title: 'UX & Interaction Design', href: '/' },
            { title: 'Quality Assurance', href: '/' },
            { title: 'Digital Transformation', href: '/' },
        ],
    },
    {
        title: 'Help',
        links: [
            { title: 'Terms and Conditions', href: '#', },
            { title: 'Privacy Policy', href: '#', },
            { title: 'Refund Policy', href: '#', },
            { title: 'Brand Assets', href: '#', },
        ],
    },
]

function Navigation() {
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-2 md:gap-24 sm:grid-cols-3">
                {navigation.map((section) => (
                    <li key={section.title}>
                        <div className="font-BearFont-semibold text-xl mb-2 tracking-tight  text-white">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-base font-BearFont-regular text-[#8F8F8F]">

                            {section.links.map((link) => (



                                <li key={link.title} className="mt-3">



                                    <Link
                                        href={link.href}
                                        className="transition  hover:text-white"
                                    >
                                        <div className='flex items-center'>

                                            {link?.icon ? <Image
                                                src={link?.icon}
                                                alt=''
                                                className='mr-4'
                                            />
                                                : ''}


                                            <h4>
                                                {link.title}
                                            </h4>

                                        </div>

                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const Footer = () => {
    return (
        <>

            <div className='py-12 bg-black min-h-screen bg-bottom bg-no-repeat bg-contain' >

                <Container>

                    <div className='pt-0 md:pt-16 pb-16 flex flex-col md:flex-row justify-between'>

                        <div>
                            <Image
                                src={bearplexlogo}
                                alt=''
                                className='mb-16 md:mb-0'
                            />
                        <p className='mt-2 max-w-sm pr-0 md:pr-4  text-base font-BearFont-regular text-[#ffffff95]'>We integrate AI and machine learning to ensure your product sets new benchmarks.</p>

                        </div>

                        <div>
                            <div className='pr-0 md:pr-12'>
                                <Navigation />
                            </div>
                        </div>

                    </div>

                    {/* <hr className='h-px bg-white opacity-20  w-full' /> */}

                    <div className='py-12 md:py-24 mt-6 border border-x-0 border-y-1 border-[#ffffff20]'>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-0 '>

                            <ImageBox image={footermail} title="Email"  description="We reply within 12 hours"/>
                            <ImageBox image={footerphone} title="Call Us"  description="Call us anytime Mon-Fri" />
                            <ImageBox image={footerfeedback} title="Feedback"  description="Always a good idea."/>
                            <ImageBox image={footermessage} title="Chat"  description="We are available"/>

                        </div>
                    </div>


                    <div className='mt-12 md:mt-24  flex flex-col-reverse md:flex-row justify-between'>

                        <div>
                        <h4 className='mt-6 md:mt-0 font-BearFont-regular text-base  text-white'>© Damin, Inc 2024 All Rights Reserved.</h4>
                        </div>

                        <div>

                        {/* <h4 className='font-BearFont-regular text-base   text-white'>© Damin, Inc 2023. All Rights Reserved.</h4> */}
                        <SocialIcons/>
                        </div>

                    </div>


                </Container>
            </div>
        </>
    )
}

export default Footer