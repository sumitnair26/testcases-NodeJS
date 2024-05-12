import {describe, expect, it, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  it('should sum 1 + 2 correctly', () => {
    const finalOutput = sum(1,2);
    expect(finalOutput).toBe(3);
    //expect(sum(1, 2)).toBe(3);
  });

  it('should return sum of negative numver correctlt', () =>{
    const finalOutput = sum(-1,-2);
    expect(finalOutput).toBe(-3);
  })
});