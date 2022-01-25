import { settings } from '../config.js';
import { Card } from './Card.js';
import { Modal } from './Modal.js';
import { calcDwmeter } from '../calc/calcDwmeter.js';
import { config } from '../config.js';
import { FormValidator } from '../FormValidator.js';

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
    this._editButton = settings.editButton;
    this._openedPopupEdit = document.querySelector('.popup_type_edit');
    this._current = null;
    // this._cardFormValidator = new FormValidator(config, this._openedPopupEdit);
    // this._cardFormValidator.enableValidation();
    

    this._refresh = () => {
      katex.render(String.raw`h_{сч} = S \cdot q^2`, this._el1, {throwOnError: false});
      katex.render(String.raw`q`, this._el2, {throwOnError: false});
      katex.render(String.raw`л/с`, this._el3, {throwOnError: false});
      katex.render(String.raw`S`, this._el4, {throwOnError: false});
      katex.render(String.raw`м/(м^3/ч)^2`, this._el5, {throwOnError: false});
      katex.render(String.raw`h_{сч} = ${this._item.s} \cdot (3.6 \cdot ${this._item.q}
         )^2 = ${this._item.h.toFixed(2)} \space м`, this._el6, {throwOnError: false});
    };

    this._edit = (evt) => {

      this._current = evt.target.closest('.element');
      this._openedPopupEdit.querySelector('.form__input_type_name').value 
         = this._current.querySelector(this._cardName).textContent;
      this._openedPopupEdit.querySelector('.form__input_type_q').value = this._item.q;
      this._openedPopupEdit.querySelector('.form__input_type_s').value = this._item.s;      
      this._openedPopupEdit.addEventListener('submit', this._saveForm);
      document.addEventListener('keydown', this._closeEditByEscape);
      this._button = this._openedPopupEdit.querySelector('.popup__close');
      this._button.addEventListener('click', this._closePopupEdit);
      this._openPopupEdit(this._openedPopupEdit);

      const cardFormValidator = new FormValidator(config, this._openedPopupEdit);
      cardFormValidator.enableValidation();
      //cardFormValidator.resetValidation();
    }

    this._saveForm = (evt) => {
      this._button.removeEventListener('click', this._closePopupEdit);
      evt.preventDefault();
      const newName = this._openedPopupEdit.querySelector('.form__input_type_name').value;
      const newQ = this._openedPopupEdit.querySelector('.form__input_type_q').value;
      const newS = this._openedPopupEdit.querySelector('.form__input_type_s').value;
      const newItem = { name: newName, q: newQ, s: newS };
      this._item = calcDwmeter(newItem);
      this._current.querySelector(this._cardName).textContent = this._item.name;
      this._item.q = newQ;
      this._item.s = newS;

      this._refresh();
      this._closePopupEdit(this._openedPopupEdit);
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
    const printButton = cardElement.querySelector(this._printButton);
    const editButton = cardElement.querySelector(this._editButton);

    cardElement.querySelector(this._cardName).textContent = this._item.name;
    printButton.addEventListener("click", (evt) => this._printCard(evt));
    deleteButton.addEventListener("click", new Modal().confirm);
    editButton.addEventListener("click", this._edit);

    this._el1 = cardElement.querySelector('.formula1');
    this._el2 = cardElement.querySelector('.formula2');
    this._el3 = cardElement.querySelector('.formula3');
    this._el4 = cardElement.querySelector('.formula4');
    this._el5 = cardElement.querySelector('.formula5');
    this._el6 = cardElement.querySelector('.formula6');

    this._refresh();
  
    return cardElement;
  }
}