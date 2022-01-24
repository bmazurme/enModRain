import { settings } from '../config.js';

export class Modal {
  constructor() { //item, cardTemplate, openPopup, closePopup) {
    this._element = settings.element;
    this._openedPopup = document.querySelector('.popup_type_modal');
    this._modal = document.querySelector('.modal');
    this._yes = this._modal.querySelector('.modal__remove');
    this._no = this._modal.querySelector('.modal__cancel');
    this._current = null;
    
    this._openPopup = (popup) => {
      document.addEventListener('keydown', this._closeByEscape);
      popup.querySelector('.popup__close').addEventListener('click', this._closePopupByNo);
      popup.classList.add('popup_active');
    }
    
    this._closePopup = (popup) => {
      document.removeEventListener('keydown', this._closeByEscape);
      popup.querySelector('.popup__close').removeEventListener('click', this._closePopupByNo);
      popup.classList.remove('popup_active');
    }
    
    this._closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        this._closePopupByNo();
      }
    }

    this._closePopupByNo = () => {
      this._closePopup(this._openedPopup);
      this._no.removeEventListener('click', this._closePopupByNo);
      this._yes.removeEventListener('click', this._closePopupByYes);
    };

    this._closePopupByYes = () => {
      this._closePopup(this._openedPopup);
      this._no.removeEventListener('click', this._closePopupByNo);
      this._yes.removeEventListener('click', this._closePopupByYes);
      this._deleteCard();
    };

    this.confirm = (e) => {
      this._openPopup(this._openedPopup);
      this._no.addEventListener('click', this._closePopupByNo);
      this._yes.addEventListener('click', this._closePopupByYes);
      this._current = e.target.closest(this._element);
    };
  }

  _deleteCard() {
    this._current.remove();
  }
}