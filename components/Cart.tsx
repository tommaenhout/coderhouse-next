"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { IProductCart, useCartContext } from "./context/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Modal";
import { IProduct } from "@/constants/products";
import { setOpen } from "@/app/features/cartSlice";


const Cart = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.cartSlice);
  const { cart, removeFromCart, getTotal } = useCartContext();

  const remove = (product : IProduct) => {
    removeFromCart(product);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        dispatch(setOpen(open));
      }}
      modal
    >
      <DialogContent className="bg-white sm:w-3/5 w-full">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        <form>
          <div className="p-4">
            {cart.map((product : IProductCart, index : number) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg">{product.title}</h3>
                  <p>
                    {product.quantity} x ${product.price}
                  </p>
                </div>
                <button onClick={() => remove(product)} type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex justify-end">
            <h3 className="text-lg font-bold">Total: ${getTotal()}</h3>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
