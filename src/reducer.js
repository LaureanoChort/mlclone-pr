import React from "react";

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_PRODUCT":
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };
    case "INCREASE_AMOUNT":
      const newCart1 = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: newCart1 };
    case "DECREASE_AMOUNT":
      const newCart2 = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: newCart2 };
    case "SET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartProduct) => {
          const { price, shipPrice, amount } = cartProduct;
          const priceTotal = (price * 1000 + shipPrice) * amount;

          cartTotal.total += priceTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    default:
      return state;
  }
}

// if (action.type === "GET_TOTALS") {
//   let { total, amount } = state.cart.reduce(
//     (cartTotal, cartItem) => {
//       const { price, amount } = cartItem;
//       const itemTotal = price * amount;

//       cartTotal.total += itemTotal;
//       cartTotal.amount += amount;
//       return cartTotal;
//     },
//     {
//       total: 0,
//       amount: 0,
//     }
//   );
//   total = parseFloat(total.toFixed(2));

//   return { ...state, total, amount };
// }
