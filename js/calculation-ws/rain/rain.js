import { calcRain } from '../calc/calcRain.js';
import { CardRain } from './CardRain.js';
import { initRain as items} from '../../data/initRain.js';
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { config } from "../../config/config.js";
import { Popup } from '../../components/Popup.js';
import { settings } from "../../config/settings.js";
import { footerStamp } from '../../index.js';

const addButton = document.querySelector(config.addButton);
const mapButton = document.querySelector(config.mapButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const item = calcRain(val);
  defaultCardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const result = calcRain(val);
  current.currentCard.querySelector(settings.elementName).textContent = val.name;
  current.item.name = val.name;
  current.item.q20 = result.q20;
  current.item.n = result.n;
  current.item.slope = result.slope;
  current.item.roof = result.roof;
  current.item.facade = result.facade;
  current.item.q = result.q;
  current.item.q5 = result.q5;
  current.item.sumArea = result.sumArea;
  current.refresh();
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: settings.popupAdd});
const imgCardPopup = new Popup(settings.popupImg);
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

function openImgCardPopup() {
  imgCardPopup.open();
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
mapButton.addEventListener('click', openImgCardPopup);

footerStamp();

function renderer(data) {
  const item = calcRain(data);
  const card = new CardRain({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick
  });
  return card.createCard();
}