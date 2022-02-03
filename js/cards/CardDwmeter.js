import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardDwmeter extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector('.form_type_edit');
    this._fieldName = this._editForm.querySelector('.inbox__input_name');
    this._fieldQ = this._editForm.querySelector('.inbox__input_q');
    this._fieldS = this._editForm.querySelector('.inbox__input_s');
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _refresh() {
    katex.render(String.raw`h_{сч} = S \cdot q^2`, this._el1, {throwOnError: false});
    katex.render(String.raw`q`, this._el2, {throwOnError: false});
    katex.render(String.raw`л/с`, this._el3, {throwOnError: false});
    katex.render(String.raw`S`, this._el4, {throwOnError: false});
    katex.render(String.raw`м/(м^3/ч)^2`, this._el5, {throwOnError: false});
    katex.render(String.raw`h_{сч} = ${this._item.s} \cdot (3.6 \cdot ${this._item.q}
       )^2 = ${this._item.h.toFixed(2)} \space м`, this._el6, {throwOnError: false});
  };

  _editCard(evt) {
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
    this._fieldQ.value = this._item.q;
    this._fieldS.value = this._item.s;
    this._editCardClick.open(this._cardElement);
  }

  setEventListeners() {
    const deleteButton = this._cardElement.querySelector('.button_remove');
    const editButton = this._cardElement.querySelector('.button_edit');
    const printButton = this._cardElement.querySelector('.button_print');
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
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
    this._el6 = this._cardElement.querySelector('.formula6');
    this._refresh();
    
    this.setEventListeners();
    return this._cardElement;
  }
}