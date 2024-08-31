import React from 'react'
import { IProductCart, useCartContext } from './context/CartContext'


interface ICartListItem {
    product : IProductCart;
    }

const CartListItem : React.FC<ICartListItem> = ({product}) => {

  const {removeFromCart} = useCartContext();
  const remove = (product : IProductCart) => {
    removeFromCart(product);
  }

  return (
    <div  className="flex justify-between items-center mb-4">
    <div>
      <h3 className="text-lg">{product.title}</h3>
      <p>
        {product.quantity} x ${product.price}
      </p>
    </div>
    <button onClick={() => remove(product)} type="button" className="bg-red-500 text-white px-2 py-2 rounded">
      Remove
    </button>
  </div>
  )
}

export default CartListItem