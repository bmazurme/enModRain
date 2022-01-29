import { calcDwmeter } from "../calc/calcDwmeter.js";
import { CardDwmeter } from "../cards/CardDwmeter.js";
import { FormValidator } from "../FormValidator.js";
import { config } from "../config.js";
import { initDwmeter } from "../data/initDwmeter.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const cardsContainer = document.querySelector('.elements');
const q = formAddCard.querySelector('.form__input_type_q');
const s = formAddCard.querySelector('.form__input_type_s');

const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

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
  cardFormValidator.resetValidation();
  openPopup(popupTypeAdd); 
}

function saveCardForm(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameFormAddCard.value,
    q: q.value,
    s: s.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);

function createCard(item) {
  const obj = calcDwmeter(item);
  const template = '#card-template';
  const card = new CardDwmeter(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();
  return cardElement;
}

initDwmeter.forEach(item => {
  const element = createCard(item);
  cardsContainer.prepend(element);
});