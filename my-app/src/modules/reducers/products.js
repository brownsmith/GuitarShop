import productData from '../../api/products.json';

export const products = (state = [], action = {}) => {
  return productData;
};
