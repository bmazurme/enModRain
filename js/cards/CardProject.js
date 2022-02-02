import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardProject extends Card {
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
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
    //console.log(handleCardClick._validator);
  }

  _editCard(evt) {
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
    this._fieldAddress.value = this._item.address;
    this._editCardClick.open(this._cardElement);
  }

  setEventListeners() {
    const deleteButton = this._cardElement.querySelector('.button_remove');
    const editButton = this._cardElement.querySelector('.button_edit');
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
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