import { CardProject } from "./CardProject.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithEditForm } from "../components/PopupWithEditForm.js";
import { initProjects as data } from "../data/initProjects.js";
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
  current.currentCard.querySelector('.project__name').textContent = val.name;
  current.currentCard.querySelector('.project__address').textContent = val.address;
  current.item.name = val.name.value;
  current.item.address = val.address.value;
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
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const editCardPopupWithForm = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: settings.popupEdit
});

const handleCardClick = editCardPopupWithForm;
const cardListSelector = settings.elements;
const cardList = new Section({
    items: data,
    renderer: renderer
  },
  cardListSelector
);

cardList.render();
addButton.addEventListener('click', openAddCardPopup);
footerStamp();

function renderer(item) {
  const card = new CardProject({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}