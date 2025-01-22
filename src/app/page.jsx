"use client"
import { Container } from '@/components/Container'
import Image from 'next/image'
import whydamin1 from '@/assets/home/whydamin1.png'
import whydaminnew from '@/assets/home/whydaminnew.png'
import whydamin3 from '@/assets/home/whydamin3.png'
import whydamin4 from '@/assets/home/whydamin4.png'



import cardbg from '@/assets/home/cardbg.svg'
import quotes from '@/assets/home/quotes.svg'


import protectionicon from '@/assets/home/protectionicon.svg'
import newsetbg from '@/assets/home/newsetbg.svg'
import DaminHeader from '@/components/DaminHeader'
import QrCode from '@/components/QrCode'


import choosering from '@/assets/home/choosering.svg'
import Footer from '@/components/Footer'

import ctatempimage from '@/assets/home/ctatempimage.png'


import ctaticks from '@/assets/home/ctaticks.svg'
import ar from '@/assets/home/ar.svg'

import arrowright from '@/assets/home/arrowright.svg'
import shopbgbanner from '@/assets/home/shopbgbanner.svg'





import Link from 'next/link'
import MovingWeb from '@/components/MovingWeb'
import MovingText from '@/components/MovingText'
import DaminMovingElements from '@/components/DaminMovingElements'
import ShopCarasoul from '@/components/ShopCarasoul'
import sellwithdaminimage from '@/assets/home/sellwithdaminimage.png'
import FooterDamin from '@/components/FooterDamin'






