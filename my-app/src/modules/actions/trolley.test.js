import { addProductToCart } from './trolley.js';
import { ADD_TO_CART } from '../actions/trolley.js';

describe('trolley actions', () => {
  it('should dispatch addProductToCart', () => {
    const expectedActions = {
      type: ADD_TO_CART,
      details: {},
    };
    expect(addProductToCart({})).toEqual(expectedActions);
  });
});
