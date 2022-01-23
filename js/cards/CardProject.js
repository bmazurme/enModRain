import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardProject extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
    this._cardAddress = settings.cardAddress;
    this._projectName = settings.projectName;
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

    this._confirm = (e) => {
      this._openPopup(this._openedPopup);
      this._no.addEventListener('click', this._closePopupByNo);
      this._yes.addEventListener('click', this._closePopupByYes);
      this._current = e.target.closest(this._element);
    };
  }

  _deleteCard() {
    this._current.remove(); 
  }

  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._elementRemove);
    cardElement.querySelector(this._projectName).textContent = this._item.name;
    cardElement.querySelector(this._cardAddress).textContent = this._item.address;
    deleteButton.addEventListener("click", this._confirm);

    return cardElement;
  }
}