"use client";

import React from "react";
import { DialogContent, DialogHeader, DialogTitle } from "./Modal";
import { Dialog } from "@radix-ui/react-dialog";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { setOpen } from "@/app/features/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.cartSlice);


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
      
              <div>
             
                  <div  className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg">"name"</h3>
                      <p>
                        4 x $300000
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-red-500 p-1 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                <div className="flex justify-between mt-4">
                  <h3 className="text-lg font-bold">Total:</h3>
                  <p className="text-lg font-bold">$</p>
                </div>
              </div>
            
          </div>
          <div className="w-full justify-end flex mt-2">
            <button
              className="
                bg-black text-white p-2 rounded hover:scale-110 hover:shadow-lg hover:bg-gray-800 transition-all duration-500"
              type="submit"
           
            >
              Buy
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
