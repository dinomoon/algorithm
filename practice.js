// for of
// map, filter, reduce
// toUpperCase, toLowerCase
// substring, substr
// indexOf

function solution(arr) {
  let answer;

  answer = arr.filter((v, i) => arr.indexOf(v) === i);

  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));
