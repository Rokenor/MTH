import IsNumberSimple from "./isNumberSimple";

function decomposingHelper(num: number, res: string): string {
	if (IsNumberSimple(num)) {
  	let currentRes = res ? `${res},${num}`: `${num}`;
  	return currentRes;
  }
  
  if (num % 2 === 0) {
    let currentNumber = num / 2;
    let currentRes = res ? `${res},2`: `2`;

    console.log('2', currentNumber, currentRes);

    return decomposingHelper(currentNumber, currentRes);
  }
  
  if (num % 3 === 0) {
    let currentNumber = num / 3;
    let currentRes = res ? `${res},3`: `3`;

    console.log('3', currentNumber, currentRes);

    return decomposingHelper(currentNumber, currentRes);
  }
  
  if (num % 5 === 0) {
    let currentNumber = num / 5;
    let currentRes = res ? `${res},5`: `5`;

    console.log('5', currentNumber, currentRes);

    return decomposingHelper(currentNumber, currentRes);
  }
  
   if (num % 7 === 0) {
    let currentNumber = num / 7;
    let currentRes = res ? `${res},7`: `7`;

    console.log('7', currentNumber, currentRes);

    return decomposingHelper(currentNumber, currentRes);
  }

  return '';
}

function DecomposingOfNumber(num: number): number[] {
  let result = decomposingHelper(num, '');

  return result.split(',').map(item => +item);
}

export default DecomposingOfNumber;

//https://jsfiddle.net/Rokenor/9Lrufv8b/169/