import React, { useState, useEffect, createContext } from "react";
import {getFirestore} from '../../db';


export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);
  const db = getFirestore();

  const addToCart = productId => {
    const prodAlCart = item.filter(item => item.id === itemId)[0];
    if (!prodAlCart.quantity) {
      console.log("Funciono en true");
      prodAlCart.quantity = 1;
      setCart([...cart, prodAlCart]);
    } else {
      cart[cart.indexOf(prodAlCart)].quantity++;
      setCart([...cart]);
    }
  };

  const deleteFromCart = itemId => {
    const prodFueraDeCart = cart.filter(item => item.id !== itemId);
    setCart(prodFueraDeCart);
  };

  useEffect(() => {
    setProducts(db);
    console.log("item:");
    console.log(item);
    console.log("carrito:");
    console.log(cart);
  }, [cart]);


  return (
    <ShopContext.Provider
      value={{
        cart,
        products,
        addToCart,
        deleteFromCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;