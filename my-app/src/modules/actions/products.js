import { orderProductsHighToLow } from '../../modules/selectors/product';
export const RECEIVE_PRODUCTS = 'guitarShop/RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'guitarShop/REQUEST_PRODUCTS';
export const ORDER_PRODUCTS = 'guitarShop/ORDER_PRODUCTS';

export const fetchProducts = () => {
  return function(dispatch) {
    dispatch(requestProducts());
    return fetch('http://demo2872766.mockable.io/products')
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(json)));
  };
};

export function orderProducts(state) {
  return {
    type: ORDER_PRODUCTS,
    products: orderProductsHighToLow(state),
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
