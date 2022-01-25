export function calcTank(item) {
  const k_hr_ht = Number(item.qmax) / Number(item.qmid);
  const k_hr_ht_sp = Number(item.qsp) / Number(item.qmid);

  const fi = 1 - k_hr_ht_sp + (k_hr_ht - 1) * (k_hr_ht_sp / k_hr_ht) ** (k_hr_ht / (k_hr_ht - 1));
  const fi2 =1 - k_hr_ht_sp + (k_hr_ht - 1) * (k_hr_ht_sp / k_hr_ht) ** (k_hr_ht / (k_hr_ht - 1)) + ((k_hr_ht_sp - 1) / k_hr_ht_sp) ** k_hr_ht;

  const w = fi * item.t * item.qmid / (1.16 * (item.th - item.tc))
  const w2 = fi2 * item.t * item.qmid / (1.16 * (item.th - item.tc))

  const v1 = w * item.b;
  const v2 = w2 * item.b;

  return {fi, fi2, v1, v2, w, w2, k_hr_ht, k_hr_ht_sp,
    name: item.name,
    qmax: item.qmax,
    qmid: item.qmid,
    qsp: item.qsp,
    th: item.th,
    tc: item.tc,
    t: item.t,
    b: item.b
  };
}