import { settings } from '../config/settings.js';
import { Card } from '../components/Card.js';

export class CardProject extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._element = settings.element;
    this._cardAddress = settings.cardAddress;
    this._elementName = settings.projectName;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._fieldAddress = this._editForm.querySelector(settings.inputAddress);
    this._removeButton = settings.removeButton;
    this._editButton = settings.editButton;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    super._editCard(evt);
    this._fieldAddress.value = this._item.address;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item});
  }

  setEventListeners() {
    this._cardElement.querySelector(this._removeButton).addEventListener("click", () => this._deleteCard());
    this._cardElement.querySelector(this._editButton).addEventListener("click", (evt) => this._editCard(evt));
  }

  createCard() {
    super.createCard();
    this._cardElement.querySelector(this._cardAddress).textContent = this._item.address;
    return this._cardElement;
  }
}