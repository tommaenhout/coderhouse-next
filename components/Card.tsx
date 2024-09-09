import Image from 'next/image'
import React from 'react'
import autralian from '@/public/australian.jpg'
import Link from 'next/link'

interface ICard {
  product : {
    id : number;
    title : string;
    description : string;
    inStock : number;
    price : number;
    slug : string;
  }
}

const Card : React.FC<ICard> = ({product}) => {
  return (
    <Link href={`${product.slug}/${product.id}`}>
        <div className='flex flex-col justify-center items-center p-2 cursor-pointer max-w-[300px] gap-y-4 border-gray-300 shadow-sm hover:shadow-xl'>
            <Image
                src={autralian}
                alt='australian'
                width={200}
                height={200}
                 
            />
            <div className='block text-center p-4 space-y-4'>
                <h2 className='font-light text-sm'>{product.title}</h2>
                <p className='font-semibold text-sm'>${product.price}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card