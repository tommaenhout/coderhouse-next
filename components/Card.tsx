import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'
import React from 'react'
import autralian from '@/public/australian.jpg'

const Card = () => {
  return (
    <div className='flex flex-col justify-center p-2 cursor-pointer max-w-[300px] gap-y-4 border-gray-300 shadow-sm hover:shadow-xl'>
        <Image
            src={autralian}
            alt='australian'
            width={200}
            height={200}
        />
        <div className='block text-center p-4 space-y-4'>
            <h2 className='font-light text-sm'>Australian</h2>
            <p className='font-semibold text-sm'>$123.000</p>
        </div>
    </div>
  )
}

export default Card