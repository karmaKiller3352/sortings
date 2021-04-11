const a = [2, 14, 434, 56, 21, 86, 24, 4, 6, 8, 0, 13];
let count = 0;
const sorting = (arr) => {
	count += 1;
	if (arr.length <= 1) return arr;

	const mI = Math.floor(arr.length / 2);

	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === mI) continue;
		if (arr[i] < arr[mI]) left.push(arr[i]);
		if (arr[i] > arr[mI]) right.push(arr[i]);
	}
	return [...sorting(left), arr[mI], ...sorting(right)];
};

const sorted = sorting(a);
console.log(count);
console.log(sorted);
