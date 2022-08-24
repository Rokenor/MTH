function SortNumbersArray(array: number[]): number[] {
  const sortedArray = array.sort((a: number, b: number) => {
    if (a > b) {
      return 1; }
    if (a < b) {
      return -1; }
    return 0;
  });

  return sortedArray;
}

export default SortNumbersArray;