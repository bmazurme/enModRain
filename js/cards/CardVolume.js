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
    this._element = settings.element;
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
    const deleteButton = cardElement.querySelector(this._elementRemove);
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    // cardElement.querySelector(this._cardAddress).textContent = this._item.address;

    //deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));

    return cardElement;
  }
}