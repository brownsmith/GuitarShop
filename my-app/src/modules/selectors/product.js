export const getProductBrand = state => {
  return 'Fender';
};

export const orderProductsHighToLow = state => {
  // take products arrau and return reordered
  // console.log('reorder products', state.products.products);
  return state.products.products.map(product => {
    const priceWithout = product.price.toString().replace(/\u00A3/g, '', '');
    return console.log(priceWithout);
  });
};
