import * as actionType from "../type/type";

const INTIAL_STATE = {
    products : [] , //{id, title, descr, price, img}
    cart:[], //{id, title, descr, price, img, qty}
    currentItem: null,
};

const Reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionType.ADD_TO_CART:
      // Get item data from product array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // cheak if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionType.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionType.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
