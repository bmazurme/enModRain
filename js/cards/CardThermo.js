import { settings } from '../config/settings.js';
import { Card } from './Card.js';

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

  _refresh = () => {
    console.log(this._item.qmid);
    katex.render(String.raw`Q_T^h (Q_{hr}^h) \space кВт`, this._el1, {throwOnError: false});
    katex.render(String.raw`(Q^{ht})`, this._el2, {throwOnError: false});
    katex.render(String.raw`Q_T^h = 1.16 \cdot q_T^h \cdot (t^h - t^c) + Q^{ht}`, this._el3, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h = 1.16 \cdot q_{hr}^h \cdot (t^h - t^c) + Q^{ht}`, this._el4, {throwOnError: false});
    katex.render(String.raw`t^h`, this._el5, {throwOnError: false});
    katex.render(String.raw`^\circ C`, this._el6, {throwOnError: false});
    katex.render(String.raw`t^h = ${this._item.th} \space ^\circ C`, this._el7, {throwOnError: false});
    katex.render(String.raw`t^c`, this._el8, {throwOnError: false});
    katex.render(String.raw`^\circ C`, this._el9, {throwOnError: false})
    katex.render(String.raw`t^c = ${this._item.tc} \space ^\circ C`, this._el10, {throwOnError: false});
    katex.render(String.raw`Q^{ht}`, this._el11, {throwOnError: false});
    katex.render(String.raw`кВт`, this._el12, {throwOnError: false});
    katex.render(String.raw`Q^{ht} = ${this._item.qht} \space кВт`, this._el13, {throwOnError: false});
    katex.render(String.raw`Q_T^h = 1.16 \space \cdot ${this._item.qht} \cdot ( ${this._item.th} - ${this._item.tc} ) \space + ${this._item.qht2} = ${this._item.qmid.toFixed(2)} \space кВт`, this._el14, {throwOnError: false});
    katex.render(String.raw`${this._item.qmidg.toFixed(4)} \space Гкал`, this._el15, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h = 1.16 \space \cdot ${this._item.qhhr} \cdot ( ${this._item.th} - ${this._item.tc}) \space + ${this._item.qht2} = ${this._item.qmax.toFixed(2)} \space кВт`, this._el16, {throwOnError: false});
    katex.render(String.raw`${this._item.qmaxg.toFixed(4)} \space Гкал`, this._el17, {throwOnError: false});
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
    this._el1 = this._cardElement.querySelector('.formula1');
    this._el2 = this._cardElement.querySelector('.formula2');
    this._el3 = this._cardElement.querySelector('.formula3');
    this._el4 = this._cardElement.querySelector('.formula4');
    this._el5 = this._cardElement.querySelector('.formula5');
    this._el6 = this._cardElement.querySelector('.formula6');
    this._el7 = this._cardElement.querySelector('.formula7');
    this._el8 = this._cardElement.querySelector('.formula8');
    this._el9 = this._cardElement.querySelector('.formula9');
    this._el10 = this._cardElement.querySelector('.formula10');
    this._el11 = this._cardElement.querySelector('.formula11');
    this._el12 = this._cardElement.querySelector('.formula12');
    this._el13 = this._cardElement.querySelector('.formula13');
    this._el14 = this._cardElement.querySelector('.formula14');
    this._el15 = this._cardElement.querySelector('.formula15');
    this._el16 = this._cardElement.querySelector('.formula16');
    this._el17 = this._cardElement.querySelector('.formula17');

    this._refresh();
    return this._cardElement;
  }
}