import { FormValidator } from "../FormValidator.js";
import { config } from "../config.js";
import { getAlpha } from "../calc/calcGetAlpha.js";
import { CardAlpha } from "../cards/CardAlpha.js";
import { initAlpha } from "../data/initAlpha.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardsContainer = document.querySelector('.elements');
const np = formAddCard.querySelector('.form__input_type_np');
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
    np: np.value
  };
  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

function createCard(item) {
  let obj = getAlpha(item);
  const template = '#card-template';
  const card = new CardAlpha(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();
  return cardElement;
}

initAlpha.forEach(item => {
 const element = createCard(item);
 cardsContainer.prepend(element);
});