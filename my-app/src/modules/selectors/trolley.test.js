import expect from 'expect';
import { getTrolleyTotalPrice, getTrolleyLength } from './trolley';

describe('Trolley selectors', () => {
  it('should add up the items in the trolley and return a total', () => {
    const state = {
      trolley: [
        {
          price: '£10',
        },
        {
          price: '£10',
        },
        {
          price: '£10',
        },
      ],
    };
    const result = getTrolleyTotalPrice(state);

    expect(result).toEqual('£30');
  });

  it('should return the lenght of the trolley', () => {
    const state = {
      trolley: [{}, {}, {}, {}],
    };
    const result = getTrolleyLength(state);

    expect(result).toEqual(4);
  });
});
