export function calcCirc(item) {
  let c = 4.18;
  let p = 988.50;

  // if (item.t1 === 50) {
  //   c = 4.18;
  //   p =988.50;
  // } else 
  if (item.t1 === 51) {
    c = 4.18;
    p = 988.07;
  } else if (item.t1 === 52) {
    c = 4.18;
    p = 987.63;
  } else if (item.t1 === 53) {
    c = 4.18;
    p = 987.18;
  } else if (item.t1 === 54) {
    c = 4.18;
    p = 986.73;
  } else if (item.t1 === 55) {
    c = 4.18;
    p = 986.28;
  } else if (item.t1 === 56) {
    c = 4.18;
    p = 985.82;
  } else if (item.t1 === 57) {
    c = 4.18;
    p = 985.35;
  } else if (item.t1 === 58) {
    c = 4.18;
    p = 984.88;
  } else if (item.t1 === 59) {
    c = 4.18;
    p = 984.40;
  } else if (item.t1 === 60) {
    c = 4.18;
    p = 983.92;
  } else if (item.t1 === 61) {
    c = 4.18;
    p = 983.43;
  } else if (item.t1 === 62) {
    c = 4.18;
    p = 982.94;
  } else if (item.t1 === 63) {
    c = 4.18;
    p = 982.45;
  } else if (item.t1 === 64) {
    c = 4.18;
    p = 981.95;
  } else if (item.t1 === 65) {
    c = 4.19;
    p = 981.44;
  } else if (item.t1 === 66) {
    c = 4.19;
    p = 980.93;
  } else if (item.t1 === 67) {
    c = 4.19;
    p = 980.42;
  } else if (item.t1 === 68) {
    c = 4.19;
    p = 979.90;
  } else if (item.t1 === 69) {
    c = 4.19;
    p = 979.38;
  } else if (item.t1 === 70) {
    c = 4.19;
    p = 978.86;
  }

  let qc = item.qht / (p * c * (item.t1 - item.t2));  
  return {name: item.name, qht: item.qht, t1: item.t1, t2: item.t2, c, p, qc};
}