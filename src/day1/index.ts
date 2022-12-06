const fs = require('fs');
const inputData = fs.readFileSync('./src/day1/input.txt', 'utf8');


const inputArray = inputData.split('\n');

let currentCount = 0;
const totals: number[] = [];

inputArray.forEach((line:any) => {
	if (line == '') {
		totals.push(currentCount);
		currentCount = 0;
	} else {
		currentCount += Number(line);
	}
});

const total = totals
	.sort((a, b) => a - b)
	.slice(-3)
	.reduce((a, b) => a + b);

console.log(total);