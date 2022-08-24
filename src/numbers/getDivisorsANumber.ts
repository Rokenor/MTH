import SortNumbersArray from "../utils/sort";
import FactoringANumber from "./factoringANumber";

function progressiveMultiplication(
  item: number,
  array: number[],
  index: number,
  prev: number = 0,
  result: number[] = []
): number[] {
  let currentResult: number;

  if (prev === 0) {
    currentResult = item * array[index];
  } else {
    currentResult = item * array[index] * prev;
  }

  result.push(currentResult);

  if (array[index + 1]) {
    return progressiveMultiplication(
      item,
      array,
      index + 1,
      prev ? array[index] * prev : array[index],
      result
    );
  }

  return result;
}

function GetDivisorsANumber(number: number): number[] {
  const container: number[] = [];
  const simpleNumbers: number[] = FactoringANumber(number);
  const calculatedNumbers: number[] = simpleNumbers
    .reduce(
      (result: any[], item, index) => {
        const shortList: number[] = simpleNumbers.filter(
          (item, i) => i !== index
        );

        for (let i: number = 0; i < shortList.length; i++) {
          result.push(progressiveMultiplication(item, shortList, i));
        }

        return result;
      },
      [1]
    )
    .flat();

  const currentResult = container
    .concat(simpleNumbers)
    .concat(calculatedNumbers)
    .filter((element, index, array) => array.indexOf(element) === index);

  const sortedResult = SortNumbersArray(currentResult);

  return sortedResult;
}

export default GetDivisorsANumber;
