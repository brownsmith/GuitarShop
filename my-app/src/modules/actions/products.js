import { orderProductsHighToLow } from '../../modules/selectors/product';

// action types
export const RECEIVE_PRODUCTS = 'guitarShop/RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'guitarShop/REQUEST_PRODUCTS';
export const ORDER_PRODUCTS = 'guitarShop/ORDER_PRODUCTS';

// action creator
export const fetchProducts = () => {
  return function(dispatch) {
    dispatch(requestProducts());
    return fetch('http://demo2872766.mockable.io/products')
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(json)));
  };
};

// actions
export function orderProducts(data) {
  return {
    type: ORDER_PRODUCTS,
    products: [...orderProductsHighToLow(data)],
  };
}

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
    loading: true,
  };
}

export function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json,
    loading: false,
  };
}

// Actions MUST be dispatched!!
