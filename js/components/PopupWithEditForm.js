import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithEditForm extends PopupWithForm {
  constructor({submit, validator, popupSelector}) {
    super({submit, popupSelector});
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);

    this._submit = (evt) => { submit(evt, this._getInputValues(), this._current); 
      this.close(); };

    this._popup = document.querySelector(this._popupSelector);
    this._form = this._popup.querySelector('.form');
    this._current = null;
    this._validator = validator;
  }

  open(current){
    this._current = current;
    super.open();
  }
}