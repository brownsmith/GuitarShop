import { trolley } from './trolley.js';
import expect from 'expect';

describe('trolley reducer', () => {
  it('should return the initial state', () => {
    expect(trolley(undefined, {})).toEqual([]);
  });
});
