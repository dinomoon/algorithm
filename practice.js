function solution(s) {
  let answer = 0;
  let repeat = s.length;
  let arrForNewStr = [];

  for (let i = 0; i < repeat / 2; i++) {
    let num = i + 1;
    let count = 1;
    let newStr = '';
    for (let j = 0; j < s.length; j = j + num) {
      let currentSub = s.substring(j, j + num);
      let nextSub = s.substring(j + num, j + num + num);

      if (currentSub === nextSub) {
        count++;
      } else {
        if (count === 1) {
          newStr += currentSub;
        } else {
          newStr += count + currentSub;
        }
        count = 1;
      }
    }

    arrForNewStr.push(newStr.length);
  }

  answer = Math.min(...arrForNewStr);

  return answer;
}

console.log(solution('aabbaccc'));
