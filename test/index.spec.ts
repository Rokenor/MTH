import { NUMBERS } from '../src/index';

describe('isNumberSimple:', () => {
  it('2 is simple', () => {
    expect(NUMBERS.isNumberSimple(2)).toBe(true);
  });
  it('19 is simple', () => {
    expect(NUMBERS.isNumberSimple(19)).toBe(true);
  });
  it('10 is not simple', () => {
    expect(NUMBERS.isNumberSimple(10)).toBe(false);
  });
  it('28 is not simple', () => {
    expect(NUMBERS.isNumberSimple(28)).toBe(false);
  });
  it('2876 is not simple', () => {
    expect(NUMBERS.isNumberSimple(2876)).toBe(false);
  });
});

describe('decomposingOfNumbers:', () => {
  it('420 decomposed to 2, 2, 3, 5, 7', () => {
    expect(NUMBERS.decomposingOfNumbers(420)).toBe([2, 2, 3, 5, 7]);
  });
  it('420792 decomposed to ', () => {
    expect(NUMBERS.decomposingOfNumbers(420)).toBe([2, 2, 3, 5, 7]);
  });
});