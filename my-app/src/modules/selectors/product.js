export const getProductBrand = state => {
  return 'Fender';
};

export const orderProductsHighToLow = state => {
  return {
    products: {
      products: [
        {
          price: '£30',
        },
        {
          price: '£20',
        },
        {
          price: '£10',
        },
      ],
    },
  };
  // return state.products.products.map(product => {
  //   const priceWithout = product.price.toString().replace(/\u00A3/g, '', '');
  //   // return console.log(priceWithout);
  //   return
  // });
};
