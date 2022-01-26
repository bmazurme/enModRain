import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardVolume extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();

console.log(item);

    this._item = item;
    // this._item = item.name;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup
    this._cardName = settings.cardName;
    this._element = '.table__row';//settings.element;
    this._elementRemove = settings.elementRemove;
    // this._cardAddress = settings.cardAddress;
    // this._projectName = settings.projectName;
  }
  _deleteCard(evn) {
    evn.target.closest(this._element).remove();
  }

  createCard() {
    console.log(this._item.name);

    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);

    cardElement.querySelector(".element__customer").textContent = this._item.customer;
    cardElement.querySelector(".element__standart").textContent = this._item.standard;
    cardElement.querySelector(".element__unit").textContent = this._item.unit;
    cardElement.querySelector(".element__coefficient").textContent = this._item.coefficient;
    cardElement.querySelector(".element__cold").textContent = this._item.cold;
    cardElement.querySelector(".element__hot").textContent = this._item.hot;
    cardElement.querySelector(".element__coldHourMax").textContent = this._item.oldHourMax;
    cardElement.querySelector(".element__hotHourMax").textContent = this._item.hotHourMax;
    cardElement.querySelector(".element__coldHourSum").textContent = this._item.coldHourSum;
    cardElement.querySelector(".element__hotHourSum").textContent = this._item.hotHourSum;
    cardElement.querySelector(".element__coldSecondSum").textContent = this._item.coldSecondSum;
    cardElement.querySelector(".element__hotSecondSum").textContent = this._item.otSecondSum;
    cardElement.querySelector(".element__type").textContent = this._item.type;

















    // cardElement.querySelector(this._cardAddress).textContent = this._item.address;

    //deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));

    return cardElement;
  }
}

  // id: 0,
  // standard: 'СП 30.13330.2016 Приложение А.2 п.п. 1',
  // customer: 'Жилые здания оборудованные внутренним водопроводом и канализацией, с ванными и местными водонагревателями',
  // unit: '1 житель',
  // coefficient: 1.15,
  // cold: 180,
  // hot: 70,
  // coldHourMax: 10.3,
  // hotHourMax: 5.8,
  // coldHourSum: 0.2,
  // hotHourSum: 0.3,
  // coldSecondSum: 200,
  // hotSecondSum: 300,
  // type: 1,