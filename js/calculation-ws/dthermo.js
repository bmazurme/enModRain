

import { config } from "../config.js";
import { calcDthermo } from "../calc/calcDthermo.js";
import { CardDthermo } from "../cards/CardDthermo.js";
import { initDthermo } from "../data/initDthermo.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
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
  const obj = calcDthermo(item);
  const template = '#card-template';
  const card = new CardDthermo(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();

  return cardElement;
}