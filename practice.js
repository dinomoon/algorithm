function solution(arr) {
  let answer;

  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = tmp;
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
