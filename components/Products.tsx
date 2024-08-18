import React from 'react'
import List from './List'
import { IProduct, products } from '@/constants/products'
import Card from './Card'

interface IProducts {
   products : IProduct[];
}
const Products : React.FC<IProducts> = ({products}) => {
  
  console.log(products)

   if (!products || products.length === 0) {
        return (
          <div className='text-center flex w-full justify-center items-center text-2xl font-bold'>
              <p>No products found</p>
          </div>
        )
   }

  return (
    <List 
        className='grid container justify-items-center mx-auto mt-12 max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        items={products}
        ItemComponent={Card}
        sourceName='product'
    />
  )
}

export default Products