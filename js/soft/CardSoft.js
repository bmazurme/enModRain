import { settings } from '../config/settings.js';
import { Card } from '../components/Card.js';

export class CardSoft extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._element = settings.element;
    this._cardDescription = settings.elementDescription;
    this._cardLink = settings.elementLink;
    this._elementName = settings.elementName;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._fieldDescription = this._editForm.querySelector(settings.inputDescription);
    this._fieldLink = this._editForm.querySelector(settings.inputLink);
    this._removeButton = settings.removeButton;
    this._editButton = settings.editButton;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    super._editCard(evt);
    this._fieldDescription.value = this._item.description;
    this._fieldLink.value = this._item.link;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item});
  }

  setEventListeners() {
    this._cardElement.querySelector(this._removeButton).addEventListener("click", () => this._deleteCard());
    this._cardElement.querySelector(this._editButton).addEventListener("click", (evt) => this._editCard(evt));
  }

  createCard() {
    super.createCard();
    this._cardElement.querySelector(this._cardDescription).textContent = this._item.description;
    this._cardElement.querySelector(this._cardLink).href = this._item.link;
    return this._cardElement;
  }
}