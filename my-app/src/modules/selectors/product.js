export const getProductBrand = state => {
  return 'Fender';
};

export const orderProductsHighToLow = state => {
  function compareNumbers(a, b) {
    return (
      b.price.toString().replace(/\u00A3/g, '', '') -
      a.price.toString().replace(/\u00A3/g, '', '')
    );
  }

  console.log('after', state.products.products.sort(compareNumbers));

  return state.products.products.sort(compareNumbers);
};
