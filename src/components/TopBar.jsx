import React from 'react'
import { Container } from './Container'
import topbaricon from '@/assets/home/topbaricon.svg'
import Image from 'next/image'

const TopBar = () => {
    return (
        <div className='bg-[#F8F8F8] '>
            <Container>

                <div className='flex gap-2  p-[9px] items-center justify-center'>

                    
                    <h5 className='text-[12px] font-BearFont-medium textColor'>
                        20+ new deals added in July 2024
                    </h5>

                    <Image
                        src={topbaricon}
                        alt=""
                    />







                </div>


            </Container>
        </div>
    )
}

export default TopBar