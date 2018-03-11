import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { trolley } from './reducers/trolley';
import { products } from './reducers/products';

export default combineReducers({
  routing,
  products,
  trolley,
});
