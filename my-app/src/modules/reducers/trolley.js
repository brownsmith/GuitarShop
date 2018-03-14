import { ADD_TO_CART } from '../actions/trolley.js';

const initialState = [];

export const trolley = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.details];
    default:
      return state;
  }
};
