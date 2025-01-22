import React from 'react'
import clsx from 'clsx'


const Testing = ({className}) => {
  return (
    <div className={clsx('text-white py-8 text-center', className)}>Testing Header</div>
  )
}

export default Testing