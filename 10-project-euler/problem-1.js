// 1. Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let arr = [];
for (let i = 1; i < 1000; i++) {
	arr.push(i);
}
arr = arr.filter(item => ((item % 3) === 0 || (item % 5) === 0));
let arrsum = arr.reduce((a, b) => { return a+b})
console.log(arrsum);