import { settings } from '../config/settings.js';
import { Card } from './Card.js';

export class CardProject extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._element = settings.element;
    this._cardAddress = settings.cardAddress;
    this._projectName = settings.projectName;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._fieldAddress = this._editForm.querySelector(settings.inputAddress);
    this._removeButton = settings.removeButton;
    this._editButton = settings.editButton;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
    this._fieldAddress.value = this._item.address;
    this._editCardClick.open(this._cardElement);
  }

  setEventListeners() {
    const removeButton = this._cardElement.querySelector(this._removeButton); 
    const editButton = this._cardElement.querySelector(this._editButton);
    removeButton.addEventListener("click", (evt) => super._deleteCard(evt));
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