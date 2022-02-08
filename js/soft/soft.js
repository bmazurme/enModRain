import { CardSoft } from "./CardSoft.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithEditForm } from "../components/PopupWithEditForm.js";
import { initSoft as data } from "../data/initSoft.js";
import { Section } from "../components/Section.js";
import { FormValidator } from '../components/FormValidator.js';
import { config } from "../config/config.js";
import { settings } from "../config/settings.js";

const addButton = document.querySelector(config.addButton);
const editForm = document.querySelector(settings.editForm);
const addForm = document.querySelector(settings.addForm);
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const editCard = (evt, val, current) => {
  evt.preventDefault();
  current.currentCard.querySelector('.element__name').textContent = val.name.value;
  current.currentCard.querySelector('.element__description').textContent = val.description.value;
  current.currentCard.querySelector('.element__link').href = val.link.value;
  current.currentCard.querySelector('.element__image').src = val.image.value;
  current.item.name = val.name.value;
  current.item.description = val.description.value;
  current.item.link = val.link.value;
  current.item.image = val.link.image;
};

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, description, link, image} = val;
  const obj = {name: name.value, description: description.value, link: link.value, image: image.value};
  const card = new CardSoft({item: obj, cardTemplate: settings.cardTemplate, handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: settings.popupAdd});
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
const defaultCardList = new Section({
  items: data,
  renderer: (item) => {
      const card = new CardSoft({item: item, cardTemplate: settings.cardTemplate,
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);

defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);

const currentYear = (new Date()).getFullYear();
const field = document.querySelector(settings.footerCopyright);
field.textContent = `© ${currentYear} ${settings.creater}`;