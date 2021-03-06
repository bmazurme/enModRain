export const initCustomers = [
  {
    id: 0,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 1',
    customer: 'Жилые здания оборудованные внутренним водопроводом и канализацией, с ванными и местными водонагревателями',
    unit: '1 житель',
    coefficient: 1.15,
    cold: 180,
    hot: 70,
    coldHourMax: 10.3,
    hotHourMax: 5.8,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 1,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 2',
    customer: 'Жилые здания оборудованные внутренним водопроводом и канализацией, с централизованным гор. водоснабжением',
    unit: '1 житель',
    coefficient: 1.15,
    cold: 210,
    hot: 75,
    coldHourMax: 11.6,
    hotHourMax: 6.5,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 2,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 3',
    customer: 'Общежития с общими душевыми',
    unit: '1 житель',
    coefficient: 1.1,
    cold: 90,
    hot: 42.5,
    coldHourMax: 10.4,
    hotHourMax: 5.4,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 3,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 4',
    customer: 'Общежития с душевыми при всех жилых комнатах',
    unit: '1 житель',
    coefficient: 1.15,
    cold: 140,
    hot: 68,
    coldHourMax: 12.5,
    hotHourMax: 7,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 4,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 5',
    customer: 'Гостиницы, пансионы и мотели с общими ванными и душами',
    unit: '1 житель',
    coefficient: 1.1,
    cold: 120,
    hot: 59.5,
    coldHourMax: 12.5,
    hotHourMax: 7,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 5,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 6',
    customer: 'Гостиницы, пансионы и мотели с душами во всех номерах',
    unit: '1 житель',
    coefficient: 1.15,
    cold: 230,
    hot: 119,
    coldHourMax: 19,
    hotHourMax: 10.2,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 80,
    coldHourSum: 115,
    type: 1,
  },
  {
    id: 6,
    standard: 'СП 30.13330.2016 Приложение А.2 п.п. 7',
    customer: 'Гостиницы, пансионы и мотели с ванными во всех номерах',
    unit: '1 житель',
    coefficient: 1.15,
    cold: 300,
    hot: 153,
    coldHourMax: 30,
    hotHourMax: 13.6,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 7,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Больницы с общими душевыми',
    unit: '1 койка',
    coefficient: 1.1,
    cold: 120,
    hot: 63.8,
    coldHourMax: 8.4,
    hotHourMax: 4.5,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 8,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Больницы с санитарными узлами приближенными к палатам',
    unit: '1 койка',
    coefficient: 1.1,
    cold: 200,
    hot: 76.5,
    coldHourMax: 12,
    hotHourMax: 6.5,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 9,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Больницы инфекционные',
    unit: '1 койка',
    coefficient: 1.1,
    cold: 240,
    hot: 93.5,
    coldHourMax: 14,
    hotHourMax: 8.1,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 120,
    coldHourSum: 200,
    type: 1,
  },
  {
    id: 10,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Санатории и дома отдыха с общими душами',
    unit: '1 место',
    coefficient: 1.15,
    cold: 130,
    hot: 55.3,
    coldHourMax: 12.5,
    hotHourMax: 7,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 11,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Санатории и дома отдыха с ванными при всех жилых комнатах',
    unit: '1 место',
    coefficient: 1.15,
    cold: 200,
    hot: 85,
    coldHourMax: 10,
    hotHourMax: 4.2,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 12,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Санатории и дома отдыха с душами при всех жилых комнатах',
    unit: '1 место',
    coefficient: 1.15,
    cold: 150,
    hot: 63.8,
    coldHourMax: 12.5,
    hotHourMax: 7,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 13,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Физкультурно-оздоровительные учреждения со столовыми на полуфабрикатах, без стирки белья',
    unit: '1 место',
    coefficient: 1.15,
    cold: 60,
    hot: 25.5,
    coldHourMax: 10,
    hotHourMax: 3.8,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 14,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Физкультурно-оздоровительные учреждения со столовыми работающими на сырье, и прачечными',
    unit: '1 место',
    coefficient: 1.1,
    cold: 200,
    hot: 85,
    coldHourMax: 18,
    hotHourMax: 6.8,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 15,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Дошкольные образовательные учреждения и школы интернаты, с дневным пребыванием детей, со столовыми, работающими на полуфабрикатах',
    unit: '1 ребенок',
    coefficient: 1.1,
    cold: 40,
    hot: 17,
    coldHourMax: 9.5,
    hotHourMax: 3.8,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 16,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Дошкольные образовательные учреждения и школы интернаты, с дневным пребыванием детей, со столовыми работающими на сырье, и прачечными, оборудованными автоматическими стиральными машинами',
    unit: '1 ребенок',
    coefficient: 1.1,
    cold: 80,
    hot: 25.5,
    coldHourMax: 18,
    hotHourMax: 6.8,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 17,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Дошкольные образовательные учреждения и школы интернаты, с круглосуточным пребыванием детей, со столовыми, работающими на полуфабрикатах',
    unit: '1 ребенок',
    coefficient: 1.15,
    cold: 60,
    hot: 25.5,
    coldHourMax: 10,
    hotHourMax: 3.8,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 18,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Дошкольные образовательные учреждения и школы интернаты, с круглосуточным пребыванием детей, со столовыми работающими на сырье, и прачечными, оборудованными автоматическими стиральными машинами',
    unit: '1 ребенок',
    coefficient: 1.15,
    cold: 120,
    hot: 34,
    coldHourMax: 18,
    hotHourMax: 6.8,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 19,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Учебные заведения с душевыми при гимнастических залах и столовыми, работающими полуфабрикатах',
    unit: '1 учащийся',
    coefficient: 1.1,
    cold: 20,
    hot: 6.8,
    coldHourMax: 3.5,
    hotHourMax: 1.2,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 60,
    coldHourSum: 100,
    type: 1,
  },
  {
    id: 20,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Административные здания',
    unit: '1 работник',
    coefficient: 1.2,
    cold: 15,
    hot: 5.1,
    coldHourMax: 4,
    hotHourMax: 1.7,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 60,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 21,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Предприятия общественного питания с приготовлением пищи, реалезуемой в обеденном зале',
    unit: '1 блюдо',
    coefficient: 1,
    cold: 12,
    hot: 3.4,
    coldHourMax: 12,
    hotHourMax: 3.4,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 22,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Магазины продовольственные (без холодильных установок)',
    unit: '1 работник в смену',
    coefficient: 1.1,
    cold: 30,
    hot: 10.2,
    coldHourMax: 4,
    hotHourMax: 1.7,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 23,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Магазины промтоварные',
    unit: '1 работник в смену',
    coefficient: 1.1,
    cold: 20,
    hot: 6.8,
    coldHourMax: 4,
    hotHourMax: 1.7,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 24,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Поликлиники и амбулатории',
    unit: '1 больной',
    coefficient: 1.1,
    cold: 10,
    hot: 3.4,
    coldHourMax: 2.6,
    hotHourMax: 1,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 25,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Поликлиники и амбулатории',
    unit: '1  работник в смену',
    coefficient: 1,
    cold: 30,
    hot: 10.2,
    coldHourMax: 4,
    hotHourMax: 1.7,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 60,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 26,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Аптеки торговый зал и подсобные помещения',
    unit: '1 работник',
    coefficient: 1,
    cold: 30,
    hot: 10.2,
    coldHourMax: 4,
    hotHourMax: 1.7,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 40,
    coldHourSum: 60,
    type: 1,
  },
  {
    id: 27,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Аптеки лаборатория приготовления лекарств',
    unit: '1 работник',
    coefficient: 1,
    cold: 310,
    hot: 46.8,
    coldHourMax: 32,
    hotHourMax: 7,
    hotSecondSum: 0.2,
    coldSecondSum: 0.2,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 28,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Парикмахерские',
    unit: '1 рабочее место в смену',
    coefficient: 1.1,
    cold: 56,
    hot: 28.1,
    coldHourMax: 9,
    hotHourMax: 4,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 40,
    coldHourSum: 60,
    type: 1,
  },
  {
    id: 29,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Кинотеатры, театры, клубы и досуго-развлекательные учреждения для зрителей',
    unit: '1 человек',
    coefficient: 1,
    cold: 8,
    hot: 2.6,
    coldHourMax: 0.9,
    hotHourMax: 0.3,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 50,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 30,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Кинотеатры, театры, клубы и досуго-развлекательные учреждения для артистов',
    unit: '1 человек',
    coefficient: 1,
    cold: 40,
    hot: 21.3,
    coldHourMax: 3.4,
    hotHourMax: 1.9,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 50,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 31,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Стадионы и спортзалы для зрителей',
    unit: '1 человек',
    coefficient: 1,
    cold: 3,
    hot: 0.9,
    coldHourMax: 0.3,
    hotHourMax: 0.1,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 40,
    coldHourSum: 60,
    type: 1,
  },
  {
    id: 32,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Стадионы и спортзалы для физкультурников (с учетом приема душа)',
    unit: '1 человек',
    coefficient: 1.15,
    cold: 50,
    hot: 25.5,
    coldHourMax: 4.5,
    hotHourMax: 2.1,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 50,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 33,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Стадионы и спортзалы для спортсменов',
    unit: '1 человек',
    coefficient: 1.15,
    cold: 100,
    hot: 51,
    coldHourMax: 9,
    hotHourMax: 4.3,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 50,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 34,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Плавательные бассейны, пополнение бассейна',
    unit: '5 вместимости бассейна в сутки',
    coefficient: 1,
    cold: 10,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 1,
  },
  {
    id: 35,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Плавательные бассейны для зрителей',
    unit: '1 место',
    coefficient: 1,
    cold: 3,
    hot: 0.9,
    coldHourMax: 0.3,
    hotHourMax: 0.1,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 40,
    coldHourSum: 60,
    type: 1,
  },
  {
    id: 36,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Плавательные бассейны для спортсменов (с учетом приема душа)',
    unit: '1 человек',
    coefficient: 1,
    cold: 100,
    hot: 51,
    coldHourMax: 9,
    hotHourMax: 4.3,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 50,
    coldHourSum: 80,
    type: 1,
  },
  {
    id: 37,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Бани для мытья в мыльной и ополаскиваем в душе',
    unit: '1 посетитель',
    coefficient: 1,
    cold: 180,
    hot: 102,
    coldHourMax: 180,
    hotHourMax: 102,
    hotSecondSum: 0.4,
    coldSecondSum: 0.4,
    hotHourSum: 120,
    coldHourSum: 180,
    type: 1,
  },
  {
    id: 38,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Бани для мытья в мыльной и ополаскиваем в душе с приемом оздоровительных процедур',
    unit: '1 посетитель',
    coefficient: 1,
    cold: 290,
    hot: 161.5,
    coldHourMax: 290,
    hotHourMax: 161.5,
    hotSecondSum: 0.4,
    coldSecondSum: 0.4,
    hotHourSum: 190,
    coldHourSum: 290,
    type: 1,
  },
  {
    id: 39,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Бани, душевая кабина',
    unit: '1 посетитель',
    coefficient: 1,
    cold: 360,
    hot: 204,
    coldHourMax: 360,
    hotHourMax: 204,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 240,
    coldHourSum: 360,
    type: 1,
  },
  {
    id: 40,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Бани, ванная кабина',
    unit: '1 посетитель',
    coefficient: 1,
    cold: 540,
    hot: 306,
    coldHourMax: 540,
    hotHourMax: 306,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 360,
    coldHourSum: 540,
    type: 1,
  },
  {
    id: 41,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Прачечные механизированные',
    unit: '1 кг сухого белья',
    coefficient: 1,
    cold: 75,
    hot: 21.3,
    coldHourMax: 75,
    hotHourMax: 21.3,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 1,
  },
  {
    id: 42,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Прачечные немеханизированныке',
    unit: '1 кг сухого белья',
    coefficient: 1,
    cold: 40,
    hot: 12.8,
    coldHourMax: 40,
    hotHourMax: 12.8,
    hotSecondSum: 0.2,
    coldSecondSum: 0.3,
    hotHourSum: 200,
    coldHourSum: 300,
    type: 1,
  },
  {
    id: 43,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Производственные цехи обычные',
    unit: '1 чел. в смену',
    coefficient: 1.15,
    cold: 25,
    hot: 9.4,
    coldHourMax: 9.4,
    hotHourMax: 3.7,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 40,
    coldHourSum: 60,
    type: 1,
  },
  {
    id: 44,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Производственные цехи с тепловыделениями свыше 84 кДж на 1 м3/ч',
    unit: '1 чел. в смену',
    coefficient: 1,
    cold: 45,
    hot: 20.4,
    coldHourMax: 14.1,
    hotHourMax: 7.1,
    hotSecondSum: 0.1,
    coldSecondSum: 0.14,
    hotHourSum: 40,
    coldHourSum: 60,
    type: 1,
  },
  {
    id: 45,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Душевые в бытовых помещениях промышленных предприятий',
    unit: '1 душевая сетка в смену',
    coefficient: 1.1,
    cold: 500,
    hot: 229.5,
    coldHourMax: 500,
    hotHourMax: 229.5,
    hotSecondSum: 0.14,
    coldSecondSum: 0.2,
    hotHourSum: 270,
    coldHourSum: 500,
    type: 1,
  },
  {
    id: 46,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Расход воды на поливку травяного покрова',
    unit: '1 м2',
    coefficient: 1.2,
    cold: 3,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 2,
  },
  {
    id: 47,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Расход воды на поливку футбольного поля',
    unit: '1 м2',
    coefficient: 1.2,
    cold: 0.5,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 2,
  },
  {
    id: 48,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Расход воды на поливку остальных спортивных сооружений',
    unit: '1 м2',
    coefficient: 1.2,
    cold: 1.5,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 2,
  },
  {
    id: 49,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Расход воды на поливку усовершенствованым покрытий, тротуаров, площадей, заводских проездов',
    unit: '1 м2',
    coefficient: 1.2,
    cold: 0.4,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 2,
  },
  {
    id: 50,
    standard: 'СП 30.13330.2016 Приложение А.2',
    customer: 'Расход воды на поливку зеленых насаждений, газонов и цветников',
    unit: '1 м2',
    coefficient: 1.2,
    cold: 3,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 2,
  },
  {
    id: 51,
    standard: 'СП 30.13330.2016 Приложение А2',
    customer: 'Заливка поверхностей катка',
    unit: '1 м2',
    coefficient: 1,
    cold: 0.5,
    hot: 0,
    coldHourMax: 0,
    hotHourMax: 0,
    hotSecondSum: 0,
    coldSecondSum: 0,
    hotHourSum: 0,
    coldHourSum: 0,
    type: 2,
  }
];