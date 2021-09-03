function solution(a) {
  let answer = 0;

  let stack = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === '(') {
      stack.push(a[i]);
    } else {
      stack.pop();
      if (a[i - 1] === '(') {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }

  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
