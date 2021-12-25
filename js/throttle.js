import { calcThrottle } from "./calc/calcThrottle.js";

const addButton = document.querySelector('.profile__add');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');
const q = formAddCard.querySelector('.form__input_type_q');
const hdr = formAddCard.querySelector('.form__input_type_hdr');

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
    q: q.value,
    hdr: hdr.value
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
  let d = calcThrottle(item.q, item.hdr);
  
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__remove');
  deleteButton.addEventListener("click", deleteCard);
  cardElement.querySelector('.element__name').textContent = item.name;

  const el1 = cardElement.querySelector('.formula1');
  const el2 = cardElement.querySelector('.formula2');
  const el3 = cardElement.querySelector('.formula3');
  const el4 = cardElement.querySelector('.formula4');
  const el5 = cardElement.querySelector('.formula5');

  katex.render(String.raw`d_0,\space мм`, el1, {throwOnError: false});
  katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot q)^2}{h_{др}}}`, el2, {throwOnError: false});
  katex.render(String.raw`h_{др}`, el3, {throwOnError: false});
  katex.render(String.raw`q`, el4, {throwOnError: false});
  katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot ${item.q})^2}{${item.hdr}}} = ${d.toFixed(1)} \space мм `, el5, {throwOnError: false});

  return cardElement;
}