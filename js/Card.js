import { settings } from './config.js';
import { calcRain } from './calc/calcRain.js';

export class Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup
    this._typeSlide = settings.typeSlide;
    this._slideName = settings.slideName;
    this._closeButton = settings.closeButton;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
  }

  _deleteCard(evn) {
    evn.target.closest(this._element).remove();
  }
  
  createCard() {
    let obj = calcRain(this._item.slope, this._item.roof, this._item.facade, this._item.q20, this._item.n);
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__name').textContent = this._item.name;
    const deleteButton = cardElement.querySelector(this._elementRemove);
    deleteButton.addEventListener("click", (evt) => this._deleteCard(evt));

    const el1 = cardElement.querySelector('.formula1');
    const el4 = cardElement.querySelector('.formula4');
    const el7 = cardElement.querySelector('.formula7');
    const el27 = cardElement.querySelector('.formula27');
    const el10 = cardElement.querySelector('.formula10');
    const el13 = cardElement.querySelector('.formula13');
    const el14 = cardElement.querySelector('.formula14');
    
    katex.render(String.raw`Q`, el1, {throwOnError: false});
    katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
    katex.render(String.raw`F_1 = ${obj.roof} \space м^2`, el7, {throwOnError: false});
    katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
    katex.render(String.raw`F = ${obj.roof} + 0.3 \cdot ${obj.facade} = ${obj.sumArea} \space м^2`, 
      el14, {throwOnError: false});
    katex.render(String.raw`F_2 = ${obj.facade} \space м^2`, el10, {throwOnError: false});

    if (this._item.slope < 1.5) {
      const el2 = cardElement.querySelector('.formula2');
      katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, el2, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac {${obj.q20} \cdot ${obj.sumArea}}{10000} = ${obj.q.toFixed(2)} \space л/с`, 
        el27, {throwOnError: false});
      return cardElement;
    }
    else {
      const el3 = cardElement.querySelector('.formula3');
      const el5 = cardElement.querySelector('.formula5');
      const el6 = cardElement.querySelector('.formula6');
      const el21 = cardElement.querySelector('.formula21');
      katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, el3, {throwOnError: false});
      katex.render(String.raw`q_{5}`, el5, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^n \cdot q_{20}`, el6, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^{${obj.n}} \cdot ${obj.q20} = ${obj.q5} \space л/с`, el21, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac { ${obj.q5} \cdot ${obj.sumArea}}{10000} = ${obj.q.toFixed(2)} \space л/с`, 
        el27, {throwOnError: false});
      return cardElement;
    }
  }
}