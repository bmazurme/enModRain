import { settings } from '../config/settings.js';
import { Card } from './Card.js';

export class CardTank extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldTh = this._editForm.querySelector(settings.inputTh);
    this._fieldTc = this._editForm.querySelector(settings.inputTc);
    this._fieldQmid = this._editForm.querySelector(settings.inputQmid);
    this._fieldQmax = this._editForm.querySelector(settings.inputQmax);
    this._fieldQsp = this._editForm.querySelector(settings.inputQsp);
    this._fieldT = this._editForm.querySelector(settings.inputT);
    this._fieldB = this._editForm.querySelector(settings.inputB);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _refresh = () => {
    katex.render(String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`, this._el1, {throwOnError: false});
    katex.render(String.raw`W_1 = \dfrac{${Number(this._item.fi).toFixed(2)} \cdot ${this._item.t} \cdot ${this._item.qmid}}{1.16 \cdot (${this._item.th} - ${this._item.tc})} = ${Number(this._item.w).toFixed(2)}`, this._el2, {throwOnError: false});
    katex.render(String.raw`\varphi`, this._el3, {throwOnError: false});
    katex.render(String.raw`\varphi_1 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1}`, this._el4, {throwOnError: false});
    katex.render(String.raw`\varphi_1 = 1 - ${this._item.k_hr_ht_sp.toFixed(2)} + (${this._item.k_hr_ht.toFixed(2)} - 1) \cdot \Big(\dfrac{ ${this._item.k_hr_ht_sp.toFixed(2)} }{${this._item.k_hr_ht.toFixed(2)}}\Big)^ \frac{${this._item.k_hr_ht.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)} - 1} = ${this._item.fi.toFixed(2)}`, this._el5, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp}`, this._el6, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, this._el7, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{${this._item.qsp}}{${this._item.qmid}} = ${this._item.k_hr_ht_sp.toFixed(2)}`, this._el8, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht}`, this._el9, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, this._el10, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{${this._item.qmax}}{${this._item.qmid}} = ${this._item.k_hr_ht.toFixed(2)}`, this._el11, {throwOnError: false});
    katex.render(String.raw`V = W \cdot B`, this._el12, {throwOnError: false});
    katex.render(String.raw`V_1 = ${this._item.w.toFixed(2)} \cdot ${this._item.b} = ${this._item.v1.toFixed(2)} м^3`, this._el13, {throwOnError: false});
    katex.render(String.raw`B`, this._el14, {throwOnError: false});
    katex.render(String.raw`Q_T^h`, this._el15, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h`, this._el16, {throwOnError: false});
    katex.render(String.raw`Q^{sp}`, this._el17, {throwOnError: false});
    katex.render(String.raw`T`, this._el18, {throwOnError: false});
    katex.render(String.raw`t^c`, this._el19, {throwOnError: false});
    katex.render(String.raw`t^h`, this._el20, {throwOnError: false});
    katex.render(String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`, this._el21, {throwOnError: false});
    katex.render(String.raw`W_2 = \dfrac{${this._item.fi2.toFixed(2)} \cdot ${this._item.t} \cdot ${this._item.qmid}}{1.16 \cdot (${this._item.th} - ${this._item.tc})} = ${this._item.w2.toFixed(2)}`, this._el22, {throwOnError: false});
    katex.render(String.raw`\varphi`, this._el23, {throwOnError: false});
    katex.render(String.raw`\varphi_2 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1} + \Big( \dfrac{K_{hr}^{ht,sp} - 1}{K_{hr}^{ht,sp}} \Big)^{K_{hr}^{ht}}`, this._el24, {throwOnError: false});
    katex.render(String.raw`\varphi_2 = 1 - ${this._item.k_hr_ht_sp.toFixed(2)} + (${this._item.k_hr_ht.toFixed(2)} - 1) \cdot \Big(\dfrac{${this._item.k_hr_ht_sp.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)}}\Big)^ \frac{${this._item.k_hr_ht.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)} - 1} + \Big( \dfrac{${this._item.k_hr_ht_sp.toFixed(2)} - 1}{${this._item.k_hr_ht_sp.toFixed(2)}} \Big)^{${this._item.k_hr_ht.toFixed(2)}} = ${this._item.fi2.toFixed(2)}`, this._el25, {throwOnError: false});  
    katex.render(String.raw`K_{hr}^{ht,sp}`, this._el26, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, this._el27, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{${this._item.qsp}}{${this._item.qmid}} = ${this._item.k_hr_ht_sp.toFixed(2)}`, this._el28, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht}`, this._el29, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, this._el30, {throwOnError: false});
    katex.render(String.raw`K_{hr}^{ht} = \dfrac{${this._item.qmax}}{${this._item.qmid}} = ${this._item.k_hr_ht.toFixed(2)}`, this._el31, {throwOnError: false});
    katex.render(String.raw`V = W \cdot B`, this._el32, {throwOnError: false});
    katex.render(String.raw`V_2 = ${this._item.w2.toFixed(2)} \cdot ${this._item.b} = ${this._item.v2.toFixed(2)} м^3`, this._el33, {throwOnError: false});
    katex.render(String.raw`B`, this._el34, {throwOnError: false});
    katex.render(String.raw`Q_T^h`, this._el35, {throwOnError: false});
    katex.render(String.raw`Q_{hr}^h`, this._el36, {throwOnError: false});
    katex.render(String.raw`Q^{sp}`, this._el37, {throwOnError: false});
    katex.render(String.raw`T`, this._el38, {throwOnError: false});
    katex.render(String.raw`t^c`, this._el39, {throwOnError: false});
    katex.render(String.raw`t^h`, this._el40, {throwOnError: false});
  }

  _editCard(evt) {
    super._editCard(evt);
    this._fieldTh.value = this._item.th;
    this._fieldTc.value = this._item.tc;
    this._fieldQmid.value = this._item.qmid;
    this._fieldQmax.value = this._item.qmax;
    this._fieldQsp.value = this._item.qsp;
    this._fieldT.value = this._item.t;
    this._fieldB.value = this._item.b;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard();
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

    this._refresh();
    return this._cardElement;
  }
}