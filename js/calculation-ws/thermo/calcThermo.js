export function calcThermo(item) {
  const qht = Number(item.qht);
  const qhhr = Number(item.qhhr);
  const th = Number(item.th);
  const tc = Number(item.tc);
  const qht2 = Number(item.qht2);
  
  const qmid = 1.16 * qht * (th - tc) + qht2;
  const qmax = 1.16 * qhhr * (th - tc) + qht2;
  const qmidg = qmid * 0.0008598;
  const qmaxg = qmax * 0.0008598;
  return {qmid, qmax, qmidg, qmaxg, qht, qhhr, th, tc, qht2, name: item.name};
}