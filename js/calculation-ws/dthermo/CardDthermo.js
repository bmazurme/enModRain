import { settings } from '../../config/settings.js';
import { Card } from '../../components/Card.js';

export class CardDthermo extends Card {
  constructor({item, cardTemplate, handleCardClick}) {
    super(cardTemplate);
    this._cardTemplate = cardTemplate;
    this._item = item;
    this._editForm = document.querySelector(settings.editForm);
    this._fieldName = this._editForm.querySelector(settings.inputName);
    this._editButton = settings.editButton;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
    this._fieldT1 = this._editForm.querySelector(settings.inputT1);
    this._fieldL = this._editForm.querySelector(settings.inputL);
    this._fieldQ = this._editForm.querySelector(settings.inputQ);
    this._fieldTh = this._editForm.querySelector(settings.inputTh);
    this._fieldTb = this._editForm.querySelector(settings.inputTb);
    this._fieldV = this._editForm.querySelector(settings.inputV);
    this._fieldDtr = this._editForm.querySelector(settings.inputDtr);
    this._fieldDsl = this._editForm.querySelector(settings.inputDsl);
    this._fieldDiamsln = this._editForm.querySelector(settings.inputDiamsln);
    this._fieldAlphanp2 = this._editForm.querySelector(settings.inputAlphanp2);
    this._fieldAlphasl = this._editForm.querySelector(settings.inputAlphasl);
    this._fieldAlphasl2 = this._editForm.querySelector(settings.inputAlphasl2);
    this._elementName = settings.elementName;
    this._editCardClick = handleCardClick;
    this._validator = handleCardClick._validator;
  }

  _editCard(evt) {
    super._editCard(evt)
    this._fieldT1.value = this._item.t1;
    this._fieldL.value = this._item.l;
    this._fieldQ.value = this._item.q;
    this._fieldTh.value = this._item.th;
    this._fieldTb.value = this._item.tb;
    this._fieldV.value = this._item.v;
    this._fieldDtr.value = this._item.dtr;
    this._fieldDsl.value = this._item.dsl;
    this._fieldDiamsln.value = this._item.diamsln;
    this._fieldAlphanp2.value = this._item.alphanp2;
    this._fieldAlphasl.value = this._item.alphasl;
    this._fieldAlphasl2.value = this._item.alphasl2;
    this._editCardClick.open({currentCard: this._cardElement, item: this._item, refresh: this._refresh});
  }

  createCard() {
    super.createCard();
    this._arr = [
      {value: String.raw`Re = \dfrac {Vd_{тр}} {\nu}`, key: this._el1 },
      {value: String.raw`Re = \dfrac {Vd_{тр}} {\nu} = ${Number(this._item.re).toFixed(2)}`, key: this._el2 },
      {value: String.raw`{\nu}`, key: this._el3 },
      {value: String.raw`Nu = 0,021 \cdot Re^{0,8} \cdot Pr^{0,43}`, key: this._el4 },
      {value: String.raw`Nu = 0,021 \cdot ${this._item.re.toFixed(2)}
        ^{0,8} \cdot ${Number(this._item.pr).toFixed(2)} ^{0,43} = ${this._item.nu.toFixed(2)}`, key: this._el5 },
      {value: String.raw`Pr`, key: this._el6 },
      {value: String.raw`\alpha_{вн} = \dfrac {Nu \cdot \lambda_t} {d_{тр}}
        = \dfrac { ${this._item.nu.toFixed(2)} \cdot ${this._item.ham.toFixed(2)}} {${this._item.dtr}} 
        = ${this._item.alpha.toFixed(2)}`, key: this._el7 },
      {value: String.raw`\lambda_t`, key: this._el8 },
      {value: String.raw`R_{ВН} = \dfrac 1 {\pi \cdot d_{тр} \cdot \alpha_{ВН}} 
        = \dfrac 1 {\pi \cdot ${this._item.dtr} \cdot ${this._item.alpha.toFixed(2)}} 
        = ${this._item.rbh.toFixed(2)}`, key: this._el9 },
      {value: String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`,
        key: this._el10 },
      {value: String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl}}
        \cdot ln(\frac {${this._item.dsl}} {${this._item.dtr}}) = ${this._item.rsl.toFixed(3)}`, key: this._el11 },
      {value: String.raw`R_{сл}`, key: this._el12 },
      {value: String.raw`D_{сл}`, key: this._el13 },
      {value: String.raw`d_{сл}`, key: this._el14 },
      {value: String.raw`\lambda_{сл}`, key: this._el15 },
      {value: String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, 
        key: this._el16 },
      {value: String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl2}} \cdot
        ln(\frac {${this._item.diamsln}} {${this._item.dsl}}) = ${this._item.rsl2.toFixed(3)}`, key: this._el17 },
      {value: String.raw`R_{нар} = \dfrac {1} {\pi \cdot D_{сл} \cdot \alpha_{нар}}`, key: this._el18 },
      {value: String.raw`R_{нар} = \dfrac {1} {\pi \cdot ${this._item.diamsln} \cdot ${this._item.alphanp2}} 
        = ${Number(this._item.rnp).toFixed(3)}`, key: this._el19 },
      {value:  String.raw`k = \dfrac {1} {R_{вн} + \sum R_{сл} + R_{ нар}}`, key: this._el20 },
      {value: String.raw`k = \dfrac {1} {${this._item.rbh.toFixed(3)} + ${this._item.rsl.toFixed(3)} 
        + ${this._item.rsl2.toFixed(3)} + ${this._item.rnp.toFixed(3)}} = ${this._item.k.toFixed(3)}`,
        key: this._el21 },
      {value: String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L`, key: this._el22 },
      {value: String.raw`t^B`, key: this._el23 },
      {value: String.raw`Q_{tr}^{ht} = ${this._item.k.toFixed(3)} \cdot (${this._item.th} - ${this._item.tb})
        \cdot ${this._item.l} = ${this._item.qht.toFixed(3)} Вт`, key: this._el24 },
        {value: String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q}`,
        key: this._el25 },
      {value: String.raw`T_1`, key: this._el26 },
      {value: String.raw`T_2`, key: this._el27 },
      {value: String.raw`T_2 = \dfrac {3,6 \cdot ${this._item.q} \cdot 
        ${this._item.t1} - ${this._item.qht.toFixed(3)} \cdot 0,86} {3,6 \cdot ${this._item.q}} 
        = ${this._item.t2.toFixed(3)}`, key: this._el28 },
    ];
    
    this._refresh();
    return this._cardElement;
  }
}