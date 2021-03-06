import { calcThermo } from "../calc/calcThermo.js";
import { CardThermo } from "./CardThermo.js"; 
import { initThermo } from "../../data/initThermo.js";
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
  const {name, qht, qhhr, th, tc, qht2} = val;
  const result = calcThermo({name: name.value, qht: qht.value,
    qhhr: qhhr.value, th: th.value, tc: tc.value, qht2: qht2.value});
  const card = new CardThermo({item: result, cardTemplate: settings.cardTemplate,
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();
  const {name, qht, qhhr, th, tc, qht2} = val;
  const result = calcThermo({name: name.value, qht: qht.value,
    qhhr: qhhr.value, th: th.value, tc: tc.value, qht2: qht2.value});

  current.currentCard.querySelector(settings.elementName).textContent = name.value;
  current.item.name = name.value;
  current.item.qht = result.qht;
  current.item.qhhr = result.qhhr;
  current.item.th = result.th;
  current.item.tc = result.tc;
  current.item.qht2 = result.qht2;
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
  items: initThermo,
  renderer: (item) => {
      const result = calcThermo({
        name: item.name, qht: item.qht,
        qhhr: item.qhhr, th: item.th,
        tc: item.tc, qht2: item.qht2
      });
      const card = new CardThermo({item: result, cardTemplate: settings.cardTemplate,
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);