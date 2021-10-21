import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const defaultState = {
  cart: [],
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { cart, total, amount } = state;

  const addToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "SET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeProduct,
        increaseAmount,
        decreaseAmount,
        total,
        amount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
