import expect from 'expect';
import { getTrolleyTotalPrice } from './trolley';

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
});
