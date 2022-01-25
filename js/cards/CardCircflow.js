import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardCircflow extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;

console.log(this._item);

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
    const el18 = cardElement.querySelector('.formula18');

    katex.render(String.raw`Q_ц, л/с`, el1, {throwOnError: false});
    katex.render(String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)}`, el2, {throwOnError: false});
    katex.render(String.raw`Q^{ht} - `, el3, {throwOnError: false});
    katex.render(String.raw`Вт`, el4, {throwOnError: false});
    katex.render(String.raw`Q^{ht} = ${this._item.qht} \space Вт`, el5, {throwOnError: false});
    katex.render(String.raw`\rho \space -`, el6, {throwOnError: false});
    katex.render(String.raw`кг / м^{3}`, el15, {throwOnError: false});
    katex.render(String.raw`кДж / кг \degree C`, el16, {throwOnError: false});
    katex.render(String.raw`\degree C`, el17, {throwOnError: false});
    katex.render(String.raw`\degree C`, el18, {throwOnError: false});
    katex.render(String.raw`\rho = ${this._item.p.toFixed(2)} \space кг / м^{3}`, el7, {throwOnError: false});
    katex.render(String.raw`с - `, el8, {throwOnError: false});
    katex.render(String.raw`с = ${this._item.c.toFixed(2)} \space кДж / кг \degree C`, el9, {throwOnError: false});
    katex.render(String.raw`t^1 - `, el10, {throwOnError: false});
    katex.render(String.raw`t^1 = ${this._item.t1} \degree C`, el11, {throwOnError: false});
    katex.render(String.raw`t^2 - `, el12, {throwOnError: false});
    katex.render(String.raw`t^2 = ${this._item.t2} \degree C`, el13, {throwOnError: false});
    katex.render(String.raw`Q_ц = \dfrac{${this._item.qht}}{${this._item.p} \cdot ${this._item.c} \cdot (${this._item.t1} - ${this._item.t2})} = ${this._item.qc.toFixed(2)} \space л/с`, el14, {throwOnError: false});

    return cardElement;
  }
}