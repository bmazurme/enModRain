import { calcTank } from "../calc/calcTank.js";
import { CardTank } from "./CardTank.js";
import { initTank } from "../../data/initTank.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';
import { config } from "../../config/config.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');
const editForm = document.querySelector('.form_type_edit');

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, th, tc, qmid, qmax, qsp, t, b} = val;
  const result = calcTank({
    name: name.value,
    th: th.value, tc: tc.value, qmid: qmid.value, qmax: qmax.value,
    qsp: qsp.value, t: t.value, b: b.value
  });

  const card = new CardTank({item: result, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, th, tc, qmid, qmax, qsp, t, b} = val;
  const result = calcTank({
    name: name.value,
    th: th.value,
    tc: tc.value,
    qmid: qmid.value,
    qmax: qmax.value,
    qsp: qsp.value,
    t: t.value,
    b: b.value
  });

  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.q = result.q;
  current.item.hdr = result.hdr;
  current.item.d = result.d;
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
const cardListSelector = '.elements';
const defaultCardList = new Section({
  items: initTank,
  renderer: (item) => {
    const result = calcTank({name: item.name,
      th: item.th, tc: item.tc, qmid: item.qmid, qmax: item.qmax,
      qsp: item.qsp, t: item.t, b: item.b});
    
      const card = new CardTank({item: result, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);