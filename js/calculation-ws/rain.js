import { calcRain } from '../calc/calcRain.js';
import { CardRain } from '../cards/CardRain.js';
import { initRain } from '../data/initRain.js';
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
  const {name, q20, n, slope, roof, facade} = val;
  const result = calcRain({
    name: name.value,
    q20: q20.value,
    n: n.value,
    slope: slope.value,
    roof: roof.value,
    facade: facade.value
  });
  
  const obj = {
    name: name.value,
    q20: result.q20,
    n: result.n,
    slope: result.slope,
    roof: result.roof,
    facade: result.facade,
    q: result.q,
    q5: result.q5,
    sumArea: result.sumArea
  };
  console.log(obj);
  const card = new CardRain({item: obj, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});
  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, q20, n, slope, roof, facade} = val;
  const result = calcRain({
    name: name.value,
    q20: q20.value,
    n: n.value,
    slope: slope.value,
    roof: roof.value,
    facade: facade.value
  });
  
  const obj = {
    name: name.value,
    q20: result.q20,
    n: result.n,
    slope: result.slope,
    roof: result.roof,
    facade: result.facade,
    q: result.q,
    q5: result.q5,
    sumArea: result.sumArea
  };

  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.q20 = obj.q20;
  current.item.n = obj.n;
  current.item.slope = obj.slope;
  current.item.roof = obj.roof;
  current.item.facade = obj.facade;
  current.item.q = obj.q;
  current.item.q5 = obj.q5;
  current.item.sumArea = obj.sumArea;

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
  items: initRain,
  renderer: (item) => {
      const result = calcRain({
        name: item.name,
        q20: item.q20,
        n: item.n,
        slope: item.slope,
        roof: item.roof,
        facade: item.facade
      });

      const obj = {
        name: result.name,
        q20: result.q20,
        n: result.n,
        slope: result.slope,
        roof: result.roof,
        facade: result.facade,
        q: result.q,
        q5: result.q5,
        sumArea: result.sumArea
      };

      const card = new CardRain({item: obj, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);