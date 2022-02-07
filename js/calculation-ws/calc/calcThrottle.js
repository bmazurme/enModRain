export function calcThrottle(item) {
  const q = Number(item.q);
  const hdr = Number(item.hdr);
  const d = 3.16 * ((3.6 * q) ** 2 / hdr) ** 0.25;
  return {d, q, hdr, name: item.name};
}