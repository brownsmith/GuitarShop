import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import ProductsWrapper from './components/ProductsWrapper/ProductsWrapper';
import products from './api/products.json';

configure({ adapter: new Adapter() });

it('renders without crashing, LOL', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render the ProductsWrapper component', () => {
  const productsWrapper = shallow(<ProductsWrapper data={products} />);
  expect(productsWrapper.find('.productsWrapperComponent').exists()).toEqual(true);
});
