import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor({submit, popupSelector}) {
    super( popupSelector);
  
    this._popup = document.querySelector('.popup_type_modal');
    this._yes = this._popup.querySelector('.button_remove');
    this._no = this._popup.querySelector('.button_cancel');
    this._submit = (evt) => {submit(evt, this._card)};
  }

  setCurrentCard(card, element) {
    this._card = card;
    this._element = element;
  }

  close() {
    super.close();
    this._no.removeEventListener('click', this.close);
    this._yes.removeEventListener('click', this._submit);
  }

  setEventListeners() {
    super.setEventListeners();
    this._no.addEventListener('click', this.close);
    this._yes.addEventListener('click', this._submit);
  }
}