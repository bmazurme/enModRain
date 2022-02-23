import { calcThermo } from "./calcThermo.js";
import { CardThermo } from "./CardThermo.js"; 
import { initThermo as items} from "../../data/initThermo.js";
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
  const item = calcThermo(val);
  cardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();
  const result = calcThermo(val);
  current.currentCard.querySelector(settings.elementName).textContent = val.name;
  current.item.name = val.name;
  current.item.qht = result.qht;
  current.item.qhhr = result.qhhr;
  current.item.th = result.th;
  current.item.tc = result.tc;
  current.item.qht2 = result.qht2;
  current.item.qmid = result.qmid;
  current.item.qmax = result.qmax;
  current.item.qmidg = result.qmidg;
  current.item.qmaxg = result.qmaxg;
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

const cardList = new Section({ items, renderer }, settings.cardListSelector );
cardList.render();
addButton.addEventListener('click', openAddCardPopup);

footerStamp();

function renderer(data) {
  const item = calcThermo(data);
  const card = new CardThermo({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}