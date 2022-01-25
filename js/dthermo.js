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

//import { calcDthermo } from "./calc/calcDthermo.js";
import { config } from "./config.js";
import { calcDthermo } from "./calc/calcDthermo.js";
import { CardDthermo } from "./cards/CardDthermo.js";
import { initDthermo } from "./data/initDthermo.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');

const t1 = formAddCard.querySelector('.form__input_type_t1');
const l = formAddCard.querySelector('.form__input_type_l');
const q = formAddCard.querySelector('.form__input_type_q');
const th = formAddCard.querySelector('.form__input_type_th');
const tb = formAddCard.querySelector('.form__input_type_tb');
const v = formAddCard.querySelector('.form__input_type_v');
const dtr = formAddCard.querySelector('.form__input_type_dtr');
const dsl = formAddCard.querySelector('.form__input_type_dsl');
const diamsln = formAddCard.querySelector('.form__input_type_diamsln');
const alphanp2 = formAddCard.querySelector('.form__input_type_alphanp2');
const alphasl = formAddCard.querySelector('.form__input_type_alphasl');
const alphasl2 = formAddCard.querySelector('.form__input_type_alphasl2');

const openPopup = (popup) => {
  document.addEventListener('keydown', closeByEscape);
  popup.classList.add('popup_active');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  }
}

function openAddCardPopup() {
  formAddCard.reset();
  openPopup(popupTypeAdd); 
}
function deleteCard(evn) {
  evn.target.closest('.element').remove();
}
function saveCardForm(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameFormAddCard.value,
    t1: t1.value,
    l: l.value,
    q: q.value,
    th: th.value,
    tb: tb.value,
    v: v.value,
    dtr: dtr.value,
    dsl: dsl.value,
    diamsln: diamsln.value,
    alphanp2: alphanp2.value,
    alphasl: alphasl.value,
    alphasl2: alphasl2.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

initDthermo.forEach(item => {
  const element = createCard(item);
  cardsContainer.prepend(element);
});

function createCard(item) {
  let obj = calcDthermo(item);
  //console.log(result);
  
  // const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  // const deleteButton = cardElement.querySelector('.element__remove');
  // deleteButton.addEventListener("click", deleteCard);
  // cardElement.querySelector('.element__name').textContent = item.name;

  let template = '#card-template';
  const card = new CardDthermo(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();

  

  // const el1 = cardElement.querySelector('.formula1');
  // const el2 = cardElement.querySelector('.formula2');
  // const el3 = cardElement.querySelector('.formula3');
  // const el4 = cardElement.querySelector('.formula4');
  // const el5 = cardElement.querySelector('.formula5');
  // const el6 = cardElement.querySelector('.formula6');
  // const el7 = cardElement.querySelector('.formula7');
  // const el8 = cardElement.querySelector('.formula8');
  // const el9 = cardElement.querySelector('.formula9');
  // const el10 = cardElement.querySelector('.formula10');
  // const el11 = cardElement.querySelector('.formula11');
  // const el12 = cardElement.querySelector('.formula12');
  // const el13 = cardElement.querySelector('.formula13');
  // const el14 = cardElement.querySelector('.formula14');
  // const el15 = cardElement.querySelector('.formula15');
  // const el16 = cardElement.querySelector('.formula16');
  // const el17 = cardElement.querySelector('.formula17');
  // const el18 = cardElement.querySelector('.formula18');
  // const el19 = cardElement.querySelector('.formula19');
  // const el20 = cardElement.querySelector('.formula20');
  // const el21 = cardElement.querySelector('.formula21');
  // const el22 = cardElement.querySelector('.formula22');
  // const el23 = cardElement.querySelector('.formula23');
  // const el24 = cardElement.querySelector('.formula24');
  // const el25 = cardElement.querySelector('.formula25');
  // const el26 = cardElement.querySelector('.formula26');
  // const el27 = cardElement.querySelector('.formula27');
  // const el28 = cardElement.querySelector('.formula28');

  // katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu}`, el1, {throwOnError: false});
  // katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu} = ${result.re.toFixed(2)}`, el2, {throwOnError: false});
  // katex.render(String.raw`{\nu}`, el3, {throwOnError: false});
  // katex.render(String.raw`Nu = 0,021 \cdot Re^{0,8} \cdot Pr^{0,43}`, el4, {throwOnError: false});
  // katex.render(String.raw`Nu = 0,021 \cdot ${result.re.toFixed(2)} ^{0,8} \cdot ${result.pr.toFixed(2)} ^{0,43} = ${result.nu.toFixed(2)}`, el5, {throwOnError: false});
  // katex.render(String.raw`Pr`, el6, {throwOnError: false});
  // katex.render(String.raw`\alpha_{вн} = \dfrac {Nu \cdot \lambda_t} {d_{тр}} = \dfrac { ${result.nu.toFixed(2)} \cdot ${result.ham.toFixed(2)}} {${item.dtr}} = ${result.alpha.toFixed(2)}`, el7, {throwOnError: false});
  // katex.render(String.raw`\lambda_t`, el8, {throwOnError: false});
  // katex.render(String.raw`R_{ВН} = \dfrac 1 {\pi \cdot d_{тр} \cdot \alpha_{ВН}} = \dfrac 1 {\pi \cdot ${item.dtr} \cdot ${result.alpha.toFixed(2)}} = ${result.rbh.toFixed(2)}`, el9, {throwOnError: false});
  // katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, el10, {throwOnError: false});
  // katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${item.alphasl}} \cdot ln(\frac {${item.dsl}} {${item.dtr}}) = ${result.rsl.toFixed(3)}`, el11, {throwOnError: false});
  // katex.render(String.raw`R_{сл}`, el12, {throwOnError: false});
  // katex.render(String.raw`D_{сл}`, el13, {throwOnError: false});
  // katex.render(String.raw`d_{сл}`, el14, {throwOnError: false});
  // katex.render(String.raw`\lambda_{сл}`, el15, {throwOnError: false});
  // katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, el16, {throwOnError: false});
  // katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${item.alphasl2}} \cdot ln(\frac {${item.diamsln}} {${item.dsl}}) = ${result.rsl2.toFixed(3)}`, el17, {throwOnError: false});
  // katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot D_{сл} \cdot \alpha_{нар}}`, el18, {throwOnError: false});
  // katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot ${item.diamsln} \cdot ${item.alphanp2}} =  ${result.rnp.toFixed(3)}`, el19, {throwOnError: false});
  // katex.render(String.raw`k = \dfrac {1} {R_{вн} + \sum R_{сл} + R_{ нар}}`, el20, {throwOnError: false});
  // katex.render(String.raw`k = \dfrac {1} {${result.rbh.toFixed(3)} + ${result.rsl.toFixed(3)} + ${result.rsl2.toFixed(3)} + ${result.rnp.toFixed(3)}} = ${result.k.toFixed(3)}`, el21, {throwOnError: false});
  // katex.render(String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L`, el22, {throwOnError: false});
  // katex.render(String.raw`t^B`, el23, {throwOnError: false});
  // katex.render(String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L = ${result.k.toFixed(3)} \cdot (${item.th} - ${item.tb}) \cdot ${item.l} = ${result.qht.toFixed(3)} Вт`, el24, {throwOnError: false});
  // katex.render(String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q}`, el25, {throwOnError: false});
  // katex.render(String.raw`T_1`, el26, {throwOnError: false});
  // katex.render(String.raw`T_2`, el27, {throwOnError: false});
  // katex.render(String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q} = \dfrac {3,6 \cdot ${item.q} \cdot ${item.t1} - ${result.qht.toFixed(3)} \cdot 0,86} {3,6 \cdot ${item.q}} = ${result.t2.toFixed(3)}`, el28, {throwOnError: false});

  return cardElement;
}