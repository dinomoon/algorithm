function solution(n) {
  answer = '';
  function DFS(n) {
    if (n > 7) return;
    else {
      console.log(n);
      DFS(n * 2);
      DFS(n * 2 + 1);
    }
  }
  DFS(n);

  return answer;
}

console.log(solution(1));
