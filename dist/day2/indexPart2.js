"use strict";
const fs = require('fs');
const inputData = fs.readFileSync('./src/day2/input.txt', 'utf8');
const inputArray = inputData.split('\n');
const getOutcome = (me, you) => {
    switch (me) {
        case 'A':
            if (you == 'X') {
                return {
                    shape: 'Z',
                    score: 0,
                };
            }
            else if (you == 'Y') {
                return {
                    shape: 'X',
                    score: 3,
                };
            }
            else if (you == 'Z') {
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
            }
            else if (you == 'Y') {
                return {
                    shape: 'Y',
                    score: 3,
                };
            }
            else if (you == 'Z') {
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
            }
            else if (you == 'Y') {
                return {
                    shape: 'Z',
                    score: 3,
                };
            }
            else if (you == 'Z') {
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
const getMyScore = (you) => {
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
inputArray.forEach((line) => {
    const [oppChoice, myChoice] = line.split(' ');
    const score = getOutcome(oppChoice, myChoice);
    totalScore += score.score;
    totalScore += getMyScore(score.shape);
});
console.log(totalScore - 1);
//output 12382
