import { CardProject } from "./cards/CardProject.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithEditForm } from "./components/PopupWithEditForm.js";
import { initProjects as data } from "./data/initProjects.js";
import { Section } from "./components/Section.js";
import { FormValidator } from './components/FormValidator.js';
import { config } from "./config/config.js";
import { settings } from "./config/settings.js";

const addButton = document.querySelector(config.addButton);
const editForm = document.querySelector(settings.editForm);
const addForm = document.querySelector(settings.addForm);
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const editCard = (evt, val, current) => {
  evt.preventDefault();
  current.currentCard.querySelector('.project__name').textContent = val.name.value;
  current.currentCard.querySelector('.project__address').textContent = val.address.value;
  current.item.name = val.name.value;
  current.item.address = val.address.value;
};

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, address} = val;
  const obj = {name: name.value, address: address.value};
  const card = new CardProject({item: obj, cardTemplate: '#card-template', handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_add'});
function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const editCardPopupWithForm = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: '.popup_type_edit'
});
const handleCardClick = editCardPopupWithForm;
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