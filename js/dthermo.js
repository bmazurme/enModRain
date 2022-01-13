import { calcDthermo } from "./calc/calcDthermo.js";

const addButton = document.querySelector('.calculate__add');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');

// const qht = formAddCard.querySelector('.form__input_type_qht');
// const t1 = formAddCard.querySelector('.form__input_type_t1');
// const t2 = formAddCard.querySelector('.form__input_type_t2');

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
    // qht: qht.value,
    // t1: t1.value,
    // t2: t2.value
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

function createCard(item) {
  // let result = calcCirc(item);
  // console.log(result.qc);
  
  // const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  // const deleteButton = cardElement.querySelector('.element__remove');
  // deleteButton.addEventListener("click", deleteCard);
  // cardElement.querySelector('.element__name').textContent = item.name;
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

  // katex.render(String.raw`Q_ц, л/с`, el1, {throwOnError: false});
  // katex.render(String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)}`, el2, {throwOnError: false});
  // katex.render(String.raw`Q^{ht} - `, el3, {throwOnError: false});
  // katex.render(String.raw`Вт`, el4, {throwOnError: false});
  // katex.render(String.raw`Q^{ht} = ${item.qht} \space Вт`, el5, {throwOnError: false});
  // katex.render(String.raw`\rho \space -`, el6, {throwOnError: false});
  // katex.render(String.raw`кг / м^{3}`, el15, {throwOnError: false});
  // katex.render(String.raw`кДж / кг \degree C`, el16, {throwOnError: false});
  // katex.render(String.raw`\degree C`, el17, {throwOnError: false});
  // katex.render(String.raw`\degree C`, el18, {throwOnError: false});
  // katex.render(String.raw`\rho = ${result.p.toFixed(2)} \space кг / м^{3}`, el7, {throwOnError: false});
  // katex.render(String.raw`с - `, el8, {throwOnError: false});
  // katex.render(String.raw`с = ${result.c.toFixed(2)} \space кДж / кг \degree C`, el9, {throwOnError: false});
  // katex.render(String.raw`t^1 - `, el10, {throwOnError: false});
  // katex.render(String.raw`t^1 = ${item.t1} \degree C`, el11, {throwOnError: false});
  // katex.render(String.raw`t^2 - `, el12, {throwOnError: false});
  // katex.render(String.raw`t^2 = ${item.t2} \degree C`, el13, {throwOnError: false});
  // katex.render(String.raw`Q_ц = \dfrac{${item.qht}}{${result.p} \cdot ${result.c} \cdot (${item.t1} - ${item.t2})} = ${result.qc.toFixed(2)} \space л/с`, el14, {throwOnError: false});

  // return cardElement;
}