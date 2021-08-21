/*
  const fs = require('fs');
  let input = require('fs').readFileSync('/dev/stdin').toString();
*/

// let input = require('fs').readFileSync('./input.txt').toString().split('\n');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await setTimeout(() => {
    console.log('object');
  }, 1000);
  return 'Dog';
};

const getRabbit = async () => {
  await sleep(500);
  return 'Rabbit';
};

const getTurtle = async () => {
  await sleep(2000);
  return 'Turtle';
};

async function process() {
  console.log(await getDog());
  console.log(await getRabbit());
  console.log(await getTurtle());
}
process();
