import { calcDthermo } from "../calc/calcDthermo.js";
import { CardDthermo } from "../cards/CardDthermo.js";
import { initDthermo } from "../data/initDthermo.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithEditForm } from "../components/PopupWithEditForm.js";
import { FormValidator } from '../components/FormValidator.js';
import { config } from "../config/config.js";

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');
const editForm = document.querySelector('.form_type_edit');

const saveCard = (evt, val) => {
  evt.preventDefault();  
  const {name, t1, l, q, th, tb, v, dtr, dsl, diamsln, alphanp2, alphasl, alphasl2} = val;
  const result = calcDthermo({
    name: name.value, t1: t1.value,
    l: l.value, q: q.value,
    th: th.value, tb: tb.value,
    v: v.value, dtr: dtr.value,
    dsl: dsl.value,
    diamsln: diamsln.value,
    alphanp2: alphanp2.value,
    alphasl: alphasl.value,
    alphasl2: alphasl2.value,
    v: v.value
  });

  const card = new CardDthermo({item: result, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}

const editCard = (evt, val, current) => {
  evt.preventDefault();
  const {name, t1, l, q, th, tb, v, dtr, dsl, diamsln, alphanp2, alphasl, alphasl2} = val;
  const result = calcDthermo({
    name: name.value, t1: t1.value,
    l: l.value, q: q.value,
    th: th.value, tb: tb.value,
    v: v.value, dtr: dtr.value,
    dsl: dsl.value,
    diamsln: diamsln.value,
    alphanp2: alphanp2.value,
    alphasl: alphasl.value,
    alphasl2: alphasl2.value
  });

  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.qht = result.qht;
  current.item.qhhr = result.qhhr;
  current.item.th = result.th;
  current.item.tc = result.tc;
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
  items: initDthermo,
  renderer: (item) => {
    const result = calcDthermo({
      name: item.name, t1: item.t1,
      l: item.l, q: item.q,
      th: item.th, tb: item.tb,
      v: item.v, dtr: item.dtr,
      dsl: item.dsl, diamsln: item.diamsln,
      alphanp2: item.alphanp2,
      alphasl: item.alphasl,
      alphasl2: item.alphasl2
    });

      const card = new CardDthermo({item: result, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);