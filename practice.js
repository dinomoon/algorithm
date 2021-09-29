function solution(str1, str2) {
  let answer = 0;
  let map1 = new Map();
  let map2 = new Map();

  // map2
  for (let x of str2) {
    if (map2.has(x)) {
      map2.set(x, map2.get(x) + 1);
    } else {
      map2.set(x, 1);
    }
  }

  // map1
  for (let i = 0; i < str2.length; i++) {
    let char = str1[i];
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }

  let lt = 0;
  let rt = str2.length;
  while (rt < str1.length) {
    if (isSame(map1, map2)) {
      answer++;
    } else {
      map1.set(str1[lt], map1.get(str1[lt]) - 1);
      if (map1.get(str1[lt]) === 0) {
        map1.delete(str1[lt]);
      }
      lt++;
      if (map1.has(str1[rt])) {
        map1.set(str1[rt], map1.get(str1[rt]) + 1);
      } else {
        map1.set(str1[rt], 1);
      }
    }
  }

  return answer;
}

function isSame(m1, m2) {
  if (m1.size() !== m2.size()) {
    return false;
  } else {
  }
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
