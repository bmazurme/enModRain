import { calcRain } from '../calc/calcRain.js';
import { CardRain } from './CardRain.js';
import { initRain } from '../../data/initRain.js';
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { config } from "../../config/config.js";
import { Popup } from '../../components/Popup.js';
import { settings } from "../../config/settings.js";

const addButton = document.querySelector(config.addButton);
const mapButton = document.querySelector(config.mapButton);
const addForm = document.querySelector(settings.addForm);
const editForm = document.querySelector(settings.editForm);

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, q20, n, slope, roof, facade} = val;
  const result = calcRain({
    name: name.value, q20: q20.value,
    n: n.value, slope: slope.value,
    roof: roof.value, facade: facade.value
  });
  
  const card = new CardRain({item: result, cardTemplate: settings.cardTemplate,
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q20, n, slope, roof, facade} = val;
  const result = calcRain({
    name: name.value, q20: q20.value,
    n: n.value, slope: slope.value,
    roof: roof.value, facade: facade.value
  });

  current.currentCard.querySelector(settings.elementName).textContent = name.value;
  current.item.name = name.value;
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

const editCardPopupWithForm = new PopupWithEditForm({
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

const handleCardClick = editCardPopupWithForm;
const cardListSelector = settings.elements;
const defaultCardList = new Section({
  items: initRain,
  renderer: (item) => {
      const result = calcRain({
        name: item.name, q20: item.q20, n: item.n,
        slope: item.slope, roof: item.roof, facade: item.facade
      });

      const card = new CardRain({item: result, cardTemplate: settings.cardTemplate,
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);
mapButton.addEventListener('click', openImgCardPopup);