import { calcDwmeter } from "../calc/calcDwmeter.js";
import { CardDwmeter } from "../cards/CardDwmeter.js";
import { initDwmeter } from "../data/initDwmeter.js";
import { Section } from "../cards/Section.js";
import { PopupWithForm } from "../cards/PopupWithForm.js";
import { FormValidator } from '../FormValidatorNew.js';
import { configNew as config } from "../config.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');
const editForm = document.querySelector('.form_type_edit');

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, q, s} = val;
  const result = calcDwmeter({name, q: q.value, s: s.value});
  const obj = {name: name.value, q: result.q, s: result.s, h: result.h};
  const card = new CardDwmeter({item: obj, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_add'});
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

function openAddCardPopup() {
  addCardPopupWithForm.open();
}

const handleCardClick = null;
const cardListSelector = '.elements';
const defaultCardList = new Section({
  items: initDwmeter,
  renderer: (item) => {
    const result = calcDwmeter({name: item.name, q: item.q, s: item.s});
    const obj = {name: result.name, q: result.q, s: result.s, h: result.h};
      const card = new CardDwmeter({item: obj, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);