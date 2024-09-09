import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/constants/products';
import Link from 'next/link';
import CartAdder from './Buttons/ButtonCartAdder';


interface IProductDetail {
    product : IProduct;
}

const ProductDetail : React.FC<IProductDetail> = ({product}) => {

    if (!product) {
        return <div className='text-center flex w-full justify-center items-center text-2xl font-bold'>
            <p> Product not found</p>
            <Link href="/" className='bg-black text-white text-lg p-2 rounded mt-4'>Go to Home</Link>
           </div>
    }

  return (
    <div className='container grid grid-cols-1 lg:max-w-[1000px] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4'>
    <div className='col-span-1 lg:col-span-2 p-4 md:p-8 lg:p-12'>
        <div className='m-auto w-2/3 h-2/3'>
            <Image 
                src={product.image} 
                alt='product'
                width={600} 
                height={600}
            />
        </div>
    </div>
    <div className='col-span-1 flex flex-col gap-3 p-2 md:p-8  lg:py-12'>
         <p className='text-sm text-gray-700 font-light'>art id: {product.id}</p>
         <h1 className='text-2xl font-black w-4/5 title'>{product.title}</h1>
         <p className='text-sm text-gray-700'>
            {product.description}
         </p>
         <p className='text-sm'>
            <em className='not-italic font-bold'>Delivery time:</em> 2-3 days
         </p>
         <p className='text-sm'>
            <em className='not-italic font-bold'>Stock:</em> {product.inStock} items left
         </p>
         
         <div className='h-full flex flex-col gap-5 justify-end items-end grow'>
            <div className='w-full p-2 flex flex-col mt-8 justify-end text-end'>
                <p className='text-2xl font-bold'>${product.price}</p>
                <p className='text-sm text-gray-400 font-light'>incl. iva</p>
            </div>
            <CartAdder product={product}/>
         </div>
    </div>
</div>
  )
}

export default ProductDetail