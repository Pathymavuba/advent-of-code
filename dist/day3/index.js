"use strict";
const fs = require('fs');
const inputData = fs.readFileSync('./src/day3/input.txt', 'utf8');
const inputArray = inputData.split('\n');
const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars = [];
let score = 0;
inputArray.forEach((line) => {
    const first = line.slice(0, line.length / 2);
    const second = line.slice(line.length / 2, line.length);
    for (const c of first) {
        if (second.includes(c)) {
            chars.push(c);
            break;
        }
    }
});
chars.forEach((c) => {
    score += priorities.indexOf(c) + 1;
});
console.log(score);
