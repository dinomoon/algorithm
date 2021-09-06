function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= check.length; i++) {
        if (check[i]) {
          tmp += i + ' ';
        }
      }
      if (tmp.length > 0) {
        answer.push(tmp.trim());
      }
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);

  return answer;
}

console.log(solution(3));
