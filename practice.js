function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  let sum;

  for (let x of arr) {
    sum = [...String(x)].reduce((a, b) => +a + +b);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max && x > answer) {
      answer = x;
    }
  }
  return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123, 1298361293];
console.log(solution(arr));
