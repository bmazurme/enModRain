import { calcTank } from "../calc/calcTank.js";
import { CardTank } from "../cards/CardTank.js";
import { initTank } from "../data/initTank.js";
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
  const {name, th, tc, qmid, qmax, qsp, t, b} = val;
  const result = calcTank({
    name,
    th: th.value, tc: tc.value, qmid: qmid.value, qmax: qmax.value,
    qsp: qsp.value, t: t.value, b: b.value
  });

  const obj = {
    name: name.value,
    th: result.th,
    tc: result.tc,
    qmid: result.qmid,
    qmax: result.qmax,
    qsp: result.qsp,
    t: result.t,
    b: result.b,
    fi: result.fi,
    fi2: result.fi2,
    v1: result.v1,
    v2: result.v2,
    w: result.w,
    w2: result.w2,
    k_hr_ht: result.k_hr_ht,
    k_hr_ht_sp: result.k_hr_ht_sp
  };

console.log(obj);

  const card = new CardTank({item: obj, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, th, tc, qmid, qmax, qsp, t, b} = val;
  const result = calcTank({
    name,
    th: th.value,
    tc: tc.value,
    qmid: qmid.value,
    qmax: qmax.value,
    qsp: qsp.value,
    t: t.value,
    b: b.value
  });

  const obj = {
    name: name.value,
    th: result.th,
    tc: result.tc,
    qmid: result.qmid,
    qmax: result.qmax,
    qsp: result.qsp,
    t: result.t,
    b: result.b,
    fi: result.fi,
    fi2: result.fi2,
    v1: result.v1,
    v2: result.v2,
    w: result.w,
    w2: result.w2,
    k_hr_ht: result.k_hr_ht,
    k_hr_ht_sp: result.k_hr_ht_sp
  };
  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.q = obj.q;
  current.item.hdr = obj.hdr;
  current.item.d = obj.d;
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
    const obj = {
      name: result.name,
      th: result.th,
      tc: result.tc,
      qmid: result.qmid,
      qmax: result.qmax,
      qsp: result.qsp,
      t: result.t,
      b: result.b,
      fi: result.fi,
      fi2: result.fi2,
      v1: result.v1,
      v2: result.v2,
      w: result.w,
      w2: result.w2,
      k_hr_ht: result.k_hr_ht,
      k_hr_ht_sp: result.k_hr_ht_sp
    };
      const card = new CardTank({item: obj, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);