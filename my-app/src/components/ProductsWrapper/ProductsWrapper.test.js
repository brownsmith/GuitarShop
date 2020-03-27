import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductsWrapper from './ProductsWrapper';

configure({ adapter: new Adapter() });

describe('Product details page', () => {
  let productsWrapper;
  it('should render the ProductsWrapper component', () => {
    const data = [];
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    productsWrapper = shallow(
      <ProductsWrapper data={data} loading={false} fetchProducts={() => {}} />
    );
    expect(productsWrapper.find('.productsWrapperComponent').exists()).toEqual(
      true
    );
  });

  // it('should dp something else witht productData from the hook', () => {
  //   const data = [];
  //   productsWrapper = shallow(
  //     <ProductsWrapper data={data} loading={false} fetchProducts={() => {}} />
  //   );
  //   // it('should pass the correct data to renderProducts()', () => {
  //   //   expect(p)
  //   // });
  // });
});
