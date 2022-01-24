import { settings } from '../config.js';
import { Card } from './Card.js';
import { Modal } from './Modal.js';

export class CardProject extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();

    this._item = item;
    this._cardTemplate = cardTemplate;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
    this._elementEdit = settings.elementEdit;
    this._cardAddress = settings.cardAddress;
    this._projectName = settings.projectName;
    this._openedPopupEdit = document.querySelector('.popup_type_edit');
    this._current = null;
    this._button = null;
    
    this._edit = (evt) => {
      this._current = evt.target.closest('.element');
      this._openedPopupEdit.querySelector('.form__input_type_name').value 
        = this._current.querySelector(this._projectName).textContent;
      this._openedPopupEdit.querySelector('.form__input_type_address').value 
        = this._current.querySelector(this._cardAddress).textContent;
      this._openedPopupEdit.addEventListener('submit', this._saveForm);
      document.addEventListener('keydown', this._closeEditByEscape);
      this._button = this._openedPopupEdit.querySelector('.popup__close');
      this._button.addEventListener('click', this._closePopupEdit);
      this._openPopupEdit(this._openedPopupEdit);
    }

    this._saveForm = (evt) => {
      this._button.removeEventListener('click', this._closePopupEdit);
      evt.preventDefault();

      this._current.querySelector(this._projectName).textContent = 
        this._openedPopupEdit.querySelector('.form__input_type_name').value;
      this._current.querySelector(this._cardAddress).textContent = 
        this._openedPopupEdit.querySelector('.form__input_type_address').value;
      this._closePopupEdit(this._openedPopupEdit);
      this._openedPopupEdit.removeEventListener('submit', this._saveForm );
      document.removeEventListener('keydown', this._closeEditByEscape);
      this._openedPopupEdit.removeEventListener('submit', this._saveForm );
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
    const deleteButton = cardElement.querySelector(this._elementRemove);
    const editButton = cardElement.querySelector(this._elementEdit);
    cardElement.querySelector(this._projectName).textContent = this._item.name;
    cardElement.querySelector(this._cardAddress).textContent = this._item.address;
    deleteButton.addEventListener("click", new Modal().confirm);
    editButton.addEventListener("click", this._edit);
    return cardElement;
  }
}