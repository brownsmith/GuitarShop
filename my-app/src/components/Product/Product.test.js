import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './Product';

configure({ adapter: new Adapter() });

describe('Product component', () => {
  it('renders a product component', () => {
    const productDetails = {
      spec: {
        image: 'black-strat.jpg',
      },
    };
    const trolleyItems = [
      {
        productId: '1001',
      },
    ];
    const div = document.createElement('div');
    ReactDOM.render(
      <Product productDetails={productDetails} trolleyItems={trolleyItems} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
