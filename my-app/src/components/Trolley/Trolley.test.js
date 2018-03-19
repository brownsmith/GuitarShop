import React from 'react';
import ReactDOM from 'react-dom';
import Trolley from './Trolley';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Trolley component', () => {
  it('renders a trolley component', () => {
    const itemsInTrolley = [
      {
        make: 'Fender',
        model: 'Stratocaster',
        price: '£1229',
        spec: {
          name: 'Olympic White Strat',
          image: 'olympic-white-strat.jpg',
          neck: 'Rosewood',
          body: 'Olympic white',
          description:
            'The Rosewood fretboard also gives you a bit more warmth and depth of tone than Maple would.',
        },
      },
    ];
    const div = document.createElement('div');
    ReactDOM.render(<Trolley trolleyItems={itemsInTrolley} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should describe the contents of the trolley and the total price', () => {
    const trolleyItems = [{}, {}];
    const trolleyTotal = '£1229';
    const wrapper = mount(
      <Trolley trolleyItems={trolleyItems} trolleyTotal={trolleyTotal} />
    );
    expect(wrapper.text()).toEqual('2 items in your Trolley, totalling: £1229');
  });
});