function HeroSection() {
  return (
    < >

      <div className='bg-[#9CFFDF] bg-bottom  bg-no-repeat' style={{ backgroundImage: `url(${newsetbg.src})` }} >






        <DaminHeader />


        {/* Moving Gradient */}
        {/* <div className="processbg flex flex-wrap justify-center items-center overflow-hidden absolute h-[600px]">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}

        <Container className="py-28">







          <div className='flex gap-2 flex-col md:flex-row '>


            <div className='flex w-full flex-col md:w-1/2 pr-10'>

              <h1 className='text-9xl font-NardFont-medium tracking-tight  text-black max-w-5xl'>
                Your trusted way to pay
              </h1>



              <p className='mt-4   text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-lg max-w-lg '>

                Secure your purchases with Cash on Delivery and
                enjoy a hassle-free, trusted payment solution
              </p>



              <div className='mt-12 w-fit flex gap-6 items-center bg-white rounded-[16px] p-2'>

                <div>

                  <h3 className='pl-6 text-black font-montserrat-semibold text-[16px] leading-[18px]'>

                    Scan to download <br />the Damin App


                  </h3>

                </div>


                <div className='rounded-[10px] p-3 bg-black'>

                  <QrCode />
                </div>


              </div>
            </div>





            <div className='flex w-full md:w-1/2'>



            </div>

          </div>
        </Container>

      </div>
    </>
  )
}


function WhyUseDamin() {
  return (
    <>
      <div>

        {/* top section  */}
        <Container>


          <div className='flex pt-24 pb-16 items-center'>

            <div className='w-full md:w-1/2 '>


              <h2 className='text-3xl md:text-6xl font-montserrat-semibold tracking-tighter pr-20  text-black max-w-5xl'>
                Why you should use damin?
              </h2>




            </div>


            <div className='w-full md:w-1/2 '>


              <div className=' flex justify-end items-start'>



                <div className='flex gap-6 max-w-[250px] items-start'>


                  <Image src={choosering} alt='' />

                  <p className='   text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-lg max-w-lg '>

                    Damin: Secure Cash on Delivery COD Solution
                  </p>
                </div>







              </div>

            </div>

          </div>


        </Container>



        {/* First section  */}
        <Container>

          <div className='p-6 rounded-[25px] gap-4 flex flex-col md:flex-row shadow-2xl items-center' >



            <div className='w-full md:w-[47%] p-0  md:p-7'>

              <div className='flex gap-1'>
                <Image src={protectionicon} alt='' />


                <h5 className='text-[#4d4d4d] font-montserrat text-[12px] rounded-full px-4 py-3 border border-1 border-[00000020]' >
                  #1 trusted Secure platform
                </h5>

              </div>

              <h3 className='mt-6 text-2xl md:text-4xl font-montserrat-medium tracking-tighter pr-20  text-black '>
                Buyer Protection
              </h3>


              <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide text-base '>



                With Damin, buyers enjoy peace of mind. Our COD solution ensures that you pay only when you receive your order. No upfront payments required.
              </p>



              {/* card */}
              <div className=' relative mt-10  border border-1 border-[#F3F5F7] py-5  px-5 rounded-[25px] bg-left bg-cover ' style={{ backgroundImage: `url(${cardbg.src})` }}>






                <h3 className=' text-lg font-montserrat-medium tracking pr-20  text-black '>
                  Nadia, Casablanca
                </h3>

                <p className='text-[#3f4d48] mt-0 font-montserrat tracking-wide   text-[12px]'>
                  Nadia, Casablanca
                </p>


                <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide  text-[14px] '>



                  Damin saved me from a fraudulent seller. I rejected
                  the order, and my money was safe
                </p>

                <div className='absolute top-9 right-8'>

                  <Image src={quotes} alt='' />

                </div>

              </div>


            </div>

            <div className='mt-6 md:mt-0 w-full md:w-[53%] '>

              <Image src={whydamin1} alt='' />


            </div>





          </div>
        </Container>


        {/* Between Spacing  */}
        <div className='h-[70px]'>

        </div>

        {/* Second section  */}
        <Container>

          <div className='p-6 rounded-[25px] gap-4 flex flex-col-reverse md:flex-row shadow-2xl items-center' >



            <div className='mt-6 md:mt-0 w-full md:w-[53%] '>

              <Image src={whydaminnew} alt='' />


            </div>


            <div className=' w-full md:w-[47%]  p-0  md:p-7'>

              <div className='flex gap-1'>
                <Image src={protectionicon} alt='' />


                <h5 className='text-[#4d4d4d] font-montserrat text-[12px] rounded-full px-4 py-3 border border-1 border-[00000020]' >
                  #1 trusted Secure platform
                </h5>

              </div>

              <h3 className='mt-6 text-2xl md:text-4xl font-montserrat-medium tracking-tighter pr-20  text-black '>
                Seller Confidence
              </h3>


              <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide text-base '>


                Sellers benefit from reduced fraud risk. Our secure COD
                process verifies orders and minimizes chargebacks.
              </p>



              {/* card */}
              <div className='relative mt-10  border border-1 border-[#F3F5F7] py-5  px-5 rounded-[25px] bg-left bg-cover ' style={{ backgroundImage: `url(${cardbg.src})` }}>






                <h3 className=' text-lg font-montserrat-medium tracking pr-20  text-black '>
                  Nadia, Casablanca
                </h3>

                <p className='text-[#3f4d48] mt-0 font-montserrat tracking-wide   text-[12px]'>
                  Nadia, Casablanca
                </p>


                <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide  text-[14px] '>


                  Damin saved me from a fraudulent seller. I rejected
                  the order, and my money was safe
                </p>

                <div className='absolute top-9 right-8'>

                  <Image src={quotes} alt='' />

                </div>

              </div>


            </div>


          </div>
        </Container>


        {/* Between Spacing  */}
        <div className='h-[70px]'>

        </div>



        {/* third section  */}
        <Container>

          <div className='p-6 rounded-[25px] gap-4 flex flex-col md:flex-row shadow-2xl items-center' >



            <div className='w-full md:w-[47%] p-0  md:p-7'>

              <div className='flex gap-1'>
                <Image src={protectionicon} alt='' />


                <h5 className='text-[#4d4d4d] font-montserrat text-[12px] rounded-full px-4 py-3 border border-1 border-[00000020]' >
                  #1 trusted Secure platform
                </h5>

              </div>

              <h3 className='mt-6 text-2xl md:text-4xl font-montserrat-medium tracking-tighter pr-20  text-black '>
                Easy Integration
              </h3>


              <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide text-base '>




                Seamlessly integrate Damin&apos;s COD solution into your e-
                commerce platform.
              </p>



              {/* card */}
              <div className=' relative mt-10  border border-1 border-[#F3F5F7] py-5  px-5 rounded-[25px] bg-left bg-cover ' style={{ backgroundImage: `url(${cardbg.src})` }}>






                <h3 className=' text-lg font-montserrat-medium tracking pr-20  text-black '>
                  Nadia, Casablanca
                </h3>

                <p className='text-[#3f4d48] mt-0 font-montserrat tracking-wide   text-[12px]'>
                  Nadia, Casablanca
                </p>


                <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide  text-[14px] '>



                  Damin saved me from a fraudulent seller. I rejected
                  the order, and my money was safe
                </p>

                <div className='absolute top-9 right-8'>

                  <Image src={quotes} alt='' />

                </div>

              </div>


            </div>

            <div className='mt-6 md:mt-0 w-full md:w-[53%] '>

              <Image src={whydamin3} alt='' />


            </div>





          </div>
        </Container>


        {/* Between Spacing  */}
        <div className='h-[70px]'>

        </div>


        {/* Forth section  */}
        <Container>

          <div className='p-6 rounded-[25px] gap-4 flex flex-col-reverse md:flex-row shadow-2xl items-center' >



            <div className='mt-6 md:mt-0 w-full md:w-[53%] '>

              <Image src={whydamin4} alt='' />


            </div>


            <div className=' w-full md:w-[47%]  p-0  md:p-7'>

              <div className='flex gap-1'>
                <Image src={protectionicon} alt='' />


                <h5 className='text-[#4d4d4d] font-montserrat text-[12px] rounded-full px-4 py-3 border border-1 border-[00000020]' >
                  #1 trusted Secure platform
                </h5>

              </div>

              <h3 className='mt-6 text-2xl md:text-4xl font-montserrat-medium tracking-tighter pr-20  text-black '>
                Trasparent Tracking
              </h3>


              <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide text-base '>



                Track your order in real-time. Know exactly when it will arrive
              </p>



              {/* card */}
              <div className='relative mt-10  border border-1 border-[#F3F5F7] py-5  px-5 rounded-[25px] bg-left bg-cover ' style={{ backgroundImage: `url(${cardbg.src})` }}>






                <h3 className=' text-lg font-montserrat-medium tracking pr-20  text-black '>
                  Nadia, Casablanca
                </h3>

                <p className='text-[#3f4d48] mt-0 font-montserrat tracking-wide   text-[12px]'>
                  Nadia, Casablanca
                </p>


                <p className='mt-6   text-[#4d4d4d] font-montserrat-medium  tracking-wide  text-[14px] '>


                  Damin saved me from a fraudulent seller. I rejected
                  the order, and my money was safe
                </p>

                <div className='absolute top-9 right-8'>

                  <Image src={quotes} alt='' />

                </div>

              </div>


            </div>


          </div>
        </Container>





        <div className='h-[200px]'>

        </div>
      </div>
    </>
  )

}

