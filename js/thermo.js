import { calcThermo } from "./calc/calcThermo.js";
import { CardThermo } from "./cards/CardThermo.js";
import { FormValidator } from "./FormValidator.js";
import { config } from "./config.js";
import { initThermo } from "./data/initThermo.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardsContainer = document.querySelector('.elements');
const qht = formAddCard.querySelector('.form__input_type_qht');
const qhhr = formAddCard.querySelector('.form__input_type_qhhr');
const th = formAddCard.querySelector('.form__input_type_th');
const tc = formAddCard.querySelector('.form__input_type_tc');
const qht2 = formAddCard.querySelector('.form__input_type_qht2');
const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

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

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

function createCard(item) {
  const obj = calcThermo(item);  
  const template = '#card-template';
  const card = new CardThermo(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();
  return cardElement;
}

initThermo.forEach(item => {
  const element = createCard(item);
  cardsContainer.prepend(element);
});