import * as action from "../type/type";

export const setProduct = (products) => {
  return {
    type: action.SET_PRODUCTS,
    payload: products
  };
};
export const addToCart = (itemID) => {
  return {
    type: action.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: action.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, qty) => {
  return {
    type: action.REMOVE_FROM_CART,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: action.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
