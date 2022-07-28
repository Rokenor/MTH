const { NUMBERS } = require('..');

describe('isNumberSimple:', () => {
  it('2 is simple', () => {
    expect(NUMBERS.isNumberSimple('2')).toBe(true);
  });
  it('19 is simple', () => {
    expect(NUMBERS.isNumberSimple('19')).toBe(true);
  });
  it('10 is not simple', () => {
    expect(NUMBERS.isNumberSimple('10')).toBe(false);
  });
  it('28 is not simple', () => {
    expect(NUMBERS.isNumberSimple('28')).toBe(false);
  });
});
