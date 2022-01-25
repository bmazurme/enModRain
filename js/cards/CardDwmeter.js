import { settings } from '../config.js';
import { Card } from './Card.js';
import { Modal } from './Modal.js';

export class CardDwmeter extends Card {
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
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    const printButton = cardElement.querySelector(this._printButton);
    printButton.addEventListener("click", (evt) => this._printCard(evt));
      
    const el1 = cardElement.querySelector('.formula1');
    const el2 = cardElement.querySelector('.formula2');
    const el3 = cardElement.querySelector('.formula3');
    const el4 = cardElement.querySelector('.formula4');
    const el5 = cardElement.querySelector('.formula5');
    const el6 = cardElement.querySelector('.formula6');
  
    katex.render(String.raw`h_{сч} = S \cdot q^2`, el1, {throwOnError: false});
    katex.render(String.raw`q`, el2, {throwOnError: false});
    katex.render(String.raw`л/с`, el3, {throwOnError: false});
    katex.render(String.raw`S`, el4, {throwOnError: false});
    katex.render(String.raw`м/(м^3/ч)^2`, el5, {throwOnError: false});
    katex.render(String.raw`h_{сч} = ${this._item.s} \cdot (3.6 \cdot ${this._item.q}
       )^2 = ${this._item.h.toFixed(2)} \space м`, el6, {throwOnError: false});

    deleteButton.addEventListener("click", new Modal().confirm);

    return cardElement;
  }
}