import { config } from "../../config/config.js";
import { getAlpha } from "../calc/calcGetAlpha.js";
import { CardAlpha } from "./CardAlpha.js";
import { initAlpha } from "../../data/initAlpha.js";
import { Section } from "../../components/Section.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithEditForm } from "../../components/PopupWithEditForm.js";
import { FormValidator } from '../../components/FormValidator.js';

const addButton = document.querySelector(config.addButton);
const addForm = document.querySelector('.form_type_add');
const editForm = document.querySelector('.form_type_edit');

const saveCard = (evt, val) => {
  evt.preventDefault(); 
  const {name, np} = val;
  const result = getAlpha({name: name.value, np: np.value});
  const card = new CardAlpha({item: result, cardTemplate: '#card-template',
    handleCardClick: handleCardClick});

  const item = card.createCard();
  defaultCardList.addItem(item);
}
const editCard = (evt, val, current) => {
  evt.preventDefault();  
  const {name, np} = val;
  const result = getAlpha({name: name.value, np: np.value});
  current.currentCard.querySelector('.element__name').textContent = name.value;
  current.item.name = name.value;
  current.item.np = result.np;
  current.item.alpha = result.alpha;
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
  items: initAlpha,
  renderer: (item) => {
      const result = getAlpha({name: item.name, np: item.np});
      const card = new CardAlpha({item: result, cardTemplate: '#card-template',
        handleCardClick: handleCardClick});
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
  cardListSelector
);
defaultCardList.render();
addButton.addEventListener('click', openAddCardPopup);