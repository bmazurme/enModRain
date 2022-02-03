import { CardProject } from "./cards/CardProject.js";
import { PopupWithForm } from "./cards/PopupWithForm.js";
import { PopupWithEditForm } from "./cards/PopupWithEditForm.js";
import { initProjects as data } from "./data/initProjects.js";
import { Section } from "./cards/Section.js";
import { FormValidator } from './components/FormValidator.js';
import { configNew as config } from "./config.js";

const addForm = document.querySelector('.form_type_add');
const addCardFormValidator = new FormValidator(config, addForm);
addCardFormValidator.enableValidation();

const addButton = document.querySelector(config.addButton);

const editCard = (evt, val, currentCard) => {
  evt.preventDefault();
  currentCard.querySelector('.project__name').textContent = val.name.value;
  currentCard.querySelector('.project__address').textContent = val.address.value;
};

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, address} = val;
  const obj = {name: name.value, address: address.value};
  const card = new CardProject({item: obj, cardTemplate: '#card-template', handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const editForm = document.querySelector('.form_type_edit');
const editCardFormValidator = new FormValidator(config, editForm);
editCardFormValidator.enableValidation();

const editCardPopupWithForm = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: '.popup_type_edit'
});

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_add'});

function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

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