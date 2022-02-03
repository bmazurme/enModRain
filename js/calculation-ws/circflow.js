import { CardCircflow } from "../cards/CardCircflow.js";
import { calcCirc } from "../calc/calcCirc.js";
import { initCircflow } from "../data/initCircflow.js";
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
  const {name, qht, t1, t2} = val;
  const result = calcCirc({name, qht: qht.value, t1: t1.value, t2: t2.value});
  const obj = {name: name.value, qht: result.qht, t1: result.t1, 
    t2: result.t2, qc: result.qc, c: result.c, p: result.p};
  const card = new CardCircflow({item: obj, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, qht, t1, t2} = val;
  const result = calcCirc({name, qht: qht.value, t1: t1.value, t2: t2.value});
  const obj = {name: name.value, qht: result.qht, t1: result.t1,
    t2: result.t2, qc: result.qc, c: result.c, p: result.p};
  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.qht = obj.qht;
  current.item.t1 = obj.t1;
  current.item.t2 = obj.t2;
  current.item.qc = obj.qc;
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
  items: initCircflow,
  renderer: (item) => {
      const result = calcCirc({name: item.name, qht: item.qht, t1: item.t1, t2: item.t2});
      const obj = {name: item.name, qht: result.qht, t1: result.t1, t2: result.t2, 
        qc: result.qc, c: result.c, p: result.p};
      const card = new CardCircflow({item: obj, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);