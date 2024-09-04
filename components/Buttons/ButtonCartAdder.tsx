"use client"

import React from 'react'
import Button from '../Button'
import { IProduct } from '@/constants/products';
import { useCartContext } from '../context/CartContext';

interface ICartAdder {
  product? : IProduct ;
  quantity? : number;
}

const ButtonCartAdder : React.FC<ICartAdder> =({product, quantity}) => {
  const {addToCart} = useCartContext();



  return (
    <Button onClick={()=> {
      product && addToCart(product)
      } }>
        Add to cart
    </Button>
  )
}

export default ButtonCartAdder