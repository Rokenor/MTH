import SortNumbersArray from "../src/utils/sort";

describe("SortNumbersArray:", () => {
  it("[3,4,5,6,1,2,3,0,9] is sorted correctly", () => {
    expect(SortNumbersArray([3, 4, 5, 6, 1, 2, 3, 0, 9])).toStrictEqual([
      0, 1, 2, 3, 3, 4, 5, 6, 9,
    ]);
  });
  it("[34,42,1,2,67,9,23] is sorted correctly", () => {
    expect(SortNumbersArray([34, 42, 1, 2, 67, 9, 23])).toStrictEqual([
      1, 2, 9, 23, 34, 42, 67,
    ]);
  });
});
