import { NUMBERS } from "../src/index";

describe("isNumberSimple:", () => {
  it("2 is simple", () => {
    expect(NUMBERS.isNumberSimple(2)).toBe(true);
  });
  it("19 is simple", () => {
    expect(NUMBERS.isNumberSimple(19)).toBe(true);
  });
  it("197 is simple", () => {
    expect(NUMBERS.isNumberSimple(197)).toBe(true);
  });
  it("28 is not simple", () => {
    expect(NUMBERS.isNumberSimple(28)).toBe(false);
  });
  it("2876 is not simple", () => {
    expect(NUMBERS.isNumberSimple(2876)).toBe(false);
  });
});

describe("getNextSimpleNumber:", () => {
  it("next simple number of 3 is 5", () => {
    expect(NUMBERS.getNextSimpleNumber(3)).toBe(5);
  });
  it("next simple number of 11 is 13", () => {
    expect(NUMBERS.getNextSimpleNumber(11)).toBe(13);
  });
});

describe("factoringANumber:", () => {
  it("420 factored to 2, 2, 3, 5, 7", () => {
    expect(NUMBERS.factoringANumber(420)).toStrictEqual([2, 2, 3, 5, 7]);
  });
  it("420792 factored to 2, 2, 2, 3, 89, 197", () => {
    expect(NUMBERS.factoringANumber(420792)).toStrictEqual([
      2, 2, 2, 3, 89, 197,
    ]);
  });
  it("5478 factored to 2, 3, 11, 83", () => {
    expect(NUMBERS.factoringANumber(5478)).toStrictEqual([2, 3, 11, 83]);
  });
});

describe("getDivisorsANumber:", () => {
  it("divisors of 84 is 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84", () => {
    expect(NUMBERS.getDivisorsANumber(84)).toStrictEqual([
      1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84,
    ]);
  });
  it("divisors of 990 is 1, 2, 3, 5, 6, 9, 10, 11, 15, 18, 22, 30, 33, 45, 55, 66, 90, 99, 110, 165, 198, 330, 495, 990", () => {
    expect(NUMBERS.getDivisorsANumber(990)).toStrictEqual([
      1, 2, 3, 5, 6, 9, 10, 11, 15, 18, 22, 30, 33, 45, 55, 66, 90, 99, 110,
      165, 198, 330, 495, 990,
    ]);
  });
});
