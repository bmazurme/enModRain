export function calcRain(item) {
  let slope = item.slope;
  let roof = item.roof;
  let facade = item.facade;
  let q20 = item.q20;
  let n = item.n;
  let q = 0;
  let sumArea = 0;
  let q5 = 0;

  sumArea = Number(roof) + Number(facade) * 0.3;
  
  if (Number(slope) < 1.5) {
    q = sumArea * Number(q20) / 10000;
  } else {
    q5 = 4 ** Number(n) * Number(q20);
    q = sumArea * q5 / 10000;
  }
  return {q, q5, sumArea, slope, roof, facade, q20, n};
}