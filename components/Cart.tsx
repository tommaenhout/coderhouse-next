import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useCartContext } from "./context/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Modal";
import { IProduct } from "@/constants/products";
import { setOpen } from "@/app/features/cartSlice";


const Cart = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.cartSlice);
  const { cart } = useCartContext();

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
            {cart.map((product : IProduct, index : number) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg">{product.title}</h3>
                  <p>
                    {product.inStock} x ${product.price}
                  </p>
                </div>
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
