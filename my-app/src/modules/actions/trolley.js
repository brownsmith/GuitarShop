import { ADD_TO_CART } from '../reducers/trolley.js';

export function addProductToCart(productDetails) {
  return {
    type: ADD_TO_CART,
    details: productDetails,
  };
}
