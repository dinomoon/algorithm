/*
  const fs = require('fs');
  let input = require('fs').readFileSync('/dev/stdin').toString();
*/

let input = require('fs').readFileSync('./input.txt').toString().split('\n');
const N = +input[0];
for (let i = 1; i <= N; i++) {
  const split = input[i].split(' ');
  const repeatN = +split[0];
  const str = split[1];
  let answer = '';
  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(repeatN);
  }
  console.log(answer);
}
