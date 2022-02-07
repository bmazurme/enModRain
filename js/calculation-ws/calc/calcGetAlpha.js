import { initNpAlpha } from "../../data/initNpAlpha.js";

export const getAlpha = (item) => {
  let value = item.np;
  let pair;
  let pair1;

  for (let i = 1; i < initNpAlpha.length; i++) {
    if (value < Number(initNpAlpha[i].Np)) {
      pair = initNpAlpha[i - 1];
      pair1 = initNpAlpha[i];
      break;
    }
  }

  let alpha = Number(pair.Alpha);
  let alpha1 = Number(pair1.Alpha);
  let np = Number(pair.Np);
  let np1 = Number(pair1.Np);
  let interpol = alpha + (alpha1 - alpha) * (value - np) / (np1 - np);
  item['alpha'] = interpol;

  return item;
};