import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartCounter, setCartCounter] = useState({});

  const addToCart = (idx) => {
    setCartCounter((prev) => ({ ...prev, [idx]: (prev[idx] || 0) + 1 }));
  };

  const removeFromCart = (idx) => {
    setCartCounter((prev) => ({ ...prev, [idx]: (prev[idx] || 0) - 1 }));
  };

  useEffect(() => {
    console.log(cartCounter);
  }, [cartCounter]);

  const contextValue = {
    food_list,
    cartCounter,
    setCartCounter,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
