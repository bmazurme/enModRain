export function calcThrottle(rawQ, rawHdr) {
  let q = Number(rawQ);
  let hdr = Number(rawHdr);
  let d = 3.16 * ((3.6 * q) ** 2 / hdr) ** 0.25;
  return d;
}