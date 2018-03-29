import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../actions/products.js';

const initialState = {
  loading: false,
};

export const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    default:
      return state;
  }
};
