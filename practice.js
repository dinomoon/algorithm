function solution(genres, plays) {
  let answer = [];
  let obj = {};
  let countArr = [];

  genres.forEach((genre, idx) => {
    const newItem = {
      id: idx,
      play: plays[idx],
    };

    if (!obj[genre]) {
      obj[genre] = [newItem];
    } else {
      obj[genre].push(newItem);
    }
  });

  for (let v in obj) {
    let count = 0;
    for (let item of obj[v]) {
      count += item.play;
    }
    countArr.push({ genre: v, count });
  }
  countArr.sort((a, b) => b.count - a.count);

  for (let genreObj of countArr) {
    let genreInfo = obj[genreObj.genre];
    genreInfo.sort((a, b) => b.play - a.play);
    answer.push(genreInfo[0].id);
    answer.push(genreInfo[1].id);
  }
  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  ),
);
