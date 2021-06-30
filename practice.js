function solution(pos) {
  let answer = 0;
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  let curPos = [+pos[1], obj[pos[0]]];
  let arr = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, 2],
    [-1, -2],
    [1, 2],
    [1, -2],
  ];

  for (let v of arr) {
    let dx = v[0] + curPos[0];
    let dy = v[1] + curPos[1];
    if (dx > 0 && dy > 0) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution('a1'));
