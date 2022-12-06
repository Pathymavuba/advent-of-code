const fs = require('fs');
const inputData = fs.readFileSync('./src/day2/input.txt', 'utf8');

const inputArray = inputData.split('\n');

// [A: rock , B: paper , , C: scissors]
// [X: rock - 1 , Y: paper - 2 , , Z: scissors - 3]
// 0 loose. 3 draw. 6 win

type Achoice = 'A'|'B'|'C'
type Bchoice = 'X'|'Y'|'Z'
type outCome =  0|3|6
type myScore = 1 | 2 | 3;

function getOutcome (me:Achoice,you:Bchoice):outCome {
    switch (me) {
		case 'A':
			if (you == 'X') return 3;
			if (you == 'Y') return 6;
			if (you == 'Z') return 0;
			break;
		case 'B':
			if (you == 'X') return 0;
			if (you == 'Y') return 3;
			if (you == 'Z') return 6;
			break;
		case 'C':
			if (you == 'X') return 6;
			if (you == 'Y') return 0;
			if (you == 'Z') return 3;
			break;
	}
	return 0;
};

function getMyScore (you: Bchoice): myScore {
	switch (you) {
		case 'X':
			return 1;
			break;
		case 'Y':
			return 2;
			break;
		case 'Z':
			return 3;
			break;
		default:
			break;
	}
	return 1;
};
let totalScore = 0;

inputArray.forEach((line:any) => {
	const [oppChoice, myChoice] = line.split(' ') as [Achoice, Bchoice];

	totalScore += getOutcome(oppChoice, myChoice);
	totalScore += getMyScore(myChoice);
});

console.log(totalScore);



