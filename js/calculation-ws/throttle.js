import { calcThrottle } from "../calc/calcThrottle.js";
import { CardThrottle } from "../cards/CardThrottle.js";
import { initThtrottle } from "../data/initThtrotle.js";
import { Section } from "../cards/Section.js";
import { PopupWithForm } from "../cards/PopupWithForm.js";
import { PopupWithEditForm } from "../cards/PopupWithEditForm.js";
import { FormValidator } from '../FormValidatorNew.js';
import { configNew as config } from "../config.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');
const editForm = document.querySelector('.form_type_edit');

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, q, hdr} = val;
  const result = calcThrottle({name, q: q.value, hdr: hdr.value});
  const obj = {name: name.value, q: result.q, hdr: result.hdr, d: result.d};
  const card = new CardThrottle({item: obj, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q, hdr} = val;
  const result = calcThrottle({name, q: q.value, hdr: hdr.value});
  const obj = {name: name.value, q: result.q, hdr: result.hdr, d: result.d};
  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.q = obj.q;
  current.item.hdr = obj.hdr;
  current.item.d = obj.d;
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
  items: initThtrottle,
  renderer: (item) => {
    const result = calcThrottle({name: item.name, q: item.q, hdr: item.hdr});
    const obj = {name: result.name, q: result.q, hdr: result.hdr, d: result.d};
      const card = new CardThrottle({item: obj, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);