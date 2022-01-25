import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardThermo extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
  }

  _printCard(evn) {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.save(`CalcRain ${this._item.name}.pdf`);
  }


  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._removeButton);
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    const printButton = cardElement.querySelector(this._printButton);
    printButton.addEventListener("click", (evt) => this._printCard(evt));

    const el1 = cardElement.querySelector('.formula1');
    const el2 = cardElement.querySelector('.formula2');
    const el3 = cardElement.querySelector('.formula3');
    const el4 = cardElement.querySelector('.formula4');
    const el5 = cardElement.querySelector('.formula5');
    const el6 = cardElement.querySelector('.formula6');
    const el7 = cardElement.querySelector('.formula7');
    const el8 = cardElement.querySelector('.formula8');
    const el9 = cardElement.querySelector('.formula9');
    const el10 = cardElement.querySelector('.formula10');
    const el11 = cardElement.querySelector('.formula11');
    const el12 = cardElement.querySelector('.formula12');
    const el13 = cardElement.querySelector('.formula13');
    const el14 = cardElement.querySelector('.formula14');
    const el15 = cardElement.querySelector('.formula15');
    const el16 = cardElement.querySelector('.formula16');
    const el17 = cardElement.querySelector('.formula17');

    katex.render(String.raw`Q_T^h (Q_{hr}^h) \space кВт`, el1, {throwOnError: false});
    katex.render(String.raw`(Q^{ht})`, el2, {throwOnError: false});
    katex.render(String.raw`Q_T^h = 1.16 \cdot q_T^h \cdot (t^h - t^c) + Q^{ht}`, el3, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h = 1.16 \cdot q_{hr}^h \cdot (t^h - t^c) + Q^{ht}`, el4, {throwOnError: false});
    katex.render(String.raw`t^h`, el5, {throwOnError: false});
    katex.render(String.raw`^\circ C`, el6, {throwOnError: false});
    katex.render(String.raw`t^h = ${this._item.th} \space ^\circ C`, el7, {throwOnError: false});
    katex.render(String.raw`t^c`, el8, {throwOnError: false});
    katex.render(String.raw`^\circ C`, el9, {throwOnError: false})
    katex.render(String.raw`t^c = ${this._item.tc} \space ^\circ C`, el10, {throwOnError: false});
    katex.render(String.raw`Q^{ht}`, el11, {throwOnError: false});
    katex.render(String.raw`кВт`, el12, {throwOnError: false});
    katex.render(String.raw`Q^{ht} = ${this._item.qht} \space кВт`, el13, {throwOnError: false});
    katex.render(String.raw`Q_T^h = 1.16 \space \cdot ${this._item.qht} \cdot ( ${this._item.th} - ${this._item.tc} ) \space + ${this._item.qht2} = ${this._item.qmid.toFixed(2)} \space кВт`, el14, {throwOnError: false});
    katex.render(String.raw`${this._item.qmidg.toFixed(4)} \space Гкал`, el15, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h = 1.16 \space \cdot ${this._item.qhhr} \cdot ( ${this._item.th} - ${this._item.tc}) \space + ${this._item.qht2} = ${this._item.qmax.toFixed(2)} \space кВт`, el16, {throwOnError: false});
    katex.render(String.raw`${this._item.qmaxg.toFixed(4)} \space Гкал`, el17, {throwOnError: false});

    return cardElement;
  }
}