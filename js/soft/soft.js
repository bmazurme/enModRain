import { CardSoft } from "./CardSoft.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithEditForm } from "../components/PopupWithEditForm.js";
import { initSoft as items } from "../data/initSoft.js";
import { Section } from "../components/Section.js";
import { FormValidator } from '../components/FormValidator.js';
import { config } from "../config/config.js";
import { settings } from "../config/settings.js";
import { footerStamp } from "../index.js";
import { PopupWithConfirm } from "../components/PopupWithConfirm.js";

const addButton = document.querySelector(config.addButton);
const editForm = document.querySelector(settings.editForm);
const addForm = document.querySelector(settings.addForm);

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
      formValidators[formName] = validator;
   validator.enableValidation();
  });
};
enableValidation(config);

const editCard = (evt, {name, description, link, image}, current) => {
  evt.preventDefault();
  current.currentCard.querySelector(settings.elementName).textContent = name;
  current.currentCard.querySelector(settings.elementDescription).textContent = description;
  current.currentCard.querySelector(settings.elementLink).href = link;
  current.currentCard.querySelector(settings.elementImage).src = image;
  current.item.name = name;
  current.item.description = description;
  current.item.link = link;
  current.item.image = image;
};

const saveCard = (evt, item) => {
  evt.preventDefault();  
  cardList.addItem(item);
}

const addCardPopupWithForm = new PopupWithForm({
  submit: saveCard,
  popupSelector: settings.popupAdd
});

function openAddCardPopup() {
  formValidators[ addForm.getAttribute('name') ].resetValidation();
  addCardPopupWithForm.open();
}

const handleCardClick = new PopupWithEditForm({
  submit: editCard,
  validator: formValidators[ editForm.getAttribute('name') ],
  popupSelector: settings.popupEdit
});

const deleteCardCallback = (evt, card) => {
  evt.preventDefault();
  card.removeItem();
  popupWithConfirm.close();
};
const popupWithConfirm = new PopupWithConfirm({
  submit: deleteCardCallback,
  popupSelector: '.popup_type_modal'
});

const cardList = new Section({ items, renderer }, settings.cardListSelector );

cardList.render();
addButton.addEventListener('click', openAddCardPopup);

footerStamp();

function renderer(item) {
  const card = new CardSoft({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick,
    handleCardDelete: popupWithConfirm
  });
  return card.createCard();
}