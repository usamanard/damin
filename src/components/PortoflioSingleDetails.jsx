import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import figmawordpress from '@/assets/home/figmawordpress.svg'
import clsx from 'clsx'

const PortoflioSingleDetails = ({ title, description, stack, isHovered, link }) => {
    return (

        <>
            <div>


                <div className='flex justify-between w-full'>

                    <div>
                        <h3 className='text-white text-xl md:text-2xl font-BearFont-medium tracking-tight '>{title}</h3>

                        <p className='mt-2 text-base font-BearFont-regular text-[#ffffff75]'>{description}</p>

                        <Image
                            className='mt-4 md:mt-8'
                            src={stack}
                            alt=''
                        />


                    </div>

                    <div>
                        <Link href={link}>

                            <div className=''>
                                <svg
                                    className={clsx(
                                        "w-16 h-16 p-6 rounded-full bg-white transition-opacity duration-300",
                                        isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    )}
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.75 10.5H19.25M19.25 10.5L10.5 1.75M19.25 10.5L10.5 19.25"
                                        stroke="black"
                                        strokeWidth="2.5"  // Use camelCase for attributes in JSX
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                        </Link>
                    </div>


                </div>

               


            </div>
        </>


    )
}

export default PortoflioSingleDetails