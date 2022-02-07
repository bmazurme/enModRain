import { calcThrottle } from "../calc/calcThrottle.js";
import { CardThrottle } from "./CardThrottle.js";
import { initThtrottle } from "../../data/initThtrotle.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { config } from "../../config/config.js";
import { settings } from "../../config/settings.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, q, hdr} = val;
  const result = calcThrottle({name: name.value, q: q.value, hdr: hdr.value});
  const card = new CardThrottle({item: result, cardTemplate: settings.cardTemplate,
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q, hdr} = val;
  const result = calcThrottle({name: name.value, q: q.value, hdr: hdr.value});
  current.currentCard.querySelector(settings.elementName).textContent = name.value;
  current.item.name = name.value;
  current.item.q = result.q;
  current.item.hdr = result.hdr;
  current.item.d = result.d;
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
const defaultCardList = new Section({
  items: initThtrottle,
  renderer: (item) => {
      const result = calcThrottle({name: item.name, q: item.q, hdr: item.hdr});
      const card = new CardThrottle({item: result, cardTemplate: settings.cardTemplate,
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);