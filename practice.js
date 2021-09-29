function solution(a, b) {
  let answer = [];
  let m = a.length;
  let n = b.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < m && p2 < n) {
    if (a[p1] <= b[p2]) {
      answer.push(a[p1++]);
    } else {
      answer.push(b[p2++]);
    }
  }

  while (p1 < m) {
    answer.push(a[p1++]);
  }

  while (p2 < n) {
    answer.push(b[p2++]);
  }

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
