"use strict";
const fs = require('fs');
const inputData = fs.readFileSync('./src/day2/input.txt', 'utf8');
const inputArray = inputData.split('\n');
function getOutcome(me, you) {
    switch (me) {
        case 'A':
            if (you == 'X')
                return 3;
            if (you == 'Y')
                return 6;
            if (you == 'Z')
                return 0;
            break;
        case 'B':
            if (you == 'X')
                return 0;
            if (you == 'Y')
                return 3;
            if (you == 'Z')
                return 6;
            break;
        case 'C':
            if (you == 'X')
                return 6;
            if (you == 'Y')
                return 0;
            if (you == 'Z')
                return 3;
            break;
    }
    return 0;
}
;
function getMyScore(you) {
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
}
;
let totalScore = 0;
inputArray.forEach((line) => {
    const [oppChoice, myChoice] = line.split(' ');
    totalScore += getOutcome(oppChoice, myChoice);
    totalScore += getMyScore(myChoice);
});
console.log(totalScore);
