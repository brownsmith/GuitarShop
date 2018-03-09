import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import productData from '../api/products.json';

export const ADD_TO_CART = 'guitarShop/ADD_TO_CART';

const initialState = [];

export function addProductToCart(productDetails) {
  return {
    type: ADD_TO_CART,
    details: productDetails,
  };
}

const products = (state = [], action = {}) => {
  return productData;
};

const trolley = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.details];
    default:
      return state;
  }
};

export default combineReducers({
  routing,
  products,
  trolley,
});
