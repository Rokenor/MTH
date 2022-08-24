import IsNumberSimple from './isNumberSimple';

function GetNextSimpleNumber(number: number): number {
  let currentNumber = number + 1;

  if (!IsNumberSimple(currentNumber)) {
    return GetNextSimpleNumber(currentNumber);
  } else {
    return currentNumber;
  }
}

export default GetNextSimpleNumber;
