// /// <summary> РАСЧЕТ NP - ОБЩЕЕ СЕКУНДНОЕ </summary>
// public static double GetNpSec(double q0Sec, double qhrutot, double count, double pcs)
// {
//     return count > 0 ? count * qhrutot / (q0Sec * 3600) : pcs * qhrutot / (q0Sec * 3600); // npSec
// }
// /// <summary> РАСЧЕТ NP - СЕКУНДНОЕ </summary>
// public static double GetNpHour(double count, double qhrutot, double q0, double pcs)
// {
//     return count > 0 ? count * qhrutot / q0 : pcs * qhrutot / q0;
// }
// /// <summary> ДОЖДЕВОЙ СТОК РАСЧЕТ </summary>
// public static double SumRain(double slope, double q20, double f1, double f2, double n)
// {
//     return slope <= 1.5 ? q20 * (f1 + f2 * 0.3) / 10000 : q20 * Math.Pow(4, n) * (f1 + f2 * 0.3) / 10000;
// }
// /// <summary> РАСХОД ЧАСОВОЙ РАСЧЕТ </summary>
// public static double GetQhour(double alpha, double q0, double koef)
// {
//     return 0.005 * alpha * q0 * koef;
// }
// /// <summary> РАСХОД СЕКУНДНЫЙ РАСЧЕТ </summary>
// public static double GetQsec(double alphaSec, double q0Sec)
// {
//     return 5 * alphaSec * q0Sec;
// }
// /// <summary> Расчет теплового потока </summary>
// public static double GetCaloric(double qHot, double temperature, double temperaturec, double losses)
// {
//     return (1.16 * qHot * (temperature - temperaturec)) + losses;
// }

// public static double GetA(double q20, double n, double p, double mr, double y)
// {
//     return q20 * Math.Pow(20, n) * Math.Pow(1 + Math.Log10(p) / Math.Log10(mr), y);
// }