import React from 'react'
import { FadeIn } from './FadeIn'
import { Container } from './Container'

import Image from 'next/image'

import ctabg from '@/assets/contact/ctabg.svg'
import ctalines from '@/assets/contact/ctalines.svg'
import ContactForm from './ContactForm'
import GreenFloatingButton from './GreenFloatingButton'


// const socialmedia = [
//     {
//         icon: linkedin,
//         href: '#',
//     },
//     {
//         icon: facebook,
//         href: '#',
//     },
//     {
//         icon: instagram,
//         href: '#',
//     },
//     {
//         icon: dribble,
//         href: '#',
//     }

// ]


const CtaSection = () => {
    return (
        <div className='bg-no-repeat bg-center bg-[#0c0c0c]  bg-cover overflow-hidden ' style={{backgroundImage:`url(${ctalines.src})`}}>

            <div id='contact' className=' bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${ ctabg.src })`}} >



                <Container>
                    <FadeIn>

                        <div className='grid grid-cols-1 md:grid-cols-2 py-28'>

                            {/* Left Side  */}
                            <div>

                                <FadeIn>
                                <GreenFloatingButton text="Contact Form" />

                                </FadeIn>

                                <FadeIn>
                                    <h1 className='mt-4 tracking-tighter font-BearFont-medium text-6xl  max-w-lg text-white'>
                                    Please fill in your details and get started.
                                    </h1>

                                </FadeIn>

                                {/* <div className='flex gap-8 mt-20'>
                                    {socialmedia.map((link, index) => (
                                        <a key={index} href={link.href}>
                                            <Image

                                                src={link.icon}
                                                alt=''

                                            />
                                        </a>

                                    ))}
                                </div> */}




                            </div>


                            {/* right side review carousel */}
                            <div className='flex justify-start '>

                                <ContactForm/>

                            </div>

                        </div>



                    </FadeIn>



                </Container>

            </div>
        </div>
    )
}

export default CtaSection