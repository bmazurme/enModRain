import { settings } from '../../config/settings.js';
import { Card } from '../../components/Card.js';

export class CardCircflow extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldQht = this._editForm.querySelector(settings.inputQht);
    this._fieldT1 = this._editForm.querySelector(settings.inputT1);
    this._fieldT2 = this._editForm.querySelector(settings.inputT2);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    super._editCard(evt)
    this._fieldQht.value = this._item.qht;
    this._fieldT1.value = this._item.t1;
    this._fieldT2.value = this._item.t2;
    this._editCardClick.open({
      currentCard: this._cardElement,
      item: this._item,
      refresh: this._refresh});
  }

  createCard() {
    super.createCard()
    this._arr = this._getTemplate();
    this._refresh();
    return this._cardElement;
  }

  _getTemplate() {
    return [
      {value: String.raw`Q_ц, л/с`, key: this._el1},
      {value: String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)}`, key: this._el2},
      {value: String.raw`Q^{ht} - `, key: this._el3},
      {value: String.raw`Вт`, key: this._el4},
      {value: String.raw`Q^{ht} = ${this._item.qht} \space Вт`, key: this._el5},
      {value: String.raw`\rho \space -`, key: this._el6},
      {value: String.raw`кг / м^{3}`, key: this._el15},
      {value: String.raw`кДж / кг \degree C`, key: this._el16},
      {value: String.raw`\degree C`, key: this._el17},
      {value: String.raw`\degree C`, key: this._el18},
      {value: String.raw`\rho = ${this._item.p.toFixed(2)} \space кг / м^{3}`, key: this._el7},
      {value: String.raw`с - `, key: this._el8},
      {value: String.raw`с = ${this._item.c.toFixed(2)} \space кДж / кг \degree C`, key: this._el9},
      {value: String.raw`t^1 - `, key: this._el10},
      {value: String.raw`t^1 = ${this._item.t1} \degree C`, key: this._el11},
      {value: String.raw`t^2 - `, key: this._el12},
      {value: String.raw`t^2 = ${this._item.t2} \degree C`, key: this._el13},
      {value: String.raw`Q_ц = \dfrac{${this._item.qht}}{${this._item.p}
        \cdot ${this._item.c} \cdot (${this._item.t1} - ${this._item.t2})} = ${this._item.qc.toFixed(2)}
        \space л/с`, key: this._el14}
    ];
  }
}