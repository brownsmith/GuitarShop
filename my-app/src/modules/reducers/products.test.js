import { products } from './products.js';
import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../actions/products.js';
import expect from 'expect';

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(products({ loading: false, products: [] }, {})).toEqual({
      loading: false,
      products: [],
    });
  });

  it('should handle REQUEST_PRODUCTS', () => {
    const initialState = {};
    const addToCart = {
      type: REQUEST_PRODUCTS,
      loading: true,
    };
    expect(products(initialState, addToCart)).toEqual({ loading: true });
  });
});
