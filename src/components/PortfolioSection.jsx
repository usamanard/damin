"use client"


import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import portfoliowaiting from '@/assets/home/portfoliowaiting.svg'
import waitingicon from '@/assets/home/waitingicon.svg'
import Image from 'next/image';
import PortoflioSingleDetails from './PortoflioSingleDetails';
import figmawordpress from '@/assets/home/figmawordpress.svg'

import portfolio1 from '@/assets/home/portfolio/portfolio1.png'
import portfoliosvg from '@/assets/home/portfolio/portfolio1.svg'
import portfolio2 from '@/assets/home/portfolio/portfoilio2.svg'
import portfolio3 from '@/assets/home/portfolio/portolio3.svg'
import portfolio4 from '@/assets/home/portfolio/portfolio4.png'
import portfolio5 from '@/assets/home/portfolio/portfolio5.svg'





const PortfolioSection = () => {


  const [hoveredComponent, setHoveredComponent] = useState(null);



  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1,
    offset: ['start end', 'start start'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ['start end', 'start start'],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3,
    offset: ['start end', 'start start'],
  });

  // Calculate the translateY transform value based on the scroll progress
  //   const translateY1 = useTransform(scrollYProgress1, [0, 1], ['0%', '100%']);
  //   const translateY2 = useTransform(scrollYProgress2, [0, 1], ['0%', '100%']);
  //   const translateY3 = useTransform(scrollYProgress3, [0, 1], ['0%', '100%']);

  return (
    <div className=''>

      <div ref={container1} className='flex  items-start min-h-screen sticky top-[30px]'>
        <div className='mt-12 w-full grid grid-cols-1 md:grid-cols-2 justify-between  gap-9'>


          <motion.div style={{ opacity: 1 }}>
            <div className='min-h-[300px] overflow-hidden md:min-h-[600px] relative  group bg-[#101324] px-6 md:px-10 py-8 md:py-12 rounded-[30px]'
              onMouseEnter={() => setHoveredComponent('component1')}
              onMouseLeave={() => setHoveredComponent(null)}
            >

              <div className=' '>
                

                




                <div>
                  <PortoflioSingleDetails
                    title="Taxcube web design"
                    description="Revamped their website for more sales."
                    stack={figmawordpress}
                    link="/"
                    isHovered={hoveredComponent === 'component1'}
                  />
                </div>


                <div className='    '>
                  <Image src={portfoliosvg} unoptimized alt='' className=' scale-[1.01] absolute bottom-0 right-0 w-[70%] md:w-full'/>
                </div>



              </div>
            </div>
          </motion.div>


          <motion.div style={{ opacity: 1 }}>
            <div className='min-h-[300px] overflow-hidden relative md:min-h-[600px]  bg-[#0047D1] px-6 md:px-10 py-8 md:py-12  rounded-[30px]'
              onMouseEnter={() => setHoveredComponent('component2')}
              onMouseLeave={() => setHoveredComponent(null)} >



              <div className=' '>


                <div>
                  <PortoflioSingleDetails
                    title="Evolvere web design"
                    description="Revamped their website for more sales."
                    stack={figmawordpress}
                    link="/"

                    isHovered={hoveredComponent === 'component2'}
                  />
                </div>

                <div className='    '>
                  <Image src={portfolio2} unoptimized alt='' className=' scale-[1.01] absolute bottom-0 right-0 w-[70%] md:w-full'/>
                </div>



              </div>

            </div>

          </motion.div>
        </div>
      </div>

      <div ref={container2} className='flex pt-12 items-start min-h-screen sticky top-[30px]' >
        <div className='mt-12 w-full grid  grid-cols-1 md:grid-cols-2 justify-between gap-9'>

          <motion.div style={{ opacity: 1 }}>
            <div className='min-h-[300px] overflow-hidden relative md:min-h-[600px] bg-[#1CAD5F] rounded-[30px] px-6 md:px-10 py-8 md:py-12'
              onMouseEnter={() => setHoveredComponent('component3')}
              onMouseLeave={() => setHoveredComponent(null)}
            >

              <div className=' '>


                <div>
                  <PortoflioSingleDetails
                    title="Taroko Web Design"
                    description="Revamped their website for more sales."
                    stack={figmawordpress}
                    link="/"
                    isHovered={hoveredComponent === 'component3'}
                  />
                </div>

                <div className='    '>
                  <Image src={portfolio3} unoptimized alt='' className=' scale-[1.01] absolute bottom-0 right-0 w-[70%] md:w-full'/>
                </div>



              </div>
            </div>
          </motion.div>

          <motion.div style={{ opacity: 1 }}>
            <div className='min-h-[300px] overflow-hidden relative md:min-h-[600px] bg-[#0F9A7D] rounded-[30px] px-6 md:px-10 py-8 md:py-12'
              onMouseEnter={() => setHoveredComponent('component4')}
              onMouseLeave={() => setHoveredComponent(null)}
            >


              <div className=' '>


                <div>
                  <PortoflioSingleDetails
                    title="NuVision Web Design"
                    description="Revamped their website for more sales."
                    stack={figmawordpress}
                    link="/"
                    isHovered={hoveredComponent === 'component4'}
                  />
                </div>

                <div className='    '>
                  <Image src={portfolio4} unoptimized alt='' className='  absolute bottom-0 right-0 w-[70%] md:w-full'/>
                </div>



              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <div ref={container3} className='flex pt-24 items-start min-h-screen sticky top-[30px]' >
        <div className='mt-12 w-full grid  grid-cols-1 md:grid-cols-2 justify-between gap-9 '>
          <motion.div style={{ opacity: 1 }} >
            <div className='min-h-[300px] overflow-hidden relative md:min-h-[600px] bg-[#6A38EF] rounded-[30px] px-6 md:px-10 py-8 md:py-12'
              onMouseEnter={() => setHoveredComponent('component5')}
              onMouseLeave={() => setHoveredComponent(null)}
            >



              <div className=' '>


                <div>
                  <PortoflioSingleDetails
                    title="Taxcube web design"
                    description="Revamped their website for more sales."
                    stack={figmawordpress}
                    link="/"
                    isHovered={hoveredComponent === 'component4'}
                  />
                </div>





              </div>

              <div className='    '>
                  <Image src={portfolio5} unoptimized alt='' className=' absolute bottom-0 right-0 w-[70%] md:w-full'/>
                </div>

            </div>
          </motion.div>


          <motion.div style={{ opacity: 1 }}>
            <div className='min-h-[300px] overflow-hidden md:min-h-[600px] flex flex-col justify-between px-6 md:px-10 py-8 md:py-12 bg-white shadow-lg rounded-[30px] bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url(${portfoliowaiting.src})` }} >



              <div>

                <h3 className=' pr-10 font-BearFont-regular text-xl md:text-[35px] md:leading-[42px] tracking-tight'>Let us show your project here, tell us about your project today.</h3>
                <h2 className='mt-6 font-BearFont-medium text-2xl md:text-[45px] tracking-tight'>We&apos;re waiting...</h2>

              </div>

              <div className='flex justify-end'>
                <Link href="/">
                  <Image
                    src={waitingicon}
                    alt=''
                  />
                </Link>

              </div>




            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
