// ve = "Киниматическая вязкость, м"
// pr = "Критерий Прандтля"
// ham = "Коэффициент теплопроводности слоя, Вт/(м²×°C)", default=0)
// sln = "Диаметр наружного слоя, isol", default=0)
// qmaxg = "В течение часа максимального водопотребления, Гкал", default=0)

// return {re, nu, alpha, rbh, rsl, rsl2, rnp, k, qht, t2};
// re = "Критерий Рейнольдса"
// nu = "Критерий Нуссельта"
// alpha = "Коэффициент теплопередачи"
// rbh = "Термическое сопротивление жидкости"
// rsl = "Термическое сопротивление трубопровода"
// rsl2 = "Термическое сопротивление изоляционного слоя"
// rnp = "Термическое сопротивление наружного слоя"
// k = "Диаметр наружного слоя, м²/с"
// qht = "Теплопотери расчетного участка"
// t2 = "Температура расчетного участка трубопровода на выходе, °C"

// alphasl,  alphasl2,  alphanp2,      th, tb,   l, q,    t1, qht     v, dtr, dsl, diamsln,

// t1 = "Начальная температура расчетного участка, °C"
// l = "Длина расчетного участка, м"
// q = "Расход на участке, л/с"
// th = "Температура воды в трубе, °C (0-70)"
// tb = "Температура воздуха в помещении, °C"
// v = "Скорость потока, м/с"
// dtr = "Внутренний диаметр трубопровода, м"
// dsl = "Наружный диаметр трубопровода, м"
// diamsln = "Диаметр наружного слоя изоляции, м"
// alphanp2 = "коэффициент теплопроводности покровного слоя, Вт/(м²×°C), определяется по расчету или по СП 61.13330."
// alphasl = "Коэффициент теплопроводности слоя трубы, Вт/(м²×°C)"
// alphasl2 = "Коэффициент теплопередачи, Вт/(м²×°C)"

