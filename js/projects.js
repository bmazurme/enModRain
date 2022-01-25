import { CardProject } from "./cards/CardProject.js";
import { FormValidator } from './FormValidator.js';
import { config } from "./config.js";
import { initProjects as data } from "./data/initProjects.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const cardsContainer = document.querySelector('.elements');
const address = formAddCard.querySelector('.form__input_type_address');

const openPopup = (popup) => {
  document.addEventListener('keydown', closeByEscape);
  popup.classList.add('popup_active');
}

const closePopup = (popup) => {
  document.removeEventListener('keydown', closeByEscape);
  popup.classList.remove('popup_active');
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
    address: address.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);

const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

function createCard(item) {
  let template = '#card-template';
  const card = new CardProject(item, template, openPopup, closePopup);
  const cardElement = card.createCard();
  return cardElement;
}

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

data.forEach(item => {
  const element = createCard(item);
  cardsContainer.prepend(element);
});