import * as action from "../type/type";
// import axios from '../../apis/API';
// import axios from 'axios'


// export const fetchProducts =  () => 
//  async function(dispatch){
//     const response = await axios.get('/Data.json').catch((err) => console.log("error",err));
//     console.log('middleware response ==>>',response.data)
//     dispatch({ type:action.SET_PRODUCTS,payload: response.data});
// };

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

export const adjustItemQty = (itemID, qty) => {
  return {
    type: action.ADJUST_ITEM_QTY,
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
