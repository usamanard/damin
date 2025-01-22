import React from 'react'
import Image from 'next/image'
import footericon from '@/assets/home/footericon.svg'
import footermail from '@/assets/home/footermail.svg'
import Link from 'next/link'


const ImageBox = ({image, title, description}) => {
    return (
        <div>

            <div className='flex gap-4 items-start'>

                <div className='rounded-[10px] pt-1 w-fit'>

                    <Image
                        src={image}
                        alt=''
                    />
                </div>

                <div className='flex flex-col '>

                    <h4 className='font-BearFont-regular text-[16px] md:text-[20px]   text-white'>{title}</h4>
                    
                    <p className='text-base font-BearFont-regular text-[#8F8F8F]'>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default ImageBox