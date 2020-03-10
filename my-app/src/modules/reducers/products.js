import {
  ERROR_RESPONSE,
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
        error: false,
        loading: true,
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        error: false,
        loading: false,
        products: action.products,
      };
    case ORDER_PRODUCTS:
      return {
        ...state,
        error: false,
        products: action.products,
      };
    case ERROR_RESPONSE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
