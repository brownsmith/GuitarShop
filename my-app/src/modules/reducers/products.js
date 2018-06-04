import {
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS,
  ORDER_PRODUCTS,
} from '../actions/products.js';

const initialState = {
  loading: false,
  products: [],
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
    case ORDER_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};
