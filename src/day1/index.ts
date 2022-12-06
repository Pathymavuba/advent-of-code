// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename:any) {
//     const contents = readFileSync(filename, 'utf-8');
  
//     const arr = contents.split('\n');
  
//     console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  
//     return arr;
//   }

//   syncReadFile('./src/day1/input.txt');
const fs = require('fs');
const inputData = fs.readFileSync('./src/day1/input.txt', 'utf8');

const inputArray = inputData.split('\n');

let mostCalories : number  = 0
let curentCount : number = 0 

inputArray.forEach((line:any)=>{
    if(line == ''){
         if(curentCount > mostCalories){
           mostCalories = curentCount
    }
    curentCount = 0
}
else{
    curentCount += Number(line);
}
})

console.log(mostCalories);

