// import { calcDwmeter } from "./calc/calcDwmeter.js";

const addButton = document.querySelector('.calculate__add');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');

const qht = formAddCard.querySelector('.form__input_type_qht');
const t1 = formAddCard.querySelector('.form__input_type_t1');
const t2 = formAddCard.querySelector('.form__input_type_t2');

function openPopup(popup) {
  document.addEventListener('keydown', (evt) => keydownEsc(popup, evt));
  popup.classList.add('popup_active');
}
function closePopup(popup) {
  document.removeEventListener('keydown', (evt) => keydownEsc(popup, evt));
  popup.classList.remove('popup_active');
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
    qht: qht.value,
    t1: t1.value,
    t2: t2.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
  }
});

function keydownEsc(popup, evt) {
  if (evt.key === 'Escape') {
      closePopup(popup);
  }
}

function calcDwmeter(item) {
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
  
  return {c, p, qc};
}


function createCard(item) {
  let result = calcDwmeter(item);
  console.log(result.qc);
  
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__remove');
  deleteButton.addEventListener("click", deleteCard);
  cardElement.querySelector('.element__name').textContent = item.name;
  const el1 = cardElement.querySelector('.formula1');
  const el2 = cardElement.querySelector('.formula2');
  const el3 = cardElement.querySelector('.formula3');
  const el4 = cardElement.querySelector('.formula4');
  const el5 = cardElement.querySelector('.formula5');
  const el6 = cardElement.querySelector('.formula6');
  const el7 = cardElement.querySelector('.formula7');
  const el8 = cardElement.querySelector('.formula8');
  const el9 = cardElement.querySelector('.formula9');
  const el10 = cardElement.querySelector('.formula10');
  const el11 = cardElement.querySelector('.formula11');
  const el12 = cardElement.querySelector('.formula12');
  const el13 = cardElement.querySelector('.formula13');
  const el14 = cardElement.querySelector('.formula14');

  katex.render(String.raw`Q_ц, л/с`, el1, {throwOnError: false});
  katex.render(String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)}`, el2, {throwOnError: false});
  katex.render(String.raw`Q^{ht} - `, el3, {throwOnError: false});
  katex.render(String.raw`Вт`, el4, {throwOnError: false});
  katex.render(String.raw`Q^{ht} = calc.qht|floatformat:2 Вт`, el5, {throwOnError: false});
  katex.render(String.raw`\rho -  плотность воды, кг / м^{3}`, el6, {throwOnError: false});
  katex.render(String.raw`\rho = calc.p|floatformat:2 кг / м^{3}`, el7, {throwOnError: false});
  katex.render(String.raw`с - удельная теплоемкость воды, кДж / кг \degree C`, el8, {throwOnError: false});
  katex.render(String.raw`с = calc.c|floatformat:2 кДж / кг \degree C`, el9, {throwOnError: false});
  katex.render(String.raw`t^1 - температура воды на входе в участок трубопровода или системы, \degree C`, el10, {throwOnError: false});
  katex.render(String.raw`t^1 = calc.t1|floatformat \degree C`, el11, {throwOnError: false});
  katex.render(String.raw`t^2 -  температура воды на выходе из участка трубопровода или системы, \degree C`, el12, {throwOnError: false});
  katex.render(String.raw`t^2 = calc.t2|floatformat \degree C`, el13, {throwOnError: false});
  katex.render(String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)} = calc.qc|floatformat:2 л/с`, el14, {throwOnError: false});

  return cardElement;
}

