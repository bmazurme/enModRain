import { settings } from '../config.js';
import { Card } from './Card.js';
import { Modal } from './Modal.js';

export class CardTank extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
  }

  _printCard(evn) {
    const block = evn.target.closest('.element');
    html2canvas(block).then(canvas => {
      const doc = new jsPDF();
      doc.addImage(canvas.toDataURL('image/png'), 'JPEG', 0,0);
      doc.save(`Appendix_${this._item.name}.pdf`);
    });
}

  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._removeButton);
    deleteButton.addEventListener("click", new Modal().confirm);
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    const printButton = cardElement.querySelector(this._printButton);
    printButton.addEventListener("click", (evt) => this._printCard(evt));

    const el1 = cardElement.querySelector('.formula1');
    const el2 = cardElement.querySelector('.formula2');
    const el3 = cardElement.querySelector('.formula3');
    const el4 = cardElement.querySelector('.formula4');
    const el5 = cardElement.querySelector('.formula5');
    const el6 = cardElement.querySelector('.formula6');
    const el7 = cardElement.querySelector('.formula7');
    const el8 = cardElement.querySelector('.formula8');
    const el9 = cardElement.querySelector('.formula9');
    const el10 = cardElement.querySelector('.formula10');
    const el11 = cardElement.querySelector('.formula11');
    const el12 = cardElement.querySelector('.formula12');
    const el13 = cardElement.querySelector('.formula13');
    const el14 = cardElement.querySelector('.formula14');
    const el15 = cardElement.querySelector('.formula15');
    const el16 = cardElement.querySelector('.formula16');
    const el17 = cardElement.querySelector('.formula17');
    const el18 = cardElement.querySelector('.formula18');
    const el19 = cardElement.querySelector('.formula19');
    const el20 = cardElement.querySelector('.formula20');
    const el21 = cardElement.querySelector('.formula21');
    const el22 = cardElement.querySelector('.formula22');
    const el23 = cardElement.querySelector('.formula23');
    const el24 = cardElement.querySelector('.formula24');
    const el25 = cardElement.querySelector('.formula25');
    const el26 = cardElement.querySelector('.formula26');
    const el27 = cardElement.querySelector('.formula27');
    const el28 = cardElement.querySelector('.formula28');
    const el29 = cardElement.querySelector('.formula29');
    const el30 = cardElement.querySelector('.formula30');
    const el31 = cardElement.querySelector('.formula31');
    const el32 = cardElement.querySelector('.formula32');
    const el33 = cardElement.querySelector('.formula33');
    const el34 = cardElement.querySelector('.formula34');
    const el35 = cardElement.querySelector('.formula35');
    const el36 = cardElement.querySelector('.formula36');
    const el37 = cardElement.querySelector('.formula37');
    const el38 = cardElement.querySelector('.formula38');
    const el39 = cardElement.querySelector('.formula39');
    const el40 = cardElement.querySelector('.formula40');

    katex.render(String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`, el1, {throwOnError: false});
    katex.render(String.raw`W_1 = \dfrac{${Number(this._item.fi).toFixed(2)} \cdot ${this._item.t} \cdot ${this._item.qmid}}{1.16 \cdot (${this._item.th} - ${this._item.tc})} = ${Number(this._item.w).toFixed(2)}`, el2, {throwOnError: false});
    katex.render(String.raw`\varphi`, el3, {throwOnError: false});
    katex.render(String.raw`\varphi_1 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1}`, el4, {throwOnError: false});
    katex.render(String.raw`\varphi_1 = 1 - ${this._item.k_hr_ht_sp.toFixed(2)} + (${this._item.k_hr_ht.toFixed(2)} - 1) \cdot \Big(\dfrac{ ${this._item.k_hr_ht_sp.toFixed(2)} }{${this._item.k_hr_ht.toFixed(2)}}\Big)^ \frac{${this._item.k_hr_ht.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)} - 1} = ${this._item.fi.toFixed(2)}`, el5, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp}`, el6, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, el7, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{${this._item.qsp}}{${this._item.qmid}} = ${this._item.k_hr_ht_sp.toFixed(2)}`, el8, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht}`, el9, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, el10, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{${this._item.qmax}}{${this._item.qmid}} = ${this._item.k_hr_ht.toFixed(2)}`, el11, {throwOnError: false});
    katex.render(String.raw`V = W \cdot B`, el12, {throwOnError: false});
    katex.render(String.raw`V_1 = ${this._item.w.toFixed(2)} \cdot ${this._item.b} = ${this._item.v1.toFixed(2)} м^3`, el13, {throwOnError: false});
    katex.render(String.raw`B`, el14, {throwOnError: false});
    katex.render(String.raw`Q_T^h`, el15, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h`, el16, {throwOnError: false});
    katex.render(String.raw`Q^{sp}`, el17, {throwOnError: false});
    katex.render(String.raw`T`, el18, {throwOnError: false});
    katex.render(String.raw`t^c`, el19, {throwOnError: false});
    katex.render(String.raw`t^h`, el20, {throwOnError: false});
    katex.render(String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`, el21, {throwOnError: false});
    katex.render(String.raw`W_2 = \dfrac{${this._item.fi2.toFixed(2)} \cdot ${this._item.t} \cdot ${this._item.qmid}}{1.16 \cdot (${this._item.th} - ${this._item.tc})} = ${this._item.w2.toFixed(2)}`, el22, {throwOnError: false});
    katex.render(String.raw`\varphi`, el23, {throwOnError: false});
    katex.render(String.raw`\varphi_2 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1} + \Big( \dfrac{K_{hr}^{ht,sp} - 1}{K_{hr}^{ht,sp}} \Big)^{K_{hr}^{ht}}`, el24, {throwOnError: false});
    katex.render(String.raw`\varphi_2 = 1 - ${this._item.k_hr_ht_sp.toFixed(2)} + (${this._item.k_hr_ht.toFixed(2)} - 1) \cdot \Big(\dfrac{${this._item.k_hr_ht_sp.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)}}\Big)^ \frac{${this._item.k_hr_ht.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)} - 1} + \Big( \dfrac{${this._item.k_hr_ht_sp.toFixed(2)} - 1}{${this._item.k_hr_ht_sp.toFixed(2)}} \Big)^{${this._item.k_hr_ht.toFixed(2)}} = ${this._item.fi2.toFixed(2)}`, el25, {throwOnError: false});  
    katex.render(String.raw`K_{hr}^{ht,sp}`, el26, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, el27, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{${this._item.qsp}}{${this._item.qmid}} = ${this._item.k_hr_ht_sp.toFixed(2)}`, el28, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht}`, el29, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, el30, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{${this._item.qmax}}{${this._item.qmid}} = ${this._item.k_hr_ht.toFixed(2)}`, el31, {throwOnError: false});
    katex.render(String.raw`V = W \cdot B`, el32, {throwOnError: false});
    katex.render(String.raw`V_2 = ${this._item.w2.toFixed(2)} \cdot ${this._item.b} = ${this._item.v2.toFixed(2)} м^3`, el33, {throwOnError: false});
    katex.render(String.raw`B`, el34, {throwOnError: false});
    katex.render(String.raw`Q_T^h`, el35, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h`, el36, {throwOnError: false});
    katex.render(String.raw`Q^{sp}`, el37, {throwOnError: false});
    katex.render(String.raw`T`, el38, {throwOnError: false});
    katex.render(String.raw`t^c`, el39, {throwOnError: false});
    katex.render(String.raw`t^h`, el40, {throwOnError: false});

    return cardElement;
  }
}