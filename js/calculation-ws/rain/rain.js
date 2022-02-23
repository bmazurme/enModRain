import { calcRain } from './calcRain.js';
import { CardRain } from './CardRain.js';
import { initRain as items} from '../../data/initRain.js';
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { PopupWithConfirm } from "../../components/PopupWithConfirm.js";
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
  cardList.addItem(item);
  addCardPopupWithForm.close();
}

const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q20, n, slope, roof, facade, q, q5, sumArea} = calcRain(val);
  current.currentCard.querySelector(settings.elementName).textContent = name;
  current.item.name = name;
  current.item.q20 = q20;
  current.item.n = n;
  current.item.slope = slope;
  current.item.roof = roof;
  current.item.facade = facade;
  current.item.q = q;
  current.item.q5 = q5;
  current.item.sumArea = sumArea;
  current.refresh();
  handleCardClick.close();
}

const addCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: settings.popupAdd});
const imgCardPopup = new Popup(settings.popupImg);
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

function openImgCardPopup() {
  imgCardPopup.open();
}

const cardList = new Section({
    items,
    renderer
  },
  settings.cardListSelector
);
cardList.render();
addButton.addEventListener('click', openAddCardPopup);
mapButton.addEventListener('click', openImgCardPopup);

footerStamp();

function renderer(data) {
  const item = calcRain(data);
  const card = new CardRain({
    item,
    cardTemplate: settings.cardTemplate,
    handleCardClick,
    handleCardDelete: popupWithConfirm
  });
  return card.createCard();
}