import { trolley } from './trolley.js';
import { addProductToCart, ADD_TO_CART } from '../actions/trolley.js';
import expect from 'expect';

describe('trolley reducer', () => {
  it('should return the initial state', () => {
    expect(trolley(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TO_CART', () => {
    const initialState = [];
    const data = {};
    const addToCart = {
      type: ADD_TO_CART,
      details: data,
    };
    expect(trolley(initialState, addToCart)).toEqual([data]);
  });
});
