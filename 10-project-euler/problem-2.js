const LIMIT = 4000000;

function sumFibEven (max) {
	if (!Number.isInteger(max)) return 0;
	if (max < 7) return 2;
	const arr = [1, 2];
	const arrEven = [];
	while (true) {
		let id = arr.length;
		arr.push(arr[id-1] + arr[id-2]);
		if (arr[id] > max) break;
		if (arr[id] % 2 === 0) arrEven.push(arr[id]);
	}
	return arrEven.reduce((a, b) => a+b) + 2;
}

console.log(`>> Sum of even fib numbers below ${LIMIT.toLocaleString()} is equal to: ${sumFibEven(LIMIT).toLocaleString()}.`);