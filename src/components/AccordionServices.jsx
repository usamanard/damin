"use client"
import React, { useState, useEffect } from 'react';



import Image from 'next/image';
import iconclose from '@/assets/home/accordionopen.svg'


import { Collapse } from 'react-collapse';
import Link from 'next/link';



const services = [
    {
        question: 'Product Development',
        link: '/',
        answer: 'From initial ideation to final implementation, Damin product development is a masterclass in precision, agility, and smart engineering. We integrate AI and machine learning to ensure your product sets new benchmarks.',
    },
    {
        question: 'UX & Interaction Design',
        link: '/',
        answer: 'Our web development process is straightforward. Once you contact us, well schedule a consultation to understand your needs. After that, we\'ll create a project plan, design your website, develop it, and perform testing. You\'ll have the opportunity to review and request revisions. Once you\'re satisfied, we\'ll launch your site.',
    },
    {
        question: 'Quality Assurance',
        link: '/',
        answer: 'Our web development process is straightforward. Our web development process is straightforward.Our web development process is straightforward.Our web development process is straightforward.Our web development process is straightforward.Our web development process is straightforward. Once you contact us, well schedule a consultation to understand your needs. After that, we\'ll create a project plan, design your website, develop it, and perform testing. You\'ll have the opportunity to review and request revisions. Once you\'re satisfied, we\'ll launch your site.',
    },
    {
        question: 'Digital Transformation',
        link: '/about',
        answer: 'Our web development process is straightforward. Once you contact us, well schedule a consultation to understand your needs. After that, we\'ll create a project plan, design your website, develop it, and perform testing. You\'ll have the opportunity to review and request revisions. Once you\'re satisfied, we\'ll launch your site.',
    },
    
];


const AccordionServices = () => {

    const [hoverIndex, setHoverIndex] = useState(0);


    return (
        <>
            <div className="transition-all duration-700 ease-in-out">
                {services.map((faq, index) => (
                    <div
                        className={`py-12 border border-x-0 border-t-0 border-b-1 border-[#272727]   ${hoverIndex === index ? '' : ''}`}
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)} // Open FAQ on hover
                        onMouseLeave={() => setHoverIndex(0)} // Close FAQ when not hovered
                    >
                        <div
                        className={` font-BearFont-medium text-xl md:text-3xl tracking-tighter w-full faq-toggle flex items-center   justify-between  ${hoverIndex === index ? 'text-white' : 'text-[#ffffff75]'}`} 
                        >
                            {faq.question}
                            <Link href={faq.link}>
                                <Image
                                    src={hoverIndex === index ? iconclose : ""}
                                    alt=''
                                    className='w-[80%] md:w-auto'
                                />
                            </Link>
                        </div>

                        <Collapse isOpened={hoverIndex === index}>
                            <div className="pt-6 pr-0 md:pr-24 font-BearFont-regular text-base text-[#ffffff80]">
                                {faq.answer}
                            </div>
                        </Collapse>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AccordionServices