function solution(b, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = arr.length;

  // 정렬
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    const sale = arr[i][0] / 2 + arr[i][1];
    let budget = b - sale;
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      let purchase = arr[j][0] + arr[j][1];

      if (i !== j && purchase > budget) break;
      if (i !== j && purchase <= budget) {
        budget -= purchase;
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
