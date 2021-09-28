function solution(str) {
  let answer = 'YES';

  str = str.toLowerCase();
  let strReverse = [...str].reverse().join('');

  if (str !== strReverse) {
    return 'NO';
  }

  return answer;
}

let str = 'gooooooG';
console.log(solution(str));
