'use client'
import { IProduct } from "@/constants/products";
import { useToast } from "@/hooks/useToast";
import { createContext, useContext, useState, ReactNode } from "react"

export interface IProductCart extends IProduct {
    quantity: number;
}
interface CartContextType {
  cart: IProductCart[];
  addToCart: (item: IProduct) => void;
  removeFromCart: (item: IProduct) => void;
  getTotal : () => number;
  getTotalItems : () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}


export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProductCart[]>([]);
  const {toast} = useToast();

  const addToCart = (item: IProduct) => {
    console.log(item)
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast({
      title: 'Item added to cart',
      description: `${item.title} was added to your cart`,
    })
  }

  const removeFromCart = (item: IProduct) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
      } else {
        setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
      }
    }
  }

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}