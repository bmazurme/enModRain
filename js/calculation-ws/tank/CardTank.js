import { settings } from '../../config/settings.js';
import { Card } from '../../components/Card.js';

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

  _editCard(evt) {
    super._editCard(evt);
    this._fieldTh.value = this._item.th;
    this._fieldTc.value = this._item.tc;
    this._fieldQmid.value = this._item.qmid;
    this._fieldQmax.value = this._item.qmax;
    this._fieldQsp.value = this._item.qsp;
    this._fieldT.value = this._item.t;
    this._fieldB.value = this._item.b;
    this._editCardClick.open({
      currentCard: this._cardElement,
      item: this._item,
      refresh: this._refresh
    });
  }

  createCard() {
    super.createCard();
    this._arr = this._getTemplate();
    this._refresh();
    return this._cardElement;
  }

  _getTemplate() {
    return [
      {value: String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`, key: this._el1},
      {value: String.raw`W_1 = \dfrac{${Number(this._item.fi).toFixed(2)} \cdot ${this._item.t}
        \cdot ${this._item.qmid}}{1.16 \cdot (${this._item.th} - ${this._item.tc})} =
        ${Number(this._item.w).toFixed(2)}`, key: this._el2},
      {value: String.raw`\varphi`, key: this._el3},
      {value: String.raw`\varphi_1 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot
        \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1}`, key: this._el4},
      {value: String.raw`\varphi_1 = 1 - ${this._item.k_hr_ht_sp.toFixed(2)} + (${this._item.k_hr_ht.toFixed(2)} - 1)
        \cdot \Big(\dfrac{ ${this._item.k_hr_ht_sp.toFixed(2)} }{${this._item.k_hr_ht.toFixed(2)}}\Big)^
        \frac{${this._item.k_hr_ht.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)} - 1} = ${this._item.fi.toFixed(2)}`, key: this._el5},
      {value: String.raw`K_{hr}^{ht,sp}`, key: this._el6},
      {value: String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, key: this._el7},
      {value: String.raw`K_{hr}^{ht,sp} = \dfrac{${this._item.qsp}}{${this._item.qmid}} 
        = ${this._item.k_hr_ht_sp.toFixed(2)}`, key: this._el8},
      {value: String.raw`K_{hr}^{ht}`, key: this._el9},
      {value: String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, key: this._el10},
      {value: String.raw`K_{hr}^{ht} = \dfrac{${this._item.qmax}}{${this._item.qmid}} =
        ${this._item.k_hr_ht.toFixed(2)}`, key: this._el11},
      {value: String.raw`V = W \cdot B`, key: this._el12},
      {value: String.raw`V_1 = ${this._item.w.toFixed(2)} \cdot ${this._item.b} 
        = ${this._item.v1.toFixed(2)} м^3`, key: this._el13},
      {value: String.raw`B`, key: this._el14},
      {value: String.raw`Q_T^h`, key: this._el15},
      {value: String.raw`Q_{hr}^h`, key: this._el16},
      {value: String.raw`Q^{sp}`, key: this._el17},
      {value: String.raw`T`, key: this._el18},
      {value: String.raw`t^c`, key: this._el19},
      {value: String.raw`t^h`, key: this._el20},
      {value: String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`,
        key: this._el21},
      {value: String.raw`W_2 = \dfrac{${this._item.fi2.toFixed(2)} \cdot ${this._item.t}
        \cdot ${this._item.qmid}}{1.16 \cdot (${this._item.th} - ${this._item.tc})} =
        ${this._item.w2.toFixed(2)}`, key: this._el22},
      {value: String.raw`\varphi`, key: this._el23},
      {value: String.raw`\varphi_2 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) 
        \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1}
        + \Big( \dfrac{K_{hr}^{ht,sp} - 1}{K_{hr}^{ht,sp}} \Big)^{K_{hr}^{ht}}`, key: this._el24},
      {value: String.raw`\varphi_2 = 1 - ${this._item.k_hr_ht_sp.toFixed(2)} 
        + (${this._item.k_hr_ht.toFixed(2)} - 1) \cdot 
        \Big(\dfrac{${this._item.k_hr_ht_sp.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)}}\Big)^ 
        \frac{${this._item.k_hr_ht.toFixed(2)}}{${this._item.k_hr_ht.toFixed(2)} - 1} + 
        \Big( \dfrac{${this._item.k_hr_ht_sp.toFixed(2)} - 1}{${this._item.k_hr_ht_sp.toFixed(2)}} 
        \Big)^{${this._item.k_hr_ht.toFixed(2)}} = ${this._item.fi2.toFixed(2)}`, key: this._el25},  
      {value: String.raw`K_{hr}^{ht,sp}`, key: this._el26},
      {value: String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, key: this._el27},
      {value: String.raw`K_{hr}^{ht,sp} = \dfrac{${this._item.qsp}}{${this._item.qmid}} 
        = ${this._item.k_hr_ht_sp.toFixed(2)}`, key: this._el28},
      {value: String.raw`K_{hr}^{ht}`, key: this._el29},
      {value: String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, key: this._el30},
      {value: String.raw`K_{hr}^{ht} = \dfrac{${this._item.qmax}}{${this._item.qmid}} 
      = ${this._item.k_hr_ht.toFixed(2)}`, key: this._el31},
      {value: String.raw`V = W \cdot B`, key: this._el32},
      {value: String.raw`V_2 = ${this._item.w2.toFixed(2)} \cdot ${this._item.b} = 
        ${this._item.v2.toFixed(2)} м^3`, key: this._el33},
      {value: String.raw`B`, key: this._el34},
      {value: String.raw`Q_T^h`, key: this._el35},
      {value: String.raw`Q_{hr}^h`, key: this._el36},
      {value: String.raw`Q^{sp}`, key: this._el37},
      {value: String.raw`T`, key: this._el38},
      {value: String.raw`t^c`, key: this._el39},
      {value: String.raw`t^h`, key: this._el40}
    ];
  }
}