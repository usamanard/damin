import React from 'react'
import { Container } from './Container'
import footerdaminimage from '@/assets/home/footerdaminimage.svg'
import Image from 'next/image'
import Link from 'next/link'
import QrCode from './QrCode'




const navigation = [
    {
        title: 'Services',
        links: [
            { title: 'Job oppotunities', href: '/' },
            { title: 'Newsletter', href: '/' },
            { title: 'Blog', href: '/' },



        ],
    },
    {
        title: 'About us',
        links: [
            { title: 'Who are we', href: '/' },
            { title: 'Contact us', href: '/' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { title: 'Merchant FAQs', href: '#', },
            { title: 'Shopper FAQs', href: '#', },

        ],
    },
]


const contacts = [
    {
        title: 'Contact Us',
        links: [
            { title: 'Morocco: +212 80 86 87 015', href: '/' },
            { title: 'Mon - Fri: 9AM - 5PM', href: '/' },
            { title: 'Support: support@damin.ma', href: '/' },
            { title: 'Website Live Chat: Mon - Sun: 24H/7', href: '/' },




        ],
    },

]



function Navigation() {
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-3 ">
                {navigation.map((section) => (
                    <li key={section.title}>
                        <div className="font-montserrat-semibold text-xl mb-2 tracking-tight  text-white">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-6 text-[14px] font-montserrat text-white">

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

function Contacts() {
    return (
        <nav>
            <ul role="list" className="md:mt-0 mt-8 grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-1 ">
                {contacts.map((section) => (
                    <li key={section.title}>
                        <div className="font-montserrat-semibold text-xl mb-2 tracking-tight  text-white">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-6 text-[14px] font-montserrat text-white">

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


function QRScannerDaminFooter() {
    return (
        <>

            <div className=' w-fit flex gap-4 items-center '>


                <div className='rounded-[10px]  bg-black'>

                    <QrCode />

                </div>

                <div>

                    <h3 className=' text-white font-montserrat-semibold text-[14px] leading-[18px]'>

                        Scan and get damin app


                    </h3>

                    <p className='text-[#ffffff80] mt-2 font-montserrat text-[12px] leading-[14px]'>
                        damin is available in the<br /> Kingdom of Morocco

                    </p>

                </div>




            </div>
        </>
    )
}

const FooterDamin = () => {
    return (
        <div className='bg-black py-24 overflow-hidden'>

            <Container>


                <div className='flex items-end flex-col md:flex-row'>


                    <div className='w-full md:w-3/5'>

                        <Image src={footerdaminimage} alt="" />


                        <div className='max-w-full md:max-w-[300px]'>
                            <p className='mt-6   text-white font-montserrat-medium  tracking-wide  text-[14px] '>




                                Damin branch name of Cover home SARL, 3 Allal ben Abdullah N 41, Fes, Kingdom of Morocco
                            </p>
                        </div>


                        <div className='mt-14 max-w-xl'>
                            <div className='pr-0 md:pr-0'>
                                <Navigation />
                            </div>
                        </div>

                    </div>




                    <div className='w-full md:w-2/5'>
                        <Contacts />
                    </div>

                </div>


                <div className='flex gap-10 md:gap-0 items-end mt-16 flex-col-reverse md:flex-row'>


                    <div className='w-full md:w-3/5'>


                        {/* show on desktop  */}
                        <div className='hidden md:block'>
                            <div className='flex gap-12'>


                                <p className='text-[14px] font-montserrat text-[#ffffff80]'>
                                    2024 damin. All right reserved.
                                </p>



                                <p className='text-[14px] font-montserrat text-white'>
                                    Privacy Policy
                                </p>


                                <p className='text-[14px] font-montserrat text-white'>
                                    Terms & Conditions
                                </p>


                            </div>
                        </div>

                        {/* Show on mobile  */}
                        <div className='block md:hidden'>
                            <div className='flex flex-col'>






                                <div className='flex gap-6'>
                                    <p className='text-[14px] font-montserrat text-white'>
                                        Privacy Policy
                                    </p>


                                    <p className='text-[14px] font-montserrat text-white'>
                                        Terms & Conditions
                                    </p>
                                </div>


                                <p className='mt-8 text-[14px] font-montserrat text-[#ffffff80]'>
                                    2024 damin. All right reserved.
                                </p>


                            </div>
                        </div>







                    </div>




                    <div className='w-full md:w-2/5 '>


                        <div className='flex'>

                            <QRScannerDaminFooter />


                        </div>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default FooterDamin