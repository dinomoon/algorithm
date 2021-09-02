function solution(a, b) {
  let answer = 'YES';
  let aMap = new Map();
  let bMap = new Map();

  for (let x of a) {
    if (aMap.has(x)) {
      aMap.set(x, aMap.get(x) + 1);
    } else {
      aMap.set(x, 1);
    }
  }

  for (let x of b) {
    if (bMap.has(x)) {
      bMap.set(x, bMap.get(x) + 1);
    } else {
      bMap.set(x, 1);
    }
  }

  for (let [key, value] of aMap) {
    if (value !== bMap.get(key)) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

let a = 'AbaAeCea';
let b = 'baeeACA';
console.log(solution(a, b));
