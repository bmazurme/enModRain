export function calcDwmeter(rawS, rawQ) {
  let s = Number(rawS);
  let q = Number(rawQ);
  let h = s * (3.6 * q) ** 2;
  return h;
}