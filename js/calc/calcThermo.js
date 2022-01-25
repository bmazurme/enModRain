export function calcThermo(item) {
  let qht = Number(item.qht);
  let qhhr = Number(item.qhhr);
  let th = Number(item.th);
  let tc = Number(item.tc);
  let qht2 = Number(item.qht2);

  let qmid = 1.16 * qht * (th - tc) + qht2;
  let qmax = 1.16 * qhhr * (th - tc) + qht2;
  let qmidg = qmid * 0.0008598;
  let qmaxg = qmax * 0.0008598;
  return {qmid, qmax, qmidg, qmaxg, qht, qhhr, th, tc, qht2, name: item.name};
}