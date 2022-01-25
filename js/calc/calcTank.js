export function calcTank(item) {
  let k_hr_ht = item.qmax / item.qmid;
  let k_hr_ht_sp = item.qsp / item.qmid;

  let fi = 1 - k_hr_ht_sp + (k_hr_ht - 1) * (k_hr_ht_sp / k_hr_ht) ** (k_hr_ht / (k_hr_ht - 1));
  let fi2 =1 - k_hr_ht_sp + (k_hr_ht - 1) * (k_hr_ht_sp / k_hr_ht) ** (k_hr_ht / (k_hr_ht - 1)) + ((k_hr_ht_sp - 1) / k_hr_ht_sp) ** k_hr_ht;

  let w = fi * item.t * item.qmid / (1.16 * (item.th - item.tc))
  let w2 = fi2 * item.t * item.qmid / (1.16 * (item.th - item.tc))

  let v1 = w * item.b;
  let v2 = w2 * item.b;

  return {fi, fi2, v1, v2, w, w2, k_hr_ht, k_hr_ht_sp, name: item.name, qmax: item.qmax, qmid: item.qmid, qsp: item.qsp};
}