function CTAsection() {
  return (
    <div className="bg-gradient-to-b from-white to-[#C4FFE8]">

      <div className=''>
        {/* First section  */}
        <Container className=''>

          <div className='p-6 rounded-[25px] gap-4  bg-black flex flex-col md:flex-row items-center' >



            <div className='w-full md:w-[56%] p-0  md:p-7'>



              <h3 className='text-3xl md:text-6xl font-montserrat-medium tracking-wide   text-white '>
                Free money transfer between accounts
              </h3>


              <div className='mt-8 flex flex-col md:flex-row gap-6'>

                <div className='flex gap-4 items-center'>
                  <Image src={ctaticks} alt='' />


                  <p className='  text-white font-montserrat-medium  tracking-tight text-base '>



                    Seamless Transfer
                  </p>

                </div>



                <div className='flex gap-4 items-center'>
                  <Image src={ctaticks} alt='' />


                  <p className='  text-white font-montserrat-medium  tracking-wide text-base '>



                    Effortless
                  </p>

                </div>
              </div>


              <div className='mt-16'>
                <Link href="" className='w-fit flex gap-3 bg-[#9CFFDF] rounded-full px-8 py-4  text-lg font-montserrat-semibold'>
                  Sign up now <Image src={ar} alt='' />
                </Link>
              </div>






            </div>

            <div className='mt-6 md:mt-0 w-full md:w-[44%] '>

              <Image src={ctatempimage} alt='' />


            </div>





          </div>
        </Container>


        <Container>




          <div className='flex item-center justify-center'>



            <div className='py-24  max-w-2xl'>

              <h3 className='text-3xl md:text-6xl text-center font-montserrat-semibold tracking-tighter   text-black '>
                And here&apos;s how <br /> Damin does the magic
              </h3>


            </div>

          </div>
        </Container>
      </div>
    </div>
  )
}


function Shop() {
  return (
    <div className='mt-8 bg-no-repeat pt-4 pb-28 bg-top bg-cover ' style={{ backgroundImage: `url(${shopbgbanner.src})` }}>

      <div className=''>
        <Container>
          <div className='flex justify-center items-center'>

            <p className='text-3xl mb-10 md:text-xl font-montserrat-semibold tracking-tighter pr-20  text-black max-w-5xl'>Trusted by 1000 business</p>


          </div>
        </Container>
      </div>


      <div>
        <ShopCarasoul />
      </div>

      <div className='flex items-center justify-center'>
        <div className='mt-16'>
          <Link href="" className='w-fit flex gap-3 bg-black text-white  rounded-full px-8 py-4  text-lg font-montserrat-semibold'>
            Shop Now <Image src={arrowright} alt='' />
          </Link>
        </div>
      </div>
    </div>
  )
}

function SellWithDamin() {
  return (
    <>
      {/* top section  */}
      <Container>


        <div className='flex pt-24 pb-8 items-center'>

          <div className='w-full md:w-1/2 '>


            <h2 className='text-3xl md:text-6xl font-montserrat-semibold tracking-tighter pr-28  text-black max-w-5xl'>
              Looking to sell with damin
            </h2>




          </div>


          <div className='w-full md:w-1/2 '>


            <div className=' flex justify-end items-start'>



              <div className='flex gap-6 max-w-[520px] items-start'>



                <p className='   text-[#3f4d48] font-montserrat-medium tracking-wide font-[500] text-lg  '>


                  Seamlessly integrate Damin&apos;s COD solution into your e-commerce platform integrate Damin&apos;s solution into your e-commerce platform integrate Damin&apos;s
                </p>
              </div>







            </div>

          </div>

        </div>




      </Container>


      <div className=''>
        <Image src={sellwithdaminimage} alt='' className='w-full h-full' />

      </div>


      <div className='-mt-32 mb-32 flex items-center justify-center'>
        <div className=''>
          <Link href="" className='w-fit flex gap-3 bg-black text-white  rounded-full px-8 py-4  text-lg font-montserrat-semibold'>
            Shop Now <Image src={arrowright} alt='' />
          </Link>
        </div>
      </div>

    </>
  )
}

function TrustedBusinessSection() {
  return (
    <>
        <div class="tutor-price-preview-box box-has-media">
          <div class="tutor-price-box-thumbnail">
            <img loading="lazy" src="https://holistichealth.sa/wp-content/uploads/2024/07/training-of-trainers-course-in-holistic-wellness-and-quality-of-life-340x200.jpg" alt="training-of-trainers-course-in-holistic-wellness-and-quality-of-life" width="340" />		</div>


          <div class="tutor-price">
            <div class="price">
              <p class="price"><ins><span class="woocommerce-Price-amount amount"><bdi>9.200<span class="decimals-separator">,00</span>&nbsp;<span class="woocommerce-Price-currencySymbol">ر.س</span></bdi></span></ins></p>					</div>
          </div>

          <div class="tutor-single-course-meta tutor-meta-top">

            <div class="tutor-course-level">
              <span class="meta-label">
                <i class="meta-icon fa-regular fa-sliders-h"></i>
                مستوى				</span>
              <div class="meta-value" data-no-translation="" data-trp-gettext="">جميع المستويات</div>
            </div>

            <div class="tutor-course-duration">
              <span class="meta-label">
                <i class="meta-icon fa-regular fa-clock"></i>
                المدة الزمنية				</span>
              75 ساعات		</div>

            <div class="tutor-course-lesson-count">
              <span class="meta-label">
                <i class="meta-icon fa-regular fa-play-circle"></i>
                محاضرات				</span>
              <div class="meta-value">
                199 محاضرات			</div>
            </div>



          </div>


          <div class="tutor-lead-info-btn-group">


            <div class="tutor-single-add-to-cart-box">

              <div class="tutor-course-purchase-box">



                <div class="cart-notification">
                  <a href="https://holistichealth.sa/ar/courses/training-of-trainers-course-in-holistic-wellness-and-quality-of-life/"
                  name="add-to-cart" class="single_add_to_cart_button ajax_add_to_cart tutor-button alt">
                    
                    معاينة الدورة					</a>
                </div>


              </div>

            </div>


            
          </div>


        </div>
    </>
  )
}




export default function Home() {
  return (
    <>


      <HeroSection />
      <WhyUseDamin />
      <CTAsection />
      <DaminMovingElements />
      <Shop />
      <SellWithDamin />
      <FooterDamin />
      {/* <Footer/> */}


      {/* <div className='py-48'>

      </div> */}

    </>
  )
}
