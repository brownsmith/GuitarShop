const initialState = [];

export const ADD_TO_CART = 'guitarShop/ADD_TO_CART';

export const trolley = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.details];
    default:
      return state;
  }
};
