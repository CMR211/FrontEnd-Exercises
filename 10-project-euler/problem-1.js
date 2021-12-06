let arr = [];
for (let i = 1; i < 1000; i++) {
	arr.push(i);
}
arr = arr.filter(item => ((item % 3) === 0 || (item % 5) === 0));
let arrsum = arr.reduce((a, b) => { return a+b})
console.log(arrsum);