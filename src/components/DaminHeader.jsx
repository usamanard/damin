import React, { useState } from 'react'
import { Container } from './Container'
import Image from 'next/image'
import Link from 'next/link';


import daminlogo from '@/assets/home/daminlogo.svg'
import connecticon from '@/assets/home/connecticon.svg'



const DaminHeader = () => {




  const navItems = [
    { title: 'Shop', href: '/about' },
    { title: 'Ways to pay', href: '/about' },
    { title: 'For business', href: '/business' },
  ];

  return (
    <div className='pt-8'>
      <Container>


        <div className='bg-black rounded-full px-2 py-2 flex items-center justify-between'>


          <div className='w-full pl-2 md:pl-4'>
            <Image src={daminlogo} alt="" />
          </div>

          <div className='w-full hidden md:block'>



            <ul className="flex gap-10 justify-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='text-[#b8b8b8] text-[14px] font-montserrat-medium   hover:text-white duration-300'>

                    {item.title}

                  </Link>
                </li>
              ))}
            </ul>


          </div>

          <div className='w-full flex justify-end'>


            <Link href="/">
            <Image src={connecticon} alt=''/>
            </Link>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default DaminHeader