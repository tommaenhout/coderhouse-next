import React from 'react'
import Button from '../Button'
import { IProduct } from '@/constants/products';

interface ICartAdder {
  product? : IProduct ;
  quantity? : number;
}

const ButtonCartAdder : React.FC<ICartAdder> =({product, quantity}) => {
  return (
    <Button onClick={()=>console.log('add to cart')}>
        Add to cart
    </Button>
  )
}

export default ButtonCartAdder