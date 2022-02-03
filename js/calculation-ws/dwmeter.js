import { calcDwmeter } from "../calc/calcDwmeter.js";
import { CardDwmeter } from "../cards/CardDwmeter.js";
import { initDwmeter } from "../data/initDwmeter.js";
import { Section } from "../cards/Section.js";
import { PopupWithForm } from "../cards/PopupWithForm.js";
import { PopupWithEditForm } from "../cards/PopupWithEditForm.js";
import { FormValidator } from '../components/FormValidator.js';
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
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q, s} = val;
  const result = calcDwmeter({name, q: q.value, s: s.value});
  const obj = {name: name.value, q: result.q, s: result.s, h: result.h};
  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.q = obj.q;
  current.item.s = obj.s;
  current.item.h = obj.h;
  current.refresh();
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_add'});
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const editCardPopupWithForm = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: '.popup_type_edit'
});

function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const handleCardClick = editCardPopupWithForm;
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