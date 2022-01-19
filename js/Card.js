import { settings } from './config.js';

export class Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    this._name = item.name;
    //this._link = item.link;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup
    this._typeSlide = settings.typeSlide;
    this._slideName = settings.slideName;
    this._slideImage = settings.slideImage;
    this._closeButton = settings.closeButton;
    this._cardLike = settings.cardLike;
    this._element = settings.element;
    this._popupActive = settings.popupActive;
    this._elementRemove = settings.elementRemove;
    this._elementImage = settings.elementImage;
  }

  _getPopupSlide(typeSlide) {
    return document.querySelector(typeSlide);
  }

  _deleteCard(evn) {
    evn.target.closest(this._element).remove();
  }

  _openImagePopup() {
    const currentSlide = this._getPopupSlide(this._typeSlide);
    currentSlide.querySelector(this._slideName).textContent = this._name;
    const slideImage = currentSlide.querySelector(this._slideImage);
    //slideImage.src = this._link;
    slideImage.alt = this._name;
    this._getCloseButton(currentSlide, this._closeButton).addEventListener('click', 
       () => this._closePopup(currentSlide));
    this._openPopup(currentSlide);
  }
  
  createCard() {
    const cardElement = document.querySelector(this._cardTemplate)
      .content.querySelector(settings.element).cloneNode(true);
    const cardImage = cardElement.querySelector(this._elementImage);
    const deleteButton = cardElement.querySelector(this._elementRemove);

    cardElement.querySelector(settings.cardName).textContent = this._name;
    //cardImage.src = this._link;
    //cardImage.alt = this._name;
    deleteButton.addEventListener("click", (evt) => this._deleteCard(evt));
    return cardElement;
  }
}