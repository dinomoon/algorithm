function solution(answers) {
  let answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const ss1 = answers.filter(
    (answer, idx) => answer === s1[idx % s1.length],
  ).length;

  const max = Math.max(ss1, ss2, ss3);

  if (max === ss1) answer.push(ss1);

  return answer;
}
