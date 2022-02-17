import { Popup } from './Popup.js';
import { config } from '../config/config.js';

export class PopupWithForm extends Popup {
  constructor({submit, popupSelector}) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._submit = (evt, val, current) => { submit(evt, this._getInputValues(), this._current); this.close(); };
    this._popup = document.querySelector(this._popupSelector);
    this._form = this._popup.querySelector('.form');
    this._current = null;
  }

  close() {
    super.close();
    this._form.reset();
    this._popup.removeEventListener('submit', this._submit);
  }

  // _getInputValues() {
  //   const { elements } = {elements: this._form.elements};
  //   return elements;
  // }
  
  _getInputValues() {
    this._inputList = this._form.querySelectorAll(config.inputSelector);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  } 

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._submit);
  }
}