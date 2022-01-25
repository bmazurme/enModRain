import { config } from './config.js';
import { CardVolume } from './cards/CardVolume.js';
import { FormValidator } from './FormValidator.js';
import { initThtrottle } from './data/initThtrotle.js';

const addButton = document.querySelector('.calculate__add');
const popups = document.querySelectorAll('.popup');
const popupTypeAdd = document.querySelector('.popup_type_add');
const cardsContainer = document.querySelector('.elements');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');

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
    name: nameFormAddCard.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

function createCard(item) {
  const template = '#card-template';
  const card = new CardVolume(item, template, openPopup, closePopup);
  const cardElement = card.createCard();
  return cardElement
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_active')) {
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
  })
});

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

initThtrottle.forEach(item => {
  const element = createCard(item);
  cardsContainer.prepend(element);
});