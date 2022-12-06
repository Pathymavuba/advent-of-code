const fs = require('fs');
const inputData = fs.readFileSync('./src/day2/input.txt', 'utf8');

const inputArray = inputData.split('\n');

// [A: rock , B: paper , , C: scissors]
// [X: rock - 1 , Y: paper - 2 , , Z: scissors - 3]
// 0 loose. 3 draw. 6 win

type Achoice = 'A'|'B'|'C'
type Bchoice = 'X'|'Y'|'Z'
type outCome = {
	shape:  Bchoice;
	score: 0 | 3 | 6;
};
type myScore = 1 | 2 | 3;

const getOutcome = (me: Achoice, you: Bchoice): outCome => {
	switch (me) {
		case 'A':
			if (you == 'X') {
				return {
					shape: 'Z',
					score: 0,
				};
			} else if (you == 'Y') {
				return {
					shape: 'X',
					score: 3,
				};
			} else if (you == 'Z') {
				return {
					shape: 'Y',
					score: 6,
				};
			}
			break;
		case 'B':
			if (you == 'X') {
				return {
					shape: 'X',
					score: 0,
				};
			} else if (you == 'Y') {
				return {
					shape: 'Y',
					score: 3,
				};
			} else if (you == 'Z') {
				return {
					shape: 'Z',
					score: 6,
				};
			}
			break;
		case 'C':
			if (you == 'X') {
				return {
					shape: 'Y',
					score: 0,
				};
			} else if (you == 'Y') {
				return {
					shape: 'Z',
					score: 3,
				};
			} else if (you == 'Z') {
				return {
					shape: 'X',
					score: 6,
				};
			}
	}
	return {
		shape: 'X',
		score: 0,
	};
};

const getMyScore = (you: Bchoice): myScore => {
	switch (you) {
		case 'X':
			return 1;
		case 'Y':
			return 2;
		case 'Z':
			return 3;
	}
};

let totalScore = 0;

inputArray.forEach((line:any) => {
	const [oppChoice, myChoice] = line.split(' ') as [Achoice, Bchoice];

	const score = getOutcome(oppChoice, myChoice);
	totalScore += score.score;
	totalScore += getMyScore(score.shape);
});

console.log(totalScore-1);
//output 12382