function solution(n, lost, reserve) {
  let realLost = lost.filter((v) => !reserve.includes(v));
  let realReserve = reserve.filter((v) => !lost.includes(v));

  return (
    n -
    realLost.filter((v) => {
      let bp = realReserve.find((r) => Math.abs(v - r) <= 1);
      if (!bp) return true;
      realReserve.filter((r) => r !== bp);
    }).length
  );
}