export function calcDthermo(item) {
    let pr = 13.45;
    let ve = 0.0000018;
    let ham = 0.5545000;
    // if (item.th === 0) {
    //     pr = 13.45;
    //     ve = 0.0000018;
    //     ham = 0.5545000;
    // } else 
    const th = Number(item.th);


    console.log(item);

    if (th === 1) {
        pr = 12.935;
        ve = 0.0000017;
        ham = 0.5569482;
    } else if (th === 2) {
        pr = 12.45;
        ve = 0.0000017;
        ham = 0.5593726;
    } else if (th === 3) {
        pr = 11.993;
        ve = 0.0000016;
        ham = 0.5617734;
    } else if (th === 4) {
        pr = 11.562;
        ve = 0.0000016;
        ham = 0.5641506;
    } else if (th === 5) {
        pr = 11.154;
        ve = 0.0000015;
        ham = 0.5665040;
    } else if (th === 6) {
        pr = 10.768;
        ve = 0.0000015;
        ham = 0.5688338;
    }  else if (th === 7) {
        pr = 10.402;
        ve = 0.0000014;
        ham = 0.5711398;
    }  else if (th === 8) {
        pr = 10.056;
        ve = 0.0000014;
        ham = 0.5734222;
    } else if (th === 9) {
        pr = 9.727;
        ve = 0.0000013;
        ham = 0.5756810;
    } else if (th === 10) {
        pr = 9.414;
        ve = 0.0000013;
        ham = 0.5779160;
    } else if (th === 11) {
        pr = 9.117;
        ve = 0.0000013;
        ham = 0.5801274;
    } else if (th === 12) {
        pr = 8.834;
        ve = 0.0000012;
        ham = 0.5823150;
    } else if (th === 13) {
        pr = 8.565;
        ve = 0.0000012;
        ham = 0.5844790;
    } else if (th === 14) {
        pr = 8.308;
        ve = 0.0000012;
        ham = 0.5866194;
    } else if (th === 15) {
        pr = 8.063;
        ve = 0.0000011;
        ham = 0.5887360;
    } else if (th === 16) {
        pr = 7.829;
        ve = 0.0000011;
        ham = 0.5908290;
    } else if (th === 17) {
        pr = 7.605;
        ve = 0.0000011;
        ham = 0.5928982;
    } else if (th === 18) {
        pr = 7.392;
        ve = 0.0000011;
        ham = 0.5949438;
    } else if (th === 19) {
        pr = 7.187;
        ve = 0.0000010;
        ham = 0.5969658;
    } if (th === 20) {
        pr = 6.991;
        ve = 0.0000010;
        ham = 0.5989640;
    } else if (th === 21) {
        pr = 6.804;
        ve = 0.0000010;
        ham = 0.6009386;
    } else if (th === 22) {
        pr = 6.624;
        ve = 0.0000010;
        ham = 0.6028894;
    } else if (th === 23) {
        pr = 6.451;
        ve = 0.0000009;
        ham = 0.6048166;
    } else if (th === 24) {
        pr = 6.286;
        ve = 0.0000009;
        ham = 0.6067202;
    } else if (th === 25) {
        pr = 6.127;
        ve = 0.0000009;
        ham = 0.6086000;
    } else if (th === 26) {
        pr = 5.974;
        ve = 0.0000009;
        ham = 0.6104562;
    } else if (th === 27) {
        pr = 4.827;
        ve = 0.0000009;
        ham = 0.6122886;
    } else if (th === 28) {
        pr = 5.686;
        ve = 0.0000008;
        ham = 0.6140974;
    } else if (th === 29) {
        pr = 5.55;
        ve = 0.0000008;
        ham = 0.6158826;
    } else if (th === 30) {
        pr = 5.419;
        ve = 0.0000008;
        ham = 0.6176440;
    } else if (th === 31) {
        pr = 5.293;
        ve = 0.0000008;
        ham = 0.6193818;
    } else if (th === 32) {
        pr = 5.172;
        ve = 0.0000008;
        ham = 0.6210958;
    } else if (th === 33) {
        pr = 5.055;
        ve = 0.0000008;
        ham = 0.6227862;
    } else if (th === 34) {
        pr = 4.942;
        ve = 0.0000007;
        ham = 0.6244530;
    } else if (th === 35) {
        pr = 4.833;
        ve = 0.0000007;
        ham = 0.6260960;
    } else if (th === 36) {
        pr = 4.727;
        ve = 0.0000007;
        ham = 0.6277154;
    } else if (th === 37) {
        pr = 4.626;
        ve = 0.0000007;
        ham = 0.6293110;
    } else if (th === 38) {
        pr = 4.527;
        ve = 0.0000007;
        ham = 0.6308830;
    } else if (th === 39) {
        pr = 4.432;
        ve = 0.0000007;
        ham = 0.6324314;
    } else if (th === 40) {
        pr = 4.341;
        ve = 0.0000007;
        ham = 0.6339560;
    } else if (th === 41) {
        pr = 4.252;
        ve = 0.0000006;
        ham = 0.6354570;
    } else if (th === 42) {
        pr = 4.166;
        ve = 0.0000006;
        ham = 0.6369342;
    } else if (th === 43) {
        pr = 4.083;
        ve = 0.0000006;
        ham = 0.6383878;
    } else if (th === 44) {
        pr = 4.002;
        ve = 0.0000006;
        ham = 0.6398178;
    } else if (th === 45) {
        pr = 3.924;
        ve = 0.0000006;
        ham = 0.6412240;
    } else if (th === 46) {
        pr = 3.848;
        ve = 0.0000006;
        ham = 0.6426066;
    } else if (th === 47) {
        pr = 3.775;
        ve = 0.0000006;
        ham = 0.6439654;
    } else if (th === 48) {
        pr = 3.704;
        ve = 0.0000006;
        ham = 0.6453006;
    } else if (th === 49) {
        pr = 3.635;
        ve = 0.0000006;
        ham = 0.6466122;
    } else if (th === 50) {
        pr = 3.568;
        ve = 0.0000005;
        ham = 0.6479000;
    } else if (th === 51) {
        pr = 3.504;
        ve = 0.0000005;
        ham = 0.6491642;
    } else if (th === 52) {
        pr = 3.441;
        ve = 0.0000005;
        ham = 0.6504046;
    } else if (th === 53) {
        pr = 3.38;
        ve = 0.0000005;
        ham = 0.6516214;
    } else if (th === 54) {
        pr = 3.32;
        ve = 0.0000005;
        ham = 0.6528146;
    } else if (th === 55) {
        pr = 3.263;
        ve = 0.0000005;
        ham = 0.6539840;
    } else if (th === 56) {
        pr = 3.206;
        ve = 0.0000005;
        ham = 0.6551298;
    } else if (th === 57) {
        pr = 3.152;
        ve = 0.0000005;
        ham = 0.6562518;
    } else if (th === 58) {
        pr = 3.099;
        ve = 0.0000005;
        ham = 0.6573502;
    } else if (th === 59) {
        pr = 3.048;
        ve = 0.0000005;
        ham = 0.6584250;
    } else if (th === 60) {
        pr = 2.998;
        ve = 0.0000005;
        ham = 0.6594760;
    } else if (th === 61) {
        pr = 2.949;
        ve = 0.0000005;
        ham = 0.6605034;
    } else if (th === 62) {
        pr = 2.901;
        ve = 0.0000005;
        ham = 0.6615070;
    } else if (th === 63) {
        pr = 2.855;
        ve = 0.0000004;
        ham = 0.6624870;
    } else if (th === 64) {
        pr = 2.81;
        ve = 0.0000004;
        ham = 0.6634434;
    } else if (th === 65) {
        pr = 2.767;
        ve = 0.0000004;
        ham = 0.6643760;
    } else if (th === 66) {
        pr = 2.724;
        ve = 0.0000004;
        ham = 0.6652850;
    } else if (th === 67) {
        pr = 2.683;
        ve = 0.0000004;
        ham = 0.6661702;
    } else if (th === 68) {
        pr = 2.642;
        ve = 0.0000004;
        ham = 0.6670318;
    } else if (th === 69) {
        pr = 2.603;
        ve = 0.0000004;
        ham = 0.6678698;
    } else if (th === 70) {
        pr = 2.565;
        ve = 0.0000004;
        ham = 0.6686840;
    }

    const l = Number(item.l);
    const v = Number(item.v);
    const dtr = Number(item.dtr);

    const re = v * dtr / ve;
    const nu = 0.021 * (re ** 0.8) * (pr ** 0.43);
    const alpha = nu * ham / dtr;
    const rbh = 1 / Math.PI/ dtr / alpha;
    const rsl = 1 / 2 / Math.PI / Number(item.alphasl) * Math.log(Number(item.dsl) / Number(item.dtr));
    const rsl2 = 1 / 2 / Math.PI / Number(item.alphasl2) * Math.log(Number(item.diamsln) / Number(item.dsl));
    const rnp = 1 / Math.PI / Number(item.diamsln) / Number(item.alphanp2);
    const k = 1 / (rbh + rsl + rsl2 + rnp);
    const qht = k * (Number(item.th) - Number(item.tb)) *l;
    const t2 = (3.6 * Number(item.q) * Number(item.t1) - qht / 1000 * 0.86) / 3.6 / Number(item.q);


    console.log({re, nu, alpha, rbh, rsl, rsl2, rnp, k, 
        qht, t2, pr, ve, ham, name: item.name, dtr: item.dtr, l, dsl: item.dsl,
        alphasl:item.alphasl, alphasl2: item.alphasl2, 
        tb: item.tb, th: item.th,  alphanp2: item.alphanp2, q: item.q, t1: item.t1,
        diamsln: item.diamsln,
    });


  return {re, nu, alpha, rbh, rsl, rsl2, rnp, k, 
    qht, t2, pr, ve, ham, name: item.name, dtr: item.dtr, l, dsl: item.dsl,
    alphasl:item.alphasl, alphasl2: item.alphasl2, 
    tb: item.tb, th: item.th,  alphanp2: item.alphanp2, q: item.q, t1: item.t1,
    diamsln: item.diamsln, v
};
}