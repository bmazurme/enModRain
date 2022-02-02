import { settings } from '../config.js';
import { Popup } from './Popup.js';
import { Modal } from './Modal.js';
import { PopupWithForm } from './PopupWithForm.js';

export class CardProject extends Popup {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._element = settings.element;
    this._cardAddress = settings.cardAddress;
    this._projectName = settings.projectName;
    this._editForm = document.querySelector('.form_type_edit');
    this._fieldName = this._editForm.querySelector('.inbox__input_name');
    this._fieldAddress = this._editForm.querySelector('.inbox__input_address');
  }

  _deleteCard(evn) {
    new Modal({deleteCard: () => { this._cardElement.remove(); this._cardElement = null;}}).open();
  }

  _editCard(evt) {
    const currentCard = evt.target.closest(this._element);

    const saveCard = (evt, val) => {
      evt.preventDefault();
      currentCard.querySelector('.project__name').textContent = val.name.value;
      currentCard.querySelector('.project__address').textContent = val.address.value;
    };

    const editCardPopupWithForm = new PopupWithForm({submit: saveCard, popupSelector: '.popup_type_edit'});
    //console.log();
    this._fieldName.value = this._item.name;
    this._fieldAddress.value = this._item.address;
    editCardPopupWithForm.open();
  }

  setEventListeners() {
    const deleteButton = this._cardElement.querySelector('.button_remove');
    const editButton = this._cardElement.querySelector('.button_edit');
    deleteButton.addEventListener("click", (evt) => this._deleteCard(evt));
    editButton.addEventListener("click", (evt) => this._editCard(evt));
  }

  createCard() {
    this._template = document.querySelector(this._cardTemplate).content;
    this._cardElement = this._template.querySelector(this._element).cloneNode(true);
    this._cardElement.querySelector(this._projectName).textContent = this._item.name;
    this._cardElement.querySelector(this._cardAddress).textContent = this._item.address;
    this.setEventListeners();
    return this._cardElement;
  }
}