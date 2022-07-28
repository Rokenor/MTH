export const NUMBERS = {
  isNumberSimple: (number) => {
    let count = 0;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        count += 1;
      }
    }
    return count === 0 ? true : false;
  },
};
