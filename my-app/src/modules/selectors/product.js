export const getProductBrand = state => {
  return 'Fender';
};

export const orderProductsHighToLow = products => {
  function compareNumbers(a, b) {
    return (
      b.price.toString().replace(/\u00A3/g, '', '') -
      a.price.toString().replace(/\u00A3/g, '', '')
    );
  }

  return products.sort(compareNumbers);
};
