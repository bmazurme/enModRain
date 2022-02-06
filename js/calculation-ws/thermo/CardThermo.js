import { settings } from '../../config/settings.js';
import { Card } from '../../components/Card.js';

export class CardThermo extends Card {
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
    this._fieldQhhr = this._editForm.querySelector(settings.inputQhhr);
    this._fieldTh = this._editForm.querySelector(settings.inputTh);
    this._fieldTc = this._editForm.querySelector(settings.inputTc);
    this._fieldQht2 = this._editForm.querySelector(settings.inputQht2);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    super._editCard(evt);
    this._fieldQht.value = this._item.qht;
    this._fieldQhhr.value = this._item.qhhr;
    this._fieldTh.value = this._item.th;
    this._fieldTc.value = this._item.tc;
    this._fieldQht2.value = this._item.qht2;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard();
    this._arr = [
      {value: String.raw`Q_T^h (Q_{hr}^h) \space кВт`, key: this._el1},
      {value: String.raw`(Q^{ht})`, key: this._el2},
      {value: String.raw`Q_T^h = 1.16 \cdot q_T^h \cdot (t^h - t^c) + Q^{ht}`, key: this._el3},
      {value: String.raw`Q_{hr}^h = 1.16 \cdot q_{hr}^h \cdot (t^h - t^c) + Q^{ht}`, key: this._el4},
      {value: String.raw`t^h`, key: this._el5},
      {value: String.raw`^\circ C`, key: this._el6},
      {value: String.raw`t^h = ${this._item.th} \space ^\circ C`, key: this._el7},
      {value: String.raw`t^c`, key: this._el8},
      {value: String.raw`^\circ C`, key: this._el9},
      {value: String.raw`t^c = ${this._item.tc} \space ^\circ C`, key: this._el10},
      {value: String.raw`Q^{ht}`, key: this._el11},
      {value: String.raw`кВт`, key: this._el12},
      {value: String.raw`Q^{ht} = ${this._item.qht} \space кВт`, key: this._el13},
      {value: String.raw`Q_T^h = 1.16 \space \cdot ${this._item.qht} \cdot 
        ( ${this._item.th} - ${this._item.tc} ) \space + ${this._item.qht2} = 
        ${this._item.qmid.toFixed(2)} \space кВт`, key: this._el14},
      {value: String.raw`${this._item.qmidg.toFixed(4)} \space Гкал`, key: this._el15},
      {value: String.raw`Q_{hr}^h = 1.16 \space \cdot ${this._item.qhhr} \cdot
        ( ${this._item.th} - ${this._item.tc}) \space + ${this._item.qht2} =
        ${this._item.qmax.toFixed(2)} \space кВт`, key: this._el16},
      {value: String.raw`${this._item.qmaxg.toFixed(4)} \space Гкал`, key: this._el17},
    ];
    
    this._refresh();
    return this._cardElement;
  }
}