import { calcThermo } from "../calc/calcThermo.js";
import { CardThermo } from "../cards/CardThermo.js"; 
import { initThermo } from "../data/initThermo.js";
import { Section } from "../cards/Section.js";
import { PopupWithForm } from "../cards/PopupWithForm.js";
import { PopupWithEditForm } from "../cards/PopupWithEditForm.js";
import { FormValidator } from '../components/FormValidator.js';
import { configNew as config } from "../config.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');
const editForm = document.querySelector('.form_type_edit');

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, qht, qhhr, th, tc, qht2} = val;
  const result = calcThermo({name, qht: qht.value, qhhr: qhhr.value, th: th.value, tc: tc.value, qht2: qht2.value});
  const obj = {name: result.name,
      qht: result.qht, qhhr: result.qhhr, th: result.th, tc: tc.value, qht2: qht2.value,
      mid: result.qht, qmax: result.qhhr, qmidg: result.qmidg, qmaxg: result.qmaxg
    };
  const card = new CardThermo({item: obj, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();
  const {name, qht, qhhr, th, tc, qht2} = val;
  const result = calcThermo({name, qht: qht.value, qhhr: qhhr.value, th: th.value, tc: tc.value, qht2: qht2.value});
  const obj = {name: result.name,
    qht: result.qht, qhhr: result.qhhr, th: result.th, tc: tc.value, qht2: qht2.value,
    mid: result.qht, qmax: result.qhhr, qmidg: result.qmidg, qmaxg: result.qmaxg
  };
  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.qht = obj.qht;
  current.item.qhhr = obj.qhhr;
  current.item.th = obj.th;
  current.item.tc = obj.tc;
  current.item.qht2 = obj.qht2;

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
  items: initThermo,
  renderer: (item) => {
    const result = calcThermo({
      name: item.name,
      qht: item.qht,
      qhhr: item.qhhr,
      th: item.th,
      tc: item.tc,
      qht2: item.qht2
    });
    const obj = {
      name: item.name, 
      qht: result.qht,
      qhhr: result.qhhr,
      th: result.th,
      tc: result.tc,
      qht2: result.qht2,
      qmid: result.qht,
      qmax: result.qhhr,
      qmidg: result.qmidg,
      qmaxg: result.qmaxg
    };
      const card = new CardThermo({item: obj, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);