export const RECEIVE_PRODUCTS = 'guitarShop/RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'guitarShop/REQUEST_PRODUCTS';

export const fetchProducts = () => {
  return function(dispatch) {
    dispatch(requestProducts());
    return fetch('http://demo2872766.mockable.io/products')
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(json)));
  };
};

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  };
}

export function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json,
  };
}

// Actions MUST be dispatched!!
