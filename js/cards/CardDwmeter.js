import { settings } from '../config/settings.js';
import { Card } from './Card.js';

export class CardDwmeter extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldQ = this._editForm.querySelector(settings.inputQ);
    this._fieldS = this._editForm.querySelector(settings.inputS);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    super._editCard(evt);
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
    this._fieldQ.value = this._item.q;
    this._fieldS.value = this._item.s;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard();
    this._arr = [
      {value: String.raw`h_{сч} = S \cdot q^2`, key: this._el1},
      {value: String.raw`q`, key: this._el2},
      {value: String.raw`л/с`, key: this._el3},
      {value: String.raw`S`, key: this._el4},
      {value: String.raw`м/(м^3/ч)^2`, key: this._el5},
      {value: String.raw`h_{сч} = ${this._item.s} \cdot (3.6 \cdot ${this._item.q}
         )^2 = ${this._item.h.toFixed(2)} \space м`, key: this._el6}
    ];

    this._refresh();
    return this._cardElement;
  }
}