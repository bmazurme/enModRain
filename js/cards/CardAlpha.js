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

  _editCard(evt) {
    super._editCard(evt);
    this._fieldNp.value = this._item.np;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard();
    this._arr = [
      {value: String.raw`NP = ${this._item.np}`, key: this._el1},
      {value: String.raw`\alpha = ${this._item.alpha}`, key: this._el2}
    ];
    
    this._refresh();
    return this._cardElement;
  }
}