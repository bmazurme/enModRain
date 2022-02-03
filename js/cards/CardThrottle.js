import { settings } from '../config/settings.js';
import { Card } from './Card.js';

export class CardThrottle extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldQ = this._editForm.querySelector('.inbox__input_q');
    this._fieldHdr = this._editForm.querySelector('.inbox__input_hdr');
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _refresh = () => {
    katex.render(String.raw`d_0,\space мм`, this._el1, {throwOnError: false});
    katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot q)^2}{h_{др}}}`, this._el2, {throwOnError: false});
    katex.render(String.raw`h_{др}`, this._el3, {throwOnError: false});
    katex.render(String.raw`q`, this._el4, {throwOnError: false});
    katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot ${this._item.q})^2}{${this._item.hdr}}} = 
      ${this._item.d.toFixed(1)} \space мм `, this._el5, {throwOnError: false});
  }

  _editCard(evt) {
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
    this._fieldQ.value = this._item.q;
    this._fieldHdr.value = this._item.hdr;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  setEventListeners() {
    const removeButton = this._cardElement.querySelector(this._removeButton);
    const editButton = this._cardElement.querySelector(this._editButton);
    const printButton = this._cardElement.querySelector(this._printButton);
    removeButton.addEventListener("click", (evt) => super._deleteCard(evt));
    editButton.addEventListener("click", (evt) => this._editCard(evt));
    printButton.addEventListener("click", (evt) => super._printCard(evt));
  }

  createCard() {
    this._template = document.querySelector(this._cardTemplate).content;
    this._cardElement = this._template.querySelector(this._element).cloneNode(true);
    this._cardElement.querySelector('.element__name').textContent = this._item.name;
    this._el1 = this._cardElement.querySelector('.formula1');
    this._el2 = this._cardElement.querySelector('.formula2');
    this._el3 = this._cardElement.querySelector('.formula3');
    this._el4 = this._cardElement.querySelector('.formula4');
    this._el5 = this._cardElement.querySelector('.formula5');
    this._refresh();
    
    this.setEventListeners();
    return this._cardElement;
  }
}