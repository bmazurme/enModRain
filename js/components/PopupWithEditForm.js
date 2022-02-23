import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithEditForm extends PopupWithForm {
  constructor({submit, validator, popupSelector}) {
    super({submit, popupSelector});
    this._submit = (evt) => { submit(evt, this._getInputValues(), this._current); }
    this._validator = validator;
  }

  open(current){
    this._current = current;
    super.open();
  }
}