import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from '../api/products.json';

export const ADD_TO_CART = 'guitarShop/ADD_TO_CART';

const initialState = {
  products,
  trolley: {},
};

export function addProductToCart(productDetails) {
  return {
    type: ADD_TO_CART,
    details: productDetails,
  };
}

const appStoreReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        trolley: {
          itemPrice: action.details.price, // create array of prices and add items
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  routing: routerReducer,
  appStore: appStoreReducer,
});
