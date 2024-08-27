'use client'
import { IProduct } from "@/constants/products";
import { createContext, useContext, useState, ReactNode } from "react"

// Define the shape of the context value
interface CartContextType {
  cart: IProduct[];
  addToCart: (item: IProduct) => void;
  removeFromCart: (item: IProduct) => void;
}

// Create the context with an empty default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the CartContext
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

// Define the props for the CartProvider component
interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  console.log(cart);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  }

  const removeFromCart = (item: any) => {
    setCart(cart.filter(cartItem => cartItem !== item));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
