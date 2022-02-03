import { settings } from '../config/settings.js';
import { Card } from './Card.js';

export class CardAlpha extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldNp = this._editForm.querySelector(settings.inputNp);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _refresh = () => {
    katex.render(String.raw`NP = ${this._item.np}`, this._el1, {throwOnError: false});
    katex.render(String.raw`\alpha = ${this._item.alpha}`, this._el2, {throwOnError: false});
  }

  _editCard(evt) {
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
    this._fieldNp.value = this._item.np;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  setEventListeners() {
    const removeButton = this._cardElement.querySelector(this._removeButton);
    const editButton = this._cardElement.querySelector(this._editButton);
    const printButton = this._cardElement.querySelector(this._printButton);
    removeButton.addEventListener("click", (evt) => super._deleteCard(evt));
    editButton.addEventListener("click", (evt) => this._editCard(evt));
    printButton.addEventListener("click", (evt) => super._printCard(evt));
  }

  createCard() {
    this._template = document.querySelector(this._cardTemplate).content;
    this._cardElement = this._template.querySelector(this._element).cloneNode(true);
    this._cardElement.querySelector(this._elementName).textContent = this._item.name;
    this._el1 = this._cardElement.querySelector('.formula1');
    this._el2 = this._cardElement.querySelector('.formula2');
    this._refresh();
    
    this.setEventListeners();
    return this._cardElement;
  }
}