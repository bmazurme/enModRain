export function calcRain(slope, roof, facade, q20, n, qPlus) {
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
  console.log(q);
  let qSum = q + Number(qPlus);
  console.log(q);
  return {q: q, q5:q5, qSum:qSum, sumArea: sumArea};
}