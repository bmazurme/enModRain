export function calcTank(item) {
  const qmid = Number(item.qmid);
  const qmax = Number(item.qmax);
  const qsp = Number(item.qsp);
  const b = Number(item.b);
  const t = Number(item.t);
  const tc = Number(item.tc);
  const th = Number(item.th);

  const k_hr_ht = qmax / qmid;
  const k_hr_ht_sp = qsp / qmid;
  const fi = 1 - k_hr_ht_sp + (k_hr_ht - 1) * (k_hr_ht_sp / k_hr_ht) ** (k_hr_ht / (k_hr_ht - 1));
  const fi2 =1 - k_hr_ht_sp + (k_hr_ht - 1) * (k_hr_ht_sp / k_hr_ht) ** (k_hr_ht / (k_hr_ht - 1)) + ((k_hr_ht_sp - 1) / k_hr_ht_sp) ** k_hr_ht;
  const w = fi * t * qmid / (1.16 * (th - tc));
  const w2 = fi2 * t * qmid / (1.16 * (th - tc)); // ????
  const v1 = w * b;
  const v2 = w2 * b;

  return {
    fi,
    fi2,
    v1,
    v2,
    w,
    w2,
    k_hr_ht,
    k_hr_ht_sp,
    name: item.name,
    qmax,
    qmid,
    qsp,
    th,
    tc,
    t,
    b
  };
}