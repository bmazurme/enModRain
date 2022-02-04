import { settings } from '../config/settings.js';
import { Card } from './Card.js';

export class CardRain extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
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
  }

  _refresh = () => {
      katex.render(String.raw`Q`, this._el1, {throwOnError: false});
      katex.render(String.raw`q_{20}`, this._el4, {throwOnError: false});
      katex.render(String.raw`F_1 = ${this._item.roof} \space м^2`, this._el7, {throwOnError: false});
      katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, this._el13, {throwOnError: false});
      katex.render(String.raw`F = ${this._item.roof} + 0.3 \cdot ${this._item.facade} 
        = ${this._item.sumArea} \space м^2`, 
        this._el14, {throwOnError: false});
      katex.render(String.raw`F_2 = ${this._item.facade} \space м^2`, this._el10, {throwOnError: false});
      this._el2 = this._cardElement.querySelector('.formula2');
      katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, this._el2, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac {${this._item.q20} \cdot ${this._item.sumArea}}{10000} 
        = ${Number(this._item.q).toFixed(2)} \space л/с`, this._el27, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, this._el3, {throwOnError: false});
      katex.render(String.raw`q_{5}`, this._el5, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^n \cdot q_{20}`, this._el6, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^{${this._item.n}} \cdot ${this._item.q20} 
        = ${this._item.q5} \space л/с`, this._el21, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac { ${this._item.q5} \cdot ${this._item.sumArea}}{10000} 
        = ${this._item.q.toFixed(2)} \space л/с`, 
        this._el27, {throwOnError: false});
      return this._cardElement;
  };

  _editCard(evt) {
    super._editCard(evt);
    this._fieldQ20.value = this._item.q20;
    this._fieldN.value = this._item.n;
    this._fieldSlope.value = this._item.slope;
    this._fieldRoof.value = this._item.roof;
    this._fieldFacade.value = this._item.facade;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard();

    this._el1 = this._cardElement.querySelector('.formula1');
    this._el4 = this._cardElement.querySelector('.formula4');
    this._el7 = this._cardElement.querySelector('.formula7');
    this._el27 = this._cardElement.querySelector('.formula27');
    this._el10 = this._cardElement.querySelector('.formula10');
    this._el13 = this._cardElement.querySelector('.formula13');
    this._el14 = this._cardElement.querySelector('.formula14');
    
    this._el3 = this._cardElement.querySelector('.formula3');
    this._el5 = this._cardElement.querySelector('.formula5');
    this._el6 = this._cardElement.querySelector('.formula6');
    this._el21 = this._cardElement.querySelector('.formula21');
    this._refresh();
    return this._cardElement;
  }
}