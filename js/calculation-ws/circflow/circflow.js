import { CardCircflow } from "./CardCircflow.js";
import { calcCirc } from "../calc/calcCirc.js";
import { initCircflow as items } from "../../data/initCircflow.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { config } from "../../config/config.js";
import { settings } from "../../config/settings.js";
import { footerStamp } from "../../index.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const item = calcCirc(val);
  cardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const result = calcCirc(val);
  current.currentCard.querySelector(settings.elementName).textContent = val.name;
  current.item.name = val.name;
  current.item.qht = result.qht;
  current.item.t1 = result.t1;
  current.item.t2 = result.t2;
  current.item.qc = result.qc;
  current.refresh();
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: settings.popupAdd});
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const editCardPopupWithForm = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: settings.popupEdit
});

function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const handleCardClick = editCardPopupWithForm;
const cardListSelector = settings.elements;
const cardList = new Section({
    items,
    renderer
  },
  cardListSelector
);
cardList.render();
addButton.addEventListener('click', openAddCardPopup);

footerStamp();

function renderer(data) {
  const item = calcCirc(data);
  const card = new CardCircflow({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}