import { settings } from '../../config/settings.js';
import { Card } from '../../components/Card.js';

export class CardThrottle extends Card {
  constructor({item, cardTemplate, handleCardClick, handleCardDelete}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldQ = this._editForm.querySelector(settings.inputQ);
    this._fieldHdr = this._editForm.querySelector(settings.inputHdr);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
    this._handleCardDelete = handleCardDelete;
  }

  _editCard(evt) {
    super._editCard(evt);
    this._fieldQ.value = this._item.q;
    this._fieldHdr.value = this._item.hdr;
    this._editCardClick.open({
      currentCard: this._cardElement,
      item: this._item,
      refresh: this._refresh
    });
  }

  createCard() {
    super.createCard();
    this._arr = this._getTemplate();
    this._refresh();
    return this._cardElement;
  }

  _getTemplate() {
    return [
      {value: String.raw`d_0,\space мм`, key: this._el1},
      {value: String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot q)^2}{h_{др}}}`, key: this._el2},
      {value: String.raw`h_{др}`, key: this._el3},
      {value: String.raw`q`, key: this._el4},
      {value: String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot ${this._item.q})^2}{${this._item.hdr}}} = 
      ${this._item.d.toFixed(1)} \space мм `, key: this._el5}
    ];
  }
}