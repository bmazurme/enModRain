import { calcDwmeter } from "./calcDwmeter.js";
import { CardDwmeter } from "./CardDwmeter.js";
import { initDwmeter as items } from "../../data/initDwmeter.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { config } from "../../config/config.js";
import { settings } from "../../config/settings.js";
import { footerStamp } from "../../index.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const result = calcDwmeter(val);
  cardList.addItem(result);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const { name, q, s, h } = calcDwmeter( val );
  current.currentCard.querySelector(settings.elementName).textContent = name;
  current.item.name = name;
  current.item.q = q;
  current.item.s = s;
  current.item.h = h;
  current.refresh();
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: settings.popupAdd});
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const handleCardClick = new PopupWithEditForm({
  submit: editCard,
  validator: editCardFormValidator,
  popupSelector: settings.popupEdit
});

function openAddCardPopup() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

const cardList = new Section({
    items,
    renderer
  },
  settings.cardListSelector
);

cardList.render();
addButton.addEventListener('click', openAddCardPopup);

footerStamp();

function renderer(data) {
  const item = calcDwmeter(data);
  const card = new CardDwmeter({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}