import { CardProject } from "./cards/CardProject.js";
import { PopupWithForm } from "./cards/PopupWithForm.js";
import { initProjects as data } from "./data/initProjects.js";
import { Section } from "./cards/Section.js";
import { FormValidator } from './FormValidatorNew.js';
import { configNew as config } from "./config.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, address} = val;
  const obj = {name: name.value, address: address.value};
  const card = new CardProject({item: obj, cardTemplate: '#card-template', handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_add'});
const cardFormValidator = new FormValidator(config, addForm);

cardFormValidator.enableValidation();

function openAddCardPopup() {
  addCardPopupWithForm.open();
}

const handleCardClick = null;
const cardListSelector = '.elements';
const defaultCardList = new Section({
  items: data,
  renderer: (item) => {
      const card = new CardProject({item: item, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);

defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);