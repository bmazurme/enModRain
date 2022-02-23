export function calcDwmeter(item) {
  const s = Number(item.s);
  const q = Number(item.q);
  const h = s * (3.6 * q) ** 2;
  return {name: item.name, h, s, q};
}