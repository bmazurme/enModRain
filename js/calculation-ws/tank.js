import { calcTank } from "../calc/calcTank.js";
import { FormValidator } from "../FormValidator.js";
import { config } from "../config.js";
import { initTank } from "../data/initTank.js";
import { CardTank } from "../cards/CardTank.js";

const addButton = document.querySelector(config.addButton);
const formAddCard = document.querySelector('.form_type_add');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardsContainer = document.querySelector('.elements');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const th = formAddCard.querySelector('.form__input_type_th');
const tc = formAddCard.querySelector('.form__input_type_tc');
const qmid = formAddCard.querySelector('.form__input_type_qmid');
const qmax = formAddCard.querySelector('.form__input_type_qmax');
const qsp = formAddCard.querySelector('.form__input_type_qsp');
const t = formAddCard.querySelector('.form__input_type_t');
const b = formAddCard.querySelector('.form__select_type_b');
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
    th: th.value,
    tc: tc.value,
    qmid: qmid.value,
    qmax: qmax.value,
    t: t.value,
    qsp: qsp.value,
    b: b.options[b.selectedIndex].value    
  };
  
  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

initTank.forEach(item => {
  const element = createCard(item);
  cardsContainer.prepend(element);
});

function createCard(item) {
  const obj = calcTank(item);
  const template = '#card-template';
  const card = new CardTank(obj, template, openPopup, closePopup);
  const cardElement = card.createCard();

  return cardElement;
}