import { settings } from '../config.js';
import { Card } from './Card.js';
import { Modal } from './Modal.js';
import { FormValidator } from '../FormValidator.js';
import { config } from '../config.js';
import { calcThrottle } from '../calc/calcThrottle.js';

export class CardThrottle extends Card {
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
    this._editButton = settings.editButton;
    this._openedPopupEdit = document.querySelector('.popup_type_edit');

    this._refresh = () => {
      katex.render(String.raw`d_0,\space мм`, this._el1, {throwOnError: false});
      katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot q)^2}{h_{др}}}`, this._el2, {throwOnError: false});
      katex.render(String.raw`h_{др}`, this._el3, {throwOnError: false});
      katex.render(String.raw`q`, this._el4, {throwOnError: false});
      katex.render(String.raw`d_0 = 3.16 \sqrt[4]{ \dfrac{(3.6 \cdot ${this._item.q})^2}{${this._item.hdr}}} = 
        ${this._item.d.toFixed(1)} \space мм `, this._el5, {throwOnError: false});
    }

    this._saveForm = (evt) => {
      this._button.removeEventListener('click', this._closePopupEdit);
      evt.preventDefault();
      const newName = this._openedPopupEdit.querySelector('.form__input_type_name').value;
      const newQ = this._openedPopupEdit.querySelector('.form__input_type_q').value;
      const newHdr = this._openedPopupEdit.querySelector('.form__input_type_hdr').value;
      const newItem = { name: newName, q: newQ, hdr: newHdr };
      this._item = calcThrottle(newItem);
      this._current.querySelector(this._cardName).textContent = this._item.name;
      this._item.q = newQ;
      this._item.hdr = newHdr;

      this._refresh();
      this._closePopupEdit(this._openedPopupEdit);
    }

    this._edit = (evt) => {
      this._current = evt.target.closest('.element');
      this._openedPopupEdit.querySelector('.form__input_type_name').value 
         = this._current.querySelector(this._cardName).textContent;
      this._openedPopupEdit.querySelector('.form__input_type_q').value = this._item.q;
      this._openedPopupEdit.querySelector('.form__input_type_hdr').value = this._item.hdr;      
      this._openedPopupEdit.addEventListener('submit', this._saveForm);
      document.addEventListener('keydown', this._closeEditByEscape);
      this._button = this._openedPopupEdit.querySelector('.popup__close');
      this._button.addEventListener('click', this._closePopupEdit);
      this._openPopupEdit(this._openedPopupEdit);

      const cardFormValidator = new FormValidator(config, this._openedPopupEdit);
      cardFormValidator.enableValidation();
    }

    this._openPopupEdit = (popup) => {
      document.addEventListener('keydown', this._closeEditByEscape);
      popup.classList.add('popup_active');
    }

    this._closePopupEdit = () => {
      document.removeEventListener('keydown', this._closeEditByEscape);
      this._openedPopupEdit.classList.remove('popup_active');
      this._button.removeEventListener('click', this._closePopupEdit);
      this._openedPopupEdit.removeEventListener('submit', this._saveForm);
    };

    this._closeEditByEscape = (evt) => {
      if (evt.key === 'Escape') {
        this._closePopupEdit();
      }
    }
  }

  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._removeButton);
    const editButton = cardElement.querySelector(this._editButton);
    const printButton = cardElement.querySelector(this._printButton);
    deleteButton.addEventListener("click", new Modal().confirm);
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    printButton.addEventListener("click", (evt) => super._printCard(evt));
    editButton.addEventListener("click", this._edit);

    this._el1 = cardElement.querySelector('.formula1');
    this._el2 = cardElement.querySelector('.formula2');
    this._el3 = cardElement.querySelector('.formula3');
    this._el4 = cardElement.querySelector('.formula4');
    this._el5 = cardElement.querySelector('.formula5');

    this._refresh();

    return cardElement;
  }
}