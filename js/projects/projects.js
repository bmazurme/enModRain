import { CardProject } from "./CardProject.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithEditForm } from "../components/PopupWithEditForm.js";
import { initProjects as items } from "../data/initProjects.js";
import { Section } from "../components/Section.js";
import { FormValidator } from '../components/FormValidator.js';
import { config } from "../config/config.js";
import { settings } from "../config/settings.js";
import { footerStamp } from "../index.js";
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const addButton = document.querySelector(config.addButton);
const editForm = document.querySelector(settings.editForm);
const addForm = document.querySelector(settings.addForm);

const formValidators = {}
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

const editCard = (evt, {name, address}, current) => {
  evt.preventDefault();
  current.currentCard.querySelector('.project__name').textContent = name;
  current.currentCard.querySelector('.project__address').textContent = address;
  current.item.name = name;
  current.item.address = address;
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

const cardList = new Section({ items, renderer },
  settings.cardListSelector
);

cardList.render();
addButton.addEventListener('click', openAddCardPopup);
footerStamp();

function renderer(item) {
  const card = new CardProject({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick,
    handleCardDelete: popupWithConfirm
  });
  return card.createCard();
}