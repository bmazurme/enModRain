import { settings } from '../config/settings.js';
import { Popup } from '../components/Popup.js';
import { Modal } from './Modal.js';

export class Card extends Popup {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super('.popup_type_edit');
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
    this._elementPrint = settings.elementPrint;
  }

  _editCard(evt) {
    this._validator.resetValidation();
    this._fieldName.value = this._item.name;
  }

  _printCard(evn) {
    const block = evn.target.closest('.element');
    html2canvas(block).then(canvas => {
      const doc = new jsPDF();
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0,0);
      doc.save(`Appendix_${this._item.name}.pdf`);
    });
  }

  _deleteCard() {
    new Modal({deleteCard: () => {this._cardElement.remove();this._cardElement = null;}}).open();
  }

  setEventListeners() {
    this._cardElement.querySelector(this._removeButton).addEventListener("click", () => this._deleteCard());
    this._cardElement.querySelector(this._editButton).addEventListener("click", (evt) => this._editCard(evt));
    this._cardElement.querySelector(this._printButton).addEventListener("click", (evt) => this._printCard(evt));
  }

  createCard() {
    this._template = document.querySelector(this._cardTemplate).content;
    this._cardElement = this._template.querySelector(this._element).cloneNode(true);
    this._cardElement.querySelector(this._elementName).textContent = this._item.name;
    this.setEventListeners();
    return this._cardElement;
  }
}