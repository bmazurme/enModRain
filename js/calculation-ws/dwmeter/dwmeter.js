import { calcDwmeter } from "../calc/calcDwmeter.js";
import { CardDwmeter } from "./CardDwmeter.js";
import { initDwmeter } from "../../data/initDwmeter.js";
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
  const {name, q, s} = val;
  const result = calcDwmeter({name: name.value, q: q.value, s: s.value});
  const card = new CardDwmeter({item: result, cardTemplate: settings.cardTemplate,
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q, s} = val;
  const result = calcDwmeter({name: name.value, q: q.value, s: s.value});
  current.currentCard.querySelector(settings.elementName).textContent = name.value;
  current.item.name = name.value;
  current.item.q = result.q;
  current.item.s = result.s;
  current.item.h = result.h;
  current.refresh();
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_add'});
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const editCardPopupWithForm = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: '.popup_type_edit'
});

function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const handleCardClick = editCardPopupWithForm;
const cardListSelector = settings.elements;
const defaultCardList = new Section({
  items: initDwmeter,
  renderer: (item) => {
      const result = calcDwmeter({name: item.name, q: item.q, s: item.s});
      const card = new CardDwmeter({item: result, cardTemplate: settings.cardTemplate,
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);