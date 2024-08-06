"use client"

import React, { useRef } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "./Modal";
import { Dialog } from "@radix-ui/react-dialog";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { setOpen } from "@/app/features/cartSlice";



const  Cart : React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch();
    const { open }  = useAppSelector((state) => state.cartSlice);

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      if (formRef.current?.checkValidity()) {
        dispatch(setOpen(false));
      }
    }

    return (
        <Dialog open={open} onOpenChange={
            (open) => {
                dispatch(setOpen(open))
            }
        }  modal>
            <DialogContent className={`bg-white  sm:w-3/5 w-full `}>
            <DialogHeader>
                <DialogTitle>Cart</DialogTitle>
            </DialogHeader>
            <form ref={formRef} onSubmit={onSubmitHandler}>
                to develop
                <div className="w-full justify-end flex mt-2">
                    <button className="
                        bg-black text-white p-2 rounded hover:scale-110 hover:shadow-lg hover:bg-gray-800 transition-all duration-500" type="submit">Buy</button>
                </div>
            </form>
            </DialogContent>
        </Dialog>
    )
  }

export default Cart