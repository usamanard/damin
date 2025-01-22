import React from 'react'
import clsx from 'clsx'

const GreenFloatingButton = ({text, style, className }) => {
  return (
    <div  style={style} className={clsx('-rotate-[11.48deg] w-fit text-lg text-white font-BearFont-medium bg-gradient-to-r from-[#06A991] to-[#06927d] rounded-full py-1 px-4', className)}>{text}</div>
  )
}

export default GreenFloatingButton