export function calcThermo(rawQht, rawQhhr, rawTh, rawTc, rawQht2) {
  let qht = Number(rawQht);
  let qhhr = Number(rawQhhr);
  let th = Number(rawTh);
  let tc = Number(rawTc);
  let qht2 = Number(rawQht2);

  let qmid = 1.16 * qht * (th - tc) + qht2;
  let qmax = 1.16 * qhhr * (th - tc) + qht2;
  let qmidg = qmid * 0.0008598;
  let qmaxg = qmax * 0.0008598;
  return {qmid, qmax, qmidg, qmaxg};
}