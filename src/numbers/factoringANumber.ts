import IsNumberSimple from "./isNumberSimple";
import GetNextSimpleNumber from "./getNextSimpleNumber";

function factoringHelper(
  number: number,
  result: string,
  simple: number
): string {
  if (IsNumberSimple(number)) {
    let currentRes = result ? `${result},${number}` : `${number}`;
    return currentRes;
  }

  if (number % simple === 0) {
    const currentNumber = number / simple;
    const currentRes = result ? `${result}, ${simple}` : `${simple}`;
    return factoringHelper(currentNumber, currentRes, simple);
  } else {
    const nextSimple = GetNextSimpleNumber(simple);
    return factoringHelper(number, result, nextSimple);
  }
}

function FactoringANumber(num: number): number[] {
  let result = factoringHelper(num, "", 2);

  return result.split(",").map((item) => +item);
}

export default FactoringANumber;
