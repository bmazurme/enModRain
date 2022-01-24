export function calcDwmeter(item) {
  let s = Number(item.s);
  let q = Number(item.q);
  let h = s * (3.6 * q) ** 2;
  return {name: item.name, h, s, q};
}