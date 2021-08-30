function solution(str, s) {
  let answer = [];
  let left = 0;
  let right = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) {
      answer.push(0);
      continue;
    }
    left = 0;
    right = 0;
    let leftIdx = i - 1;
    let rightIdx = i + 1;
    // left
    while (leftIdx >= 0) {
      left++;
      if (str[leftIdx] === s) {
        break;
      }
      leftIdx--;
    }

    // right
    while (rightIdx < str.length) {
      right++;
      if (str[rightIdx] === s) {
        break;
      }
      rightIdx++;
    }

    if (left === 0) {
      answer.push(right);
    } else if (right === 0) {
      answer.push(left);
    } else {
      answer.push(Math.min(left, right));
    }
  }

  return answer;
}
let str = 'teachermode';
console.log(solution(str, 'e'));
