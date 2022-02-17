import { CardSoft } from "./CardSoft.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithEditForm } from "../components/PopupWithEditForm.js";
import { initSoft as items } from "../data/initSoft.js";
import { Section } from "../components/Section.js";
import { FormValidator } from '../components/FormValidator.js';
import { config } from "../config/config.js";
import { settings } from "../config/settings.js";
import { footerStamp } from "../index.js";

const addButton = document.querySelector(config.addButton);
const editForm = document.querySelector(settings.editForm);
const addForm = document.querySelector(settings.addForm);
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const editCard = (evt, val, current) => {
  evt.preventDefault();
  current.currentCard.querySelector(settings.elementName).textContent = val.name;
  current.currentCard.querySelector(settings.elementDescription).textContent = val.description;
  current.currentCard.querySelector(settings.elementLink).href = val.link;
  current.currentCard.querySelector(settings.elementImage).src = val.image;
  current.item.name = val.name;
  current.item.description = val.description;
  current.item.link = val.link;
  current.item.image = val.link.image;
};

const saveCard = (evt, item) => {
  evt.preventDefault();  
  defaultCardList.addItem(item);
}

const addCardPopupWithForm = new PopupWithForm({
  submit: saveCard,
  popupSelector: settings.popupAdd
});

function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const handleCardClick = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: settings.popupEdit
});

const cardListSelector = settings.elements;
const defaultCardList = new Section({ items, renderer }, cardListSelector );

defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);

footerStamp();

function renderer(item) {
  const card = new CardSoft({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}