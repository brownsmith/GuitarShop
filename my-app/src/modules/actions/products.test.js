import { requestProducts } from './products.js';
import { REQUEST_PRODUCTS } from '../actions/products.js';

describe('trolley actions', () => {
  it('should dispatch requestProducts', () => {
    const expectedActions = {
      type: REQUEST_PRODUCTS,
      loading: true,
    };
    expect(requestProducts({})).toEqual(expectedActions);
  });
});
