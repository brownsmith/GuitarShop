import expect from 'expect';
import { getProductBrand, orderProductsHighToLow } from './product';

describe('Product selectors', () => {
  it('should return the brand name', () => {
    const result = getProductBrand();
    expect(result).toEqual('Fender');
  });

  it('should re-order the products by price - high to low', () => {
    const state = {
      products: {
        products: [
          {
            price: '£10',
          },
          {
            price: '£20',
          },
          {
            price: '£30',
          },
        ],
      },
    };
    const result = orderProductsHighToLow(state);
    expect(result).toEqual([
      {
        price: '£30',
      },
      {
        price: '£20',
      },
      {
        price: '£10',
      },
    ]);
  });
});
