export function calcRain(item) {
  const slope = Number(item.slope);
  const roof = Number(item.roof);
  const facade = Number(item.facade);
  const q20 = Number(item.q20);
  const n = Number(item.n);
  let q = 0;
  let sumArea = 0;
  let q5 = 0;

  sumArea = roof + facade * 0.3;
  
  if (slope < 1.5) {
    q = sumArea * q20 / 10000;
  } else {
    q5 = 4 ** n * q20;
    q = sumArea * q5 / 10000;
  }

  return {q, q5, sumArea, slope, roof, facade, q20, n, name: item.name};
}