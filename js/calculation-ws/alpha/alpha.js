import { config } from "../../config/config.js";
import { getAlpha } from "./calcGetAlpha.js";
import { CardAlpha } from "./CardAlpha.js";
import { initAlpha as items} from "../../data/initAlpha.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { PopupWithConfirm } from "../../components/PopupWithConfirm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { settings } from "../../config/settings.js";
import { footerStamp } from "../../index.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault(); 
  const result = getAlpha(val);
  cardList.addItem(result);
  addCardPopupWithForm.close();
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, np, alpha} = getAlpha(val);
  current.currentCard.querySelector(settings.elementName).textContent = name;
  current.item.name = name;
  current.item.np = np;
  current.item.alpha = alpha;
  current.refresh();
  handleCardClick.close();
}

const addCardPopupWithForm = new PopupWithForm({ submit: saveCard, popupSelector: settings.popupAdd });
const addCardFormValidator = new FormValidator(config, addForm);
const editCardFormValidator = new FormValidator(config, editForm);
addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

const deleteCardCallback = (evt, card) => {
  evt.preventDefault();
  card.removeItem();
  popupWithConfirm.close();
};
const popupWithConfirm = new PopupWithConfirm({
  submit: deleteCardCallback,
  popupSelector: '.popup_type_modal'
});

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
  const item = getAlpha(data);
  const card = new CardAlpha({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick,
    handleCardDelete: popupWithConfirm
  });
  return card.createCard();
}