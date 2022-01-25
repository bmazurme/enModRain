export class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  openPopup = (popup) => {
    document.addEventListener('keydown', this.closeByEscape);
    this._popup.classList.add('popup_active');
  }
  
  closePopup = (popup) => {
    document.removeEventListener('keydown', this.closeByEscape);
    this._popup.classList.remove('popup_active');
  }
  
  closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_active');
      closePopup(openedPopup);
    }
  }
}