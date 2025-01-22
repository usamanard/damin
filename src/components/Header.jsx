import React from 'react'
import { Button } from './Button'
import { Container } from './Container'
import mainlogo from '@/assets/home/mainlogo.svg'
import Image from 'next/image'
import Link from 'next/link'



const navigationData = [
    { name: 'Home', link: '/' },
    { name: 'Our Partners', link: '#' },
    { name: 'About us', link: '#' },
    { name: 'Giveaways', link: '#' },
    { name: 'Become a Partner', link: '#' },

];

const Header = () => {
    return (
        <>


            <Container>
                <div className='flex py-4 justify-between items-center'>


                    <div>
                        <Image src={mainlogo} alt='' />
                    </div>


                    <div className='flex gap-4'>
                        {navigationData.map((item) => (


                            <div className='  ' key={item.index}>





                                <Link href={item?.link} className='py-2 transEffect hover:bg-[#F8F8F8] rounded-full px-[10px] flex text-[15px] leading-[15px] font-NardFont-medium tracking-tight textColor' >
                                    {item.name}
                                </Link>


                            </div>




                        ))}
                    </div>

                    <div>

                        <div className='gap-4 md:gap-4  flex flex-col-reverse md:flex-row items-start md:items-center  '>


                        <Link href='#'> 
                        <button className="transEffect flex items-center hover:underline  font-BearFont-semibold text-[15px] leading-[15px] textColor">Login </button></Link>

                            <Button href="#" >Become a Member</Button>



                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Header