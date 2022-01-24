import { calcCirc } from "./calc/calcCirc.js";
import { FormValidator } from "./FormValidator.js";
import { config } from "./config.js";
import { CardCircflow } from "./cards/CardCircflow.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardsContainer = document.querySelector('.elements');
const qht = formAddCard.querySelector('.form__input_type_qht');
const t1 = formAddCard.querySelector('.form__input_type_t1');
const t2 = formAddCard.querySelector('.form__input_type_t2');

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

function createCard(item) {
  let obj = calcCirc(item);
  const template = '#card-template';
  const card = new CardCircflow(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();

  return cardElement;
}

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();