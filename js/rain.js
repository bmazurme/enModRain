import { config } from './config.js';
import { calcRain } from './calc/calcRain.js';
import { lockButton } from './validate.js';
import { Card } from './Card.js';

const addButton = document.querySelector('.calculate__add');
const mapButton = document.querySelector('.calculate__map');
const popupTypeSlide = document.querySelector('.popup_type_slide');
const popups = document.querySelectorAll('.popup');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
//const cardTemplate = document.querySelector('#card-template').content;
//const card1Template = document.querySelector('#card1-template').content;
const cardsContainer = document.querySelector('.elements');
const saveButton= document.querySelector('.form__save');  
const n = formAddCard.querySelector('.form__input_type_n');
const q20 = formAddCard.querySelector('.form__input_type_q20');
const slope = formAddCard.querySelector('.form__input_type_slope');
const roof = formAddCard.querySelector('.form__input_type_roof');
const facade = formAddCard.querySelector('.form__input_type_facade');

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
  lockButton(saveButton, config.inactiveButtonClass);
  openPopup(popupTypeAdd); 
}

function openMapCardPopup() {
  openPopup(popupTypeSlide); 
}




function deleteCard(evn) {
  evn.target.closest('.element').remove();
}

function saveCardForm(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameFormAddCard.value,
    slope: slope.value,
    roof: roof.value,
    facade: facade.value,
    q20: q20.value,
    n: n.value
  };

  const element = generateCard(newCard);

  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

function generateCard(item) {
  let template = '#card1-template';
  if (item.slope < 1.5) {
    template = '#card-template';
  }
  const card = new Card(item, template, openPopup, closePopup);
  const cardElement = card.createCard();
  return cardElement
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
mapButton.addEventListener('click', openMapCardPopup);

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

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
  }
});