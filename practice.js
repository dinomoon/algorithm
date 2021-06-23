function solution(numbers) {
  let answer = 0;

  // numbers를 배열로 변환하고 내림차순으로 정렬
  let numbersArr = numbers.split('').sort((a, b) => b - a);

  // 최댓값
  let N = +numbersArr.join('');

  // 에라토스테네스의 체로 N까지의 숫자 중 소수구하기
  let primeArr = makePrimeArr(N);

  for (let i = 2; i <= N; i++) {
    if (primeArr[i] === false) continue;
    let temp = i.toString().split('');
    for (let number of numbersArr) {
      let idx = temp.indexOf(number);
      if (idx > -1) temp.splice(idx, 1);
    }

    if (temp.length === 0) answer++;
  }

  return answer;
}

function makePrimeArr(N) {
  let arr = [];
  for (let i = 2; i <= N; i++) {
    if (arr[i] === false) continue;
    for (let j = i + i; j <= N; j += i) {
      arr[j] = false;
    }
  }

  return arr;
}
console.log(solution('100'));
