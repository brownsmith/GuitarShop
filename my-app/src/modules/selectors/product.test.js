import expect from 'expect';
import { getProductBrand } from './product';

describe('Product selectors', () => {
  it('should return the brand name', () => {
    const result = getProductBrand();
    expect(result).toEqual('Fender');
  });
});
