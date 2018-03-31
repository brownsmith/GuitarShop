import { requestProducts, receiveProducts } from './products.js';
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions/products.js';

describe('products actions', () => {
  it('should dispatch requestProducts', () => {
    const expectedActions = {
      type: REQUEST_PRODUCTS,
      loading: true,
    };
    expect(requestProducts({})).toEqual(expectedActions);
  });

  it('should dispatch receiveProducts', () => {
    const expectedActions = {
      type: RECEIVE_PRODUCTS,
      products: {},
      loading: false,
    };
    expect(receiveProducts({})).toEqual(expectedActions);
  });
});
