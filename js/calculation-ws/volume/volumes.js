import { config } from '../../config/config.js';
import { CardVolume } from './CardVolume.js';
import { FormValidator } from '../../components/FormValidator.js';
import { initCustomers } from '../../data/initCustomers.js';

const addButton = document.querySelector('.button_add');
const popups = document.querySelectorAll('.popup');
const popupTypeAdd = document.querySelector('.popup_type_add');
const cardsContainer = document.querySelector('.table__rows');
const formAddCard = document.querySelector('.form_type_add');
const customers = formAddCard.querySelector('.form__select_type_customers');
const hours = formAddCard.querySelector('.form__input_type_hours');
const pcs = formAddCard.querySelector('.form__input_type_pcs');

const el1 = document.querySelector('.formula1');
katex.render(String.raw`q^{tot}_{m,u}`, el1, {throwOnError: false});
const el2 = document.querySelector('.formula2');
katex.render(String.raw`q^{h}_{m,u}`, el2, {throwOnError: false});

const el3 = document.querySelector('.formula3');
katex.render(String.raw`U`, el3, {throwOnError: false});
const el4 = document.querySelector('.formula4');
katex.render(String.raw`T`, el4, {throwOnError: false});

let count = 1;

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
  
  const newCard = initCustomers[customers.selectedIndex];
  newCard['number'] = count;
  newCard['hours'] = hours.value;
  newCard['pcs'] = pcs.value;
  count++;


  const element = createCard(newCard);
  cardsContainer.append(element);
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

initCustomers.forEach(item => {
  const opt = document.createElement('option');
  opt.value = item.id;
  opt.innerHTML = item.customer;
  customers.appendChild(opt);
});