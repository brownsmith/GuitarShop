export const ADD_TO_CART = 'guitarShop/ADD_TO_CART';

export function addProductToCart(productDetails) {
  return {
    type: ADD_TO_CART,
    details: productDetails,
  };
}
