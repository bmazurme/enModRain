import { calcThrottle } from "./calcThrottle.js";
import { CardThrottle } from "./CardThrottle.js";
import { initThtrottle as items } from "../../data/initThtrotle.js";
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
  const item = calcThrottle(val);
  cardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const { name, q, hdr, d} = calcThrottle(val);
  current.currentCard.querySelector(settings.elementName).textContent = name;
  current.item.name = name;
  current.item.q = q;
  current.item.hdr = hdr;
  current.item.d = d;
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
  const item = calcThrottle(data);
  const card = new CardThrottle({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}