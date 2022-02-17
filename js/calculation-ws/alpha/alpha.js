import { config } from "../../config/config.js";
import { getAlpha } from "../calc/calcGetAlpha.js";
import { CardAlpha } from "./CardAlpha.js";
import { initAlpha as items} from "../../data/initAlpha.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { settings } from "../../config/settings.js";
import { footerStamp } from "../../index.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault(); 
  const result = getAlpha(val);
  defaultCardList.addItem(result);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const result = getAlpha(val);
  current.currentCard.querySelector(settings.elementName).textContent = val.name;
  current.item.name = val.name;
  current.item.np = result.np;
  current.item.alpha = result.alpha;
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

const cardListSelector = settings.elements;
const defaultCardList = new Section({
    items,
    renderer
  },
  cardListSelector
);

defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);

footerStamp();

function renderer(data) {
  const item = getAlpha(data);
  const card = new CardAlpha({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}