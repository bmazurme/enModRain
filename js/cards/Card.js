import { settings } from '../config/settings.js';
import { Popup } from '../components/Popup.js';
import { Modal } from '../components/Modal.js';

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

  _refresh = () => {
    this._arr.forEach((item) => { 
      katex.render(item.value, item.key, {throwOnError: false});
    });
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
    this._el1 = this._cardElement.querySelector('.formula1');
    this._el2 = this._cardElement.querySelector('.formula2');
    this._el3 = this._cardElement.querySelector('.formula3');
    this._el4 = this._cardElement.querySelector('.formula4');
    this._el5 = this._cardElement.querySelector('.formula5');
    this._el6 = this._cardElement.querySelector('.formula6');
    this._el7 = this._cardElement.querySelector('.formula7');
    this._el8 = this._cardElement.querySelector('.formula8');
    this._el9 = this._cardElement.querySelector('.formula9');
    this._el10 = this._cardElement.querySelector('.formula10');
    this._el11 = this._cardElement.querySelector('.formula11');
    this._el12 = this._cardElement.querySelector('.formula12');
    this._el13 = this._cardElement.querySelector('.formula13');
    this._el14 = this._cardElement.querySelector('.formula14');
    this._el15 = this._cardElement.querySelector('.formula15');
    this._el16 = this._cardElement.querySelector('.formula16');
    this._el17 = this._cardElement.querySelector('.formula17');
    this._el18 = this._cardElement.querySelector('.formula18');
    this._el19 = this._cardElement.querySelector('.formula19');
    this._el20 = this._cardElement.querySelector('.formula20');
    this._el21 = this._cardElement.querySelector('.formula21');
    this._el22 = this._cardElement.querySelector('.formula22');
    this._el23 = this._cardElement.querySelector('.formula23');
    this._el24 = this._cardElement.querySelector('.formula24');
    this._el25 = this._cardElement.querySelector('.formula25');
    this._el26 = this._cardElement.querySelector('.formula26');
    this._el27 = this._cardElement.querySelector('.formula27');
    this._el28 = this._cardElement.querySelector('.formula28');
    this._el29 = this._cardElement.querySelector('.formula29');
    this._el30 = this._cardElement.querySelector('.formula30');
    this._el31 = this._cardElement.querySelector('.formula31');
    this._el32 = this._cardElement.querySelector('.formula32');
    this._el33 = this._cardElement.querySelector('.formula33');
    this._el34 = this._cardElement.querySelector('.formula34');
    this._el35 = this._cardElement.querySelector('.formula35');
    this._el36 = this._cardElement.querySelector('.formula36');
    this._el37 = this._cardElement.querySelector('.formula37');
    this._el38 = this._cardElement.querySelector('.formula38');
    this._el39 = this._cardElement.querySelector('.formula39');
    this._el40 = this._cardElement.querySelector('.formula40');
    this.setEventListeners();
    return this._cardElement;
  }
}