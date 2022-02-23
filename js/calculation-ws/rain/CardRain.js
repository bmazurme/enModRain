import { settings } from '../../config/settings.js';
import { Card } from '../../components/Card.js';

export class CardRain extends Card {
  constructor({item, cardTemplate, handleCardClick, handleCardDelete}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldQ20 = this._editForm.querySelector(settings.inputQ20);
    this._fieldN = this._editForm.querySelector(settings.inputN);
    this._fieldSlope = this._editForm.querySelector(settings.inputSlope);
    this._fieldRoof = this._editForm.querySelector(settings.inputRoof);
    this._fieldFacade = this._editForm.querySelector(settings.inputFacade);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
    this._handleCardDelete = handleCardDelete;
  }

  _editCard(evt) {
    super._editCard(evt);
    this._fieldQ20.value = this._item.q20;
    this._fieldN.value = this._item.n;
    this._fieldSlope.value = this._item.slope;
    this._fieldRoof.value = this._item.roof;
    this._fieldFacade.value = this._item.facade;
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
      {value: String.raw`Q`, key: this._el1},
      {value: String.raw`q_{20}`, key: this._el4},
      {value: String.raw`F_1 = ${this._item.roof} \space м^2`, key: this._el7},
      {value: String.raw`F = F_1 + 0.3 \cdot F_2`, key: this._el13},
      {value: String.raw`F = ${this._item.roof} + 0.3 \cdot ${this._item.facade} 
        = ${this._item.sumArea} \space м^2`, key: this._el14},
        {value: String.raw`F_2 = ${this._item.facade} \space м^2`, key: this._el10},
      {value: String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, key: this._el2},
      {value: String.raw`Q = \dfrac {${this._item.q20} \cdot ${this._item.sumArea}}{10000} 
        = ${Number(this._item.q).toFixed(2)} \space л/с`, key: this._el27},
      {value: String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, key: this._el3},
      {value: String.raw`q_{5}`, key: this._el5},
      {value: String.raw`q_{5} = 4^n \cdot q_{20}`, key: this._el6},
      {value: String.raw`q_{5} = 4^{${this._item.n}} \cdot ${this._item.q20} 
        = ${this._item.q5} \space л/с`, key: this._el21},
      {value: String.raw`Q = \dfrac { ${this._item.q5} \cdot ${this._item.sumArea}}{10000} 
        = ${this._item.q.toFixed(2)} \space л/с`, key: this._el27}
    ];
  }
}