import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardThrottle extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
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
    const deleteButton = cardElement.querySelector(this._elementRemove);
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    const printButton = cardElement.querySelector(this._elementPrint);
    printButton.addEventListener("click", (evt) => this._printCard(evt));

    const el1 = cardElement.querySelector('.formula1');
    const el2 = cardElement.querySelector('.formula2');
    const el3 = cardElement.querySelector('.formula3');
    const el4 = cardElement.querySelector('.formula4');
    const el5 = cardElement.querySelector('.formula5');

    katex.render(String.raw`d_0,\space мм`, el1, {throwOnError: false});
    katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot q)^2}{h_{др}}}`, el2, {throwOnError: false});
    katex.render(String.raw`h_{др}`, el3, {throwOnError: false});
    katex.render(String.raw`q`, el4, {throwOnError: false});
    katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot ${this._item.q})^2}{${this._item.hdr}}} = ${this._item.d.toFixed(1)} \space мм `, el5, {throwOnError: false});

    return cardElement;
  }
}