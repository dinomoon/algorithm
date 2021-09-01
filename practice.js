function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let rt = 0;
  let sum = arr[lt];

  while (rt < arr.length) {
    if (sum === m) {
      answer++;
      sum -= arr[lt];
      lt++;
    } else if (sum > m) {
      sum -= arr[lt];
      lt++;
    } else {
      rt++;
      sum += arr[rt];
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(1, a));
