/*
  const fs = require('fs');
  let input = require('fs').readFileSync('/dev/stdin').toString();
*/

let input = +require('fs').readFileSync('./input.txt').toString();

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) break;
}

console.log(i);
