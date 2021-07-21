/*
  const fs = require('fs');
  let input = require('fs').readFileSync('/dev/stdin').toString();
*/

let input = require('fs').readFileSync('./input.txt').toString().split('\n');
const N = +input[0];

for (let i = 1; i <= N; i++) {
  let arr = input[i].split(' ').map(Number);
  let C = arr[0];

  arr.splice(0, 1);
  let sum = arr.reduce((a, b) => a + b);
  let avg = sum / C;

  let count = 0;
  for (let j = 0; j < C; j++) {
    if (arr[j] > avg) count++;
  }
  console.log(((count / arr.length) * 100).toFixed(3) + '%');
}
