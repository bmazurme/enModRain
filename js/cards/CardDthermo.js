import { settings } from '../config/settings.js';
import { Card } from './Card.js';

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

  _refresh = () => {
    katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu}`, this._el1, {throwOnError: false});
    katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu} = ${Number(this._item.re).toFixed(2)}`, this._el2, {throwOnError: false});
    katex.render(String.raw`{\nu}`, this._el3, {throwOnError: false});
    katex.render(String.raw`Nu = 0,021 \cdot Re^{0,8} \cdot Pr^{0,43}`, this._el4, {throwOnError: false});
    katex.render(String.raw`Nu = 0,021 \cdot ${this._item.re.toFixed(2)}
      ^{0,8} \cdot ${Number(this._item.pr).toFixed(2)} ^{0,43} = ${this._item.nu.toFixed(2)}`, this._el5, {throwOnError: false});
    katex.render(String.raw`Pr`, this._el6, {throwOnError: false});
    katex.render(String.raw`\alpha_{вн} = \dfrac {Nu \cdot \lambda_t} {d_{тр}}
      = \dfrac { ${this._item.nu.toFixed(2)} \cdot ${this._item.ham.toFixed(2)}} {${this._item.dtr}} 
      = ${this._item.alpha.toFixed(2)}`, this._el7, {throwOnError: false});
    katex.render(String.raw`\lambda_t`, this._el8, {throwOnError: false});
    katex.render(String.raw`R_{ВН} = \dfrac 1 {\pi \cdot d_{тр} \cdot \alpha_{ВН}} 
      = \dfrac 1 {\pi \cdot ${this._item.dtr} \cdot ${this._item.alpha.toFixed(2)}} 
      = ${this._item.rbh.toFixed(2)}`, this._el9, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`,
      this._el10, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl}}
      \cdot ln(\frac {${this._item.dsl}} {${this._item.dtr}}) = ${this._item.rsl.toFixed(3)}`, this._el11, {throwOnError: false});
    katex.render(String.raw`R_{сл}`, this._el12, {throwOnError: false});
    katex.render(String.raw`D_{сл}`, this._el13, {throwOnError: false});
    katex.render(String.raw`d_{сл}`, this._el14, {throwOnError: false});
    katex.render(String.raw`\lambda_{сл}`, this._el15, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, 
    this._el16, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl2}} \cdot
      ln(\frac {${this._item.diamsln}} {${this._item.dsl}}) = ${this._item.rsl2.toFixed(3)}`, this._el17, {throwOnError: false});
    katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot D_{сл} \cdot \alpha_{нар}}`, this._el18, {throwOnError: false});
    katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot ${this._item.diamsln} \cdot ${this._item.alphanp2}} 
      = ${Number(this._item.rnp).toFixed(3)}`, this._el19, {throwOnError: false});
    katex.render(String.raw`k = \dfrac {1} {R_{вн} + \sum R_{сл} + R_{ нар}}`, this._el20, {throwOnError: false});
    katex.render(String.raw`k = \dfrac {1} {${this._item.rbh.toFixed(3)} + ${this._item.rsl.toFixed(3)} 
      + ${this._item.rsl2.toFixed(3)} + ${this._item.rnp.toFixed(3)}} = ${this._item.k.toFixed(3)}`,
      this._el21, {throwOnError: false});
    katex.render(String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L`, this._el22, {throwOnError: false});
    katex.render(String.raw`t^B`, this._el23, {throwOnError: false});
    katex.render(String.raw`Q_{tr}^{ht} = ${this._item.k.toFixed(3)} \cdot (${this._item.th} - ${this._item.tb})
      \cdot ${this._item.l} = ${this._item.qht.toFixed(3)} Вт`, this._el24, {throwOnError: false});
    katex.render(String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q}`,
    this._el25, {throwOnError: false});
    katex.render(String.raw`T_1`, this._el26, {throwOnError: false});
    katex.render(String.raw`T_2`, this._el27, {throwOnError: false});
    katex.render(String.raw`T_2 = \dfrac {3,6 \cdot ${this._item.q} \cdot 
      ${this._item.t1} - ${this._item.qht.toFixed(3)} \cdot 0,86} {3,6 \cdot ${this._item.q}} 
      = ${this._item.t2.toFixed(3)}`, this._el28, {throwOnError: false});
  }

  _editCard(evt) {
    this._validator.resetValidation();

    console.log(this._item);

    this._fieldName.value = this._item.name;
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

  setEventListeners() {
    const removeButton = this._cardElement.querySelector(this._removeButton);
    const editButton = this._cardElement.querySelector(this._editButton);
    const printButton = this._cardElement.querySelector(this._printButton);
    removeButton.addEventListener("click", (evt) => super._deleteCard(evt));
    editButton.addEventListener("click", (evt) => this._editCard(evt));
    printButton.addEventListener("click", (evt) => super._printCard(evt));
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

    this._refresh();
    
    this.setEventListeners();
    return this._cardElement;
  }
}










// import { settings } from '../config.js';
// import { Card } from './Card.js';

// export class CardDthermo extends Card {
//   constructor(item, cardTemplate, openPopup, closePopup) {
//     super();
//     this._item = item;
//     this._cardTemplate = cardTemplate;
//     this._openPopup = openPopup;
//     this._closePopup = closePopup;
//     this._cardName = settings.cardName;
//     this._element = settings.element;
//     this._removeButton = settings.removeButton;
//     this._printButton = settings.printButton;
//   }

//   createCard() {
//     const cardTemplate = document.querySelector(this._cardTemplate).content;
//     const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
//     const deleteButton = cardElement.querySelector(this._removeButton);
//     deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
//     cardElement.querySelector(this._cardName).textContent = this._item.name;
//     const printButton = cardElement.querySelector(this._printButton);
//     printButton.addEventListener("click", (evt) => super._printCard(evt));

//     const el1 = cardElement.querySelector('.formula1');
//     const el2 = cardElement.querySelector('.formula2');
//     const el3 = cardElement.querySelector('.formula3');
//     const el4 = cardElement.querySelector('.formula4');
//     const el5 = cardElement.querySelector('.formula5');
//     const el6 = cardElement.querySelector('.formula6');
//     const el7 = cardElement.querySelector('.formula7');
//     const el8 = cardElement.querySelector('.formula8');
//     const el9 = cardElement.querySelector('.formula9');
//     const el10 = cardElement.querySelector('.formula10');
//     const el11 = cardElement.querySelector('.formula11');
//     const el12 = cardElement.querySelector('.formula12');
//     const el13 = cardElement.querySelector('.formula13');
//     const el14 = cardElement.querySelector('.formula14');
//     const el15 = cardElement.querySelector('.formula15');
//     const el16 = cardElement.querySelector('.formula16');
//     const el17 = cardElement.querySelector('.formula17');
//     const el18 = cardElement.querySelector('.formula18');
//     const el19 = cardElement.querySelector('.formula19');
//     const el20 = cardElement.querySelector('.formula20');
//     const el21 = cardElement.querySelector('.formula21');
//     const el22 = cardElement.querySelector('.formula22');
//     const el23 = cardElement.querySelector('.formula23');
//     const el24 = cardElement.querySelector('.formula24');
//     const el25 = cardElement.querySelector('.formula25');
//     const el26 = cardElement.querySelector('.formula26');
//     const el27 = cardElement.querySelector('.formula27');
//     const el28 = cardElement.querySelector('.formula28');
  
//     katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu}`, el1, {throwOnError: false});
//     katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu} = ${Number(this._item.re).toFixed(2)}`, el2, {throwOnError: false});
//     katex.render(String.raw`{\nu}`, el3, {throwOnError: false});
//     katex.render(String.raw`Nu = 0,021 \cdot Re^{0,8} \cdot Pr^{0,43}`, el4, {throwOnError: false});
//     katex.render(String.raw`Nu = 0,021 \cdot ${this._item.re.toFixed(2)}
//       ^{0,8} \cdot ${Number(this._item.pr).toFixed(2)} ^{0,43} = ${this._item.nu.toFixed(2)}`, el5, {throwOnError: false});
//     katex.render(String.raw`Pr`, el6, {throwOnError: false});
//     katex.render(String.raw`\alpha_{вн} = \dfrac {Nu \cdot \lambda_t} {d_{тр}}
//       = \dfrac { ${this._item.nu.toFixed(2)} \cdot ${this._item.ham.toFixed(2)}} {${this._item.dtr}} 
//       = ${this._item.alpha.toFixed(2)}`, el7, {throwOnError: false});
//     katex.render(String.raw`\lambda_t`, el8, {throwOnError: false});
//     katex.render(String.raw`R_{ВН} = \dfrac 1 {\pi \cdot d_{тр} \cdot \alpha_{ВН}} 
//       = \dfrac 1 {\pi \cdot ${this._item.dtr} \cdot ${this._item.alpha.toFixed(2)}} 
//       = ${this._item.rbh.toFixed(2)}`, el9, {throwOnError: false});
//     katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`,
//       el10, {throwOnError: false});
//     katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl}}
//       \cdot ln(\frac {${this._item.dsl}} {${this._item.dtr}}) = ${this._item.rsl.toFixed(3)}`, el11, {throwOnError: false});
//     katex.render(String.raw`R_{сл}`, el12, {throwOnError: false});
//     katex.render(String.raw`D_{сл}`, el13, {throwOnError: false});
//     katex.render(String.raw`d_{сл}`, el14, {throwOnError: false});
//     katex.render(String.raw`\lambda_{сл}`, el15, {throwOnError: false});
//     katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, 
//       el16, {throwOnError: false});
//     katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl2}} \cdot
//       ln(\frac {${this._item.diamsln}} {${this._item.dsl}}) = ${this._item.rsl2.toFixed(3)}`, el17, {throwOnError: false});
//     katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot D_{сл} \cdot \alpha_{нар}}`, el18, {throwOnError: false});
//     katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot ${this._item.diamsln} \cdot ${this._item.alphanp2}} 
//       = ${Number(this._item.rnp).toFixed(3)}`, el19, {throwOnError: false});
//     katex.render(String.raw`k = \dfrac {1} {R_{вн} + \sum R_{сл} + R_{ нар}}`, el20, {throwOnError: false});
//     katex.render(String.raw`k = \dfrac {1} {${this._item.rbh.toFixed(3)} + ${this._item.rsl.toFixed(3)} 
//       + ${this._item.rsl2.toFixed(3)} + ${this._item.rnp.toFixed(3)}} = ${this._item.k.toFixed(3)}`,
//       el21, {throwOnError: false});
//     katex.render(String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L`, el22, {throwOnError: false});
//     katex.render(String.raw`t^B`, el23, {throwOnError: false});
//     katex.render(String.raw`Q_{tr}^{ht} = ${this._item.k.toFixed(3)} \cdot (${this._item.th} - ${this._item.tb})
//       \cdot ${this._item.l} = ${this._item.qht.toFixed(3)} Вт`, el24, {throwOnError: false});
//     katex.render(String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q}`,
//       el25, {throwOnError: false});
//     katex.render(String.raw`T_1`, el26, {throwOnError: false});
//     katex.render(String.raw`T_2`, el27, {throwOnError: false});
//     katex.render(String.raw`T_2 = \dfrac {3,6 \cdot ${this._item.q} \cdot 
//       ${this._item.t1} - ${this._item.qht.toFixed(3)} \cdot 0,86} {3,6 \cdot ${this._item.q}} 
//       = ${this._item.t2.toFixed(3)}`, el28, {throwOnError: false});
  
//     return cardElement;
//   }
// }