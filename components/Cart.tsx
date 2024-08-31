"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { IProductCart, useCartContext } from "./context/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Modal";
import { IProduct } from "@/constants/products";
import { setOpen } from "@/app/features/cartSlice";
import { useRouter } from "next/navigation";
import Button from "./Button";
import List from "./List";
import CartListItem from "./CartListItem";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.cartSlice);
  const { cart, removeFromCart, getTotal } = useCartContext();
  const router = useRouter();

  const remove = (product: IProduct) => {
    removeFromCart(product);
  };

  const onClickHandler = () => {
    dispatch(setOpen(false));
    router.push("/confirmation");
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
        <List
          className="p-4"
          items={cart}
          sourceName="product"
          ItemComponent={CartListItem}
        />
        <div className="p-4 border-t border-gray-200 flex justify-start">
          <h3 className="text-lg font-bold">Total: ${getTotal()}</h3>
        </div>
        <div className="flex justify-end p-4">
          <div>
            <Button onClick={onClickHandler}>Confirm</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
