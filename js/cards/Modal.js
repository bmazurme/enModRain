import { Popup } from './Popup.js';

export class Modal extends Popup {
  constructor({deleteCard}) {
    super('.popup_type_modal');
    this._popup = document.querySelector('.popup_type_modal');
    this._yes = this._popup.querySelector('.button_remove');
    this._no = this._popup.querySelector('.button_cancel');
    this._deleteCard = () => {deleteCard(); this.close()};
  }

  close() {
    super.close();
    this._no.removeEventListener('click', this.close);
    this._yes.removeEventListener('click', this._deleteCard);
  }

  setEventListeners() {
    super.setEventListeners();
    this._no.addEventListener('click', this.close);
    this._yes.addEventListener('click', this._deleteCard);
  }
}