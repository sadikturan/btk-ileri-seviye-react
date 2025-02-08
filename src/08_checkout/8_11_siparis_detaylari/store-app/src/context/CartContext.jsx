import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
