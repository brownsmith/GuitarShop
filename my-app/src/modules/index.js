import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from '../api/products.json';

const productsReducer = (initialState = {}, action = {}) => {
  return products;
};

export default combineReducers({
  routing: routerReducer,
  products: productsReducer,
});
