import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from '../api/products.json';

const initialState = {
  products,
  name: 'value',
}

const productsReducer = (state = initialState, action = {}) => {
  return {
    ...state,
    name: 'value2',
  };
};

export default combineReducers({
  routing: routerReducer,
  products: productsReducer,
});
