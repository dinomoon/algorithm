function solution(a, b, c) {
  let min = Number.MAX_SAFE_INTEGER;
  if (a < min) min = a;
  if (b < min) min = b;
  if (c < min) min = c;

  return min;
}

console.log(solution(6, 5, 11));
