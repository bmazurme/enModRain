import { settings } from '../config/settings.js';
import { Card } from './Card.js';

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

  _refresh = () => {
    katex.render(String.raw`Q_ц, л/с`, this._el1, {throwOnError: false});
    katex.render(String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)}`, this._el2, {throwOnError: false});
    katex.render(String.raw`Q^{ht} - `, this._el3, {throwOnError: false});
    katex.render(String.raw`Вт`, this._el4, {throwOnError: false});
    katex.render(String.raw`Q^{ht} = ${this._item.qht} \space Вт`, this._el5, {throwOnError: false});
    katex.render(String.raw`\rho \space -`, this._el6, {throwOnError: false});
    katex.render(String.raw`кг / м^{3}`, this._el15, {throwOnError: false});
    katex.render(String.raw`кДж / кг \degree C`, this._el16, {throwOnError: false});
    katex.render(String.raw`\degree C`, this._el17, {throwOnError: false});
    katex.render(String.raw`\degree C`, this._el18, {throwOnError: false});
    katex.render(String.raw`\rho = ${this._item.p.toFixed(2)} \space кг / м^{3}`, this._el7, {throwOnError: false});
    katex.render(String.raw`с - `, this._el8, {throwOnError: false});
    katex.render(String.raw`с = ${this._item.c.toFixed(2)} \space кДж / кг \degree C`, this._el9, {throwOnError: false});
    katex.render(String.raw`t^1 - `, this._el10, {throwOnError: false});
    katex.render(String.raw`t^1 = ${this._item.t1} \degree C`, this._el11, {throwOnError: false});
    katex.render(String.raw`t^2 - `, this._el12, {throwOnError: false});
    katex.render(String.raw`t^2 = ${this._item.t2} \degree C`, this._el13, {throwOnError: false});
    katex.render(String.raw`Q_ц = \dfrac{${this._item.qht}}{${this._item.p}
     \cdot ${this._item.c} \cdot (${this._item.t1} - ${this._item.t2})} = ${this._item.qc.toFixed(2)}
      \space л/с`, this._el14, {throwOnError: false});
  }

  _editCard(evt) {
    super._editCard(evt)
    this._fieldQht.value = this._item.qht;
    this._fieldT1.value = this._item.t1;
    this._fieldT2.value = this._item.t2;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard()
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
    this._el18 = this._cardElement.querySelector('.formula18');

    this._refresh();
    
    return this._cardElement;
  }
}