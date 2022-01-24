export function calcThrottle(item) {
  let q = Number(item.q);
  let hdr = Number(item.hdr);
  let d = 3.16 * ((3.6 * q) ** 2 / hdr) ** 0.25;
  return {d, q, hdr};
}