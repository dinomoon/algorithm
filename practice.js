/*
  const fs = require('fs');
  let input = require('fs').readFileSync('/dev/stdin').toString();
*/

// let input = require('fs').readFileSync('./input.txt').toString().split('\n');

function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + 'ms');
}

work();
console.log('다음 작업');
