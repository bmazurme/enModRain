export function calcRain(slope, roof, facade, q20, n) {
  let q = 0;
  let sumArea = 0;
  let q5 = 0;

  if (Number(slope) < 1.5) {
    sumArea = Number(roof);
    q = sumArea * Number(q20) / 10000;
  } else {
    sumArea = Number(roof) + Number(facade) * 0.3;
    q5 = 4 ** Number(n) * Number(q20);
    q = sumArea * q5 / 10000;
  }
  return {q: q, q5:q5, sumArea: sumArea};
}