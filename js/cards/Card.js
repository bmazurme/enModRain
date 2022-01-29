import { settings } from '../config.js';

export class Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
    this._elementPrint = settings.elementPrint;
  }

  _printCard(evn) {
    const block = evn.target.closest('.element');
    html2canvas(block).then(canvas => {
      const doc = new jsPDF();
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0,0);
      doc.save(`Appendix_${this._item.name}.pdf`);
    });
  }

  _deleteCard(evn) {
    evn.target.closest(this._element).remove();
  }

  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._elementRemove);
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
    return cardElement;
  }
}