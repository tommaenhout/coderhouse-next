import React from 'react'
import Image from 'next/image'
import australian from '@/public/australian.jpg'


interface IProductDetail {
    id : string;
}

const ProductDetail : React.FC<IProductDetail> = ({id}) => {
  return (
    <div className='container grid grid-cols-1 lg:max-w-[1000px] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4'>
    <div className='col-span-1 lg:col-span-2 p-4 md:p-8 lg:p-12'>
        <div className='m-auto w-2/3 h-2/3'>
            <Image 
                src={australian} 
                alt='product'
                width={600} 
                height={600}
            />
        </div>
    </div>
    <div className='col-span-1 flex flex-col gap-3 p-2 md:p-8  lg:py-12'>
         <p className='text-sm text-gray-700 font-light'>art id: {id}</p>
         <h1 className='text-2xl font-black w-4/5 title'>Australian</h1>
         <p className='text-sm text-gray-700'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
         </p>
         <p className='text-sm'>
            <em className='not-italic font-bold'>Delivery time:</em> 2-3 days
         </p>
         <p className='text-sm'>
            <em className='not-italic font-bold'>Stock:</em> 2 items left
         </p>
         
         <div className='h-full flex flex-col gap-5 justify-end items-end grow'>
            <div className='w-full p-2 flex flex-col mt-8 justify-end text-end'>
                <p className='text-2xl font-bold'>$203.500</p>
                <p className='text-sm text-gray-400 font-light'>incl. iva</p>
            </div>
            <button className='bg-black shadow-lg w-full text-white p-2 rounded hover:scale-110 hover:shadow-lg hover:bg-gray-800 transition-all duration-500'>Add to cart</button>
         </div>
    </div>
</div>
  )
}

export default ProductDetail