// 5. Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function factorial (number) {
  if (number === 0) return 1;
  return factorial(number - 1) * number
}

function isDivisible (number) {
  for (let i = 2; i < 21; i++) {
    if (number % i !== 0) return false;
  }
  return true;
}

const biggestNumber = factorial(20);

const factors = [];
for (let i = 1; i < 21; i++) {
  factors.push(i);
}

function permuteArray (array) {
  const res = [];
  if (array.lenght === 1) return res.push(array);
  for (let i = 0; i < array.lenght; i++) {
    const newarr = arr;
    permuteArray(newarr.splice(i,i));
  }
  return res
}

console.log(permuteArray([1,2,3]))