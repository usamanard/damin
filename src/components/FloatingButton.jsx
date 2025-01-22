import React from 'react'
import clsx from 'clsx'

const FloatingButton = ({text,style }) => {
  return (
    <div  style={style} className='-rotate-[11.48deg] w-fit text-lg text-white font-BearFont-medium bg-gradient-to-r from-[#2045FF]  to-[#9032FF] rounded-full py-1 px-4 '>{text}</div>
  )
}

export default FloatingButton