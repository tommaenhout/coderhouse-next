import React from 'react'
import { IProductCart } from './context/CartContext';

interface IConfirmationListItem {
    product : IProductCart;
}

const ConfirmationListItem : React.FC<IConfirmationListItem> = ({product}) => {
  return (
    <div  className="flex justify-between items-center mb-4">
    <div>
      <h3 className="text-lg">{product.title}</h3>
      <p>
        {product.quantity} x ${product.price}
      </p>
    </div>
  </div>
  )
}

export default ConfirmationListItem