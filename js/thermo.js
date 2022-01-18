import { calcThermo } from "./calc/calcThermo.js";

const addButton = document.querySelector('.calculate__add');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');
const qht = formAddCard.querySelector('.form__input_type_qht');
const qhhr = formAddCard.querySelector('.form__input_type_qhhr');
const th = formAddCard.querySelector('.form__input_type_th');
const tc = formAddCard.querySelector('.form__input_type_tc');
const qht2 = formAddCard.querySelector('.form__input_type_qht2');

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
    qhhr: qhhr.value,
    th: th.value,
    tc: tc.value,
    qht2: qht2.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

//console.log(addButton);

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

function createCard(item) {
  let obj = calcThermo(item.qht, item.qhhr, item.th, item.tc, item.qht2);  
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.box__remove');
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
  const el15 = cardElement.querySelector('.formula15');
  const el16 = cardElement.querySelector('.formula16');
  const el17 = cardElement.querySelector('.formula17');

  katex.render(String.raw`Q_T^h (Q_{hr}^h) \space кВт`, el1, {throwOnError: false});
  katex.render(String.raw`(Q^{ht})`, el2, {throwOnError: false});
  katex.render(String.raw`Q_T^h = 1.16 \cdot q_T^h \cdot (t^h - t^c) + Q^{ht}`, el3, {throwOnError: false});
  katex.render(String.raw`Q_{hr}^h = 1.16 \cdot q_{hr}^h \cdot (t^h - t^c) + Q^{ht}`, el4, {throwOnError: false});
  katex.render(String.raw`t^h`, el5, {throwOnError: false});
  katex.render(String.raw`^\circ C`, el6, {throwOnError: false});
  katex.render(String.raw`t^h = ${item.th} \space ^\circ C`, el7, {throwOnError: false});
  katex.render(String.raw`t^c`, el8, {throwOnError: false});
  katex.render(String.raw`^\circ C`, el9, {throwOnError: false})
  katex.render(String.raw`t^c = ${item.tc} \space ^\circ C`, el10, {throwOnError: false});
  katex.render(String.raw`Q^{ht}`, el11, {throwOnError: false});
  katex.render(String.raw`кВт`, el12, {throwOnError: false});
  katex.render(String.raw`Q^{ht} = ${item.qht} \space кВт`, el13, {throwOnError: false});
  katex.render(String.raw`Q_T^h = 1.16 \space \cdot ${item.qht} \cdot ( ${item.th} - ${item.tc} ) \space + ${item.qht2} = ${obj.qmid.toFixed(2)} \space кВт`, el14, {throwOnError: false});
  katex.render(String.raw`${obj.qmidg.toFixed(4)} \space Гкал`, el15, {throwOnError: false});
  katex.render(String.raw`Q_{hr}^h = 1.16 \space \cdot ${item.qhhr} \cdot ( ${item.th} - ${item.tc}) \space + ${item.qht2} = ${obj.qmax.toFixed(2)} \space кВт`, el16, {throwOnError: false});
  katex.render(String.raw`${obj.qmaxg.toFixed(4)} \space Гкал`, el17, {throwOnError: false});

  return cardElement;
}