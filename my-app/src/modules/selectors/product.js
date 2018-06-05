export const getProductBrand = state => {
  return 'Fender';
};

export const orderProductsHighToLow = data => {
  function compareNumbers(a, b) {
    return (
      b.price.toString().replace(/\u00A3/g, '', '') -
      a.price.toString().replace(/\u00A3/g, '', '')
    );
  }

  data.sort(compareNumbers);

  return data;
};
