import React from 'react'
import List from './List'
import { products } from '@/constants/products'
import Card from './Card'

const Products = () => {
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