function solution(a, b, c) {
  let answer = 'NO',
    max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max > max) answer = 'YES';

  return answer;
}

console.log(solution(13, 33, 17));
