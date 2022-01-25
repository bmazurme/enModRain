import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardDthermo extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;

    console.log('===');
console.log(this._item);
console.log('===');

    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._removeButton = settings.removeButton;
    this._printButton = settings.printButton;
  }

  _printCard(evn) {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.save(`CalcRain ${this._item.name}.pdf`);
  }

  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._removeButton);
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));
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
  
    katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu}`, el1, {throwOnError: false});
    katex.render(String.raw`Re = \dfrac {Vd_{тр}} {\nu} = ${Number(this._item.re).toFixed(2)}`, el2, {throwOnError: false});
    katex.render(String.raw`{\nu}`, el3, {throwOnError: false});
    katex.render(String.raw`Nu = 0,021 \cdot Re^{0,8} \cdot Pr^{0,43}`, el4, {throwOnError: false});
    katex.render(String.raw`Nu = 0,021 \cdot ${this._item.re.toFixed(2)} ^{0,8} \cdot ${Number(this._item.pr).toFixed(2)} ^{0,43} = ${this._item.nu.toFixed(2)}`, el5, {throwOnError: false});
    katex.render(String.raw`Pr`, el6, {throwOnError: false});
    katex.render(String.raw`\alpha_{вн} = \dfrac {Nu \cdot \lambda_t} {d_{тр}} = \dfrac { ${this._item.nu.toFixed(2)} \cdot ${this._item.ham.toFixed(2)}} {${this._item.dtr}} = ${this._item.alpha.toFixed(2)}`, el7, {throwOnError: false});
    katex.render(String.raw`\lambda_t`, el8, {throwOnError: false});
    katex.render(String.raw`R_{ВН} = \dfrac 1 {\pi \cdot d_{тр} \cdot \alpha_{ВН}} = \dfrac 1 {\pi \cdot ${this._item.dtr} \cdot ${this._item.alpha.toFixed(2)}} = ${this._item.rbh.toFixed(2)}`, el9, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, el10, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl}} \cdot ln(\frac {${this._item.dsl}} {${this._item.dtr}}) = ${this._item.rsl.toFixed(3)}`, el11, {throwOnError: false});
    katex.render(String.raw`R_{сл}`, el12, {throwOnError: false});
    katex.render(String.raw`D_{сл}`, el13, {throwOnError: false});
    katex.render(String.raw`d_{сл}`, el14, {throwOnError: false});
    katex.render(String.raw`\lambda_{сл}`, el15, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot \lambda_{сл}} \cdot ln(\frac {D_{сл}} {d_{сл}})`, el16, {throwOnError: false});
    katex.render(String.raw`R_{сл} = \dfrac 1 {\pi \cdot ${this._item.alphasl2}} \cdot ln(\frac {${this._item.diamsln}} {${this._item.dsl}}) = ${this._item.rsl2.toFixed(3)}`, el17, {throwOnError: false});
    katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot D_{сл} \cdot \alpha_{нар}}`, el18, {throwOnError: false});
    katex.render(String.raw`R_{нар} = \dfrac {1} {\pi \cdot ${this._item.diamsln} \cdot ${this._item.alphanp2}} =  ${Number(this._item.rnp).toFixed(3)}`, el19, {throwOnError: false});
    katex.render(String.raw`k = \dfrac {1} {R_{вн} + \sum R_{сл} + R_{ нар}}`, el20, {throwOnError: false});
    katex.render(String.raw`k = \dfrac {1} {${this._item.rbh.toFixed(3)} + ${this._item.rsl.toFixed(3)} + ${this._item.rsl2.toFixed(3)} + ${this._item.rnp.toFixed(3)}} = ${this._item.k.toFixed(3)}`, el21, {throwOnError: false});
    katex.render(String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L`, el22, {throwOnError: false});
    katex.render(String.raw`t^B`, el23, {throwOnError: false});
    katex.render(String.raw`Q_{tr}^{ht} = k \cdot (t^h - t^B) \cdot L = ${this._item.k.toFixed(3)} \cdot (${this._item.th} - ${this._item.tb}) \cdot ${this._item.l} = ${this._item.qht.toFixed(3)} Вт`, el24, {throwOnError: false});
    katex.render(String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q}`, el25, {throwOnError: false});
    katex.render(String.raw`T_1`, el26, {throwOnError: false});
    katex.render(String.raw`T_2`, el27, {throwOnError: false});
    katex.render(String.raw`T_2 = \dfrac {3,6 \cdot q \cdot T_1 - Q_{тр}^{ht} \cdot 0,86} {3,6 \cdot q} = \dfrac {3,6 \cdot ${this._item.q} \cdot ${this._item.t1} - ${this._item.qht.toFixed(3)} \cdot 0,86} {3,6 \cdot ${this._item.q}} = ${this._item.t2.toFixed(3)}`, el28, {throwOnError: false});
  

    // const el1 = cardElement.querySelector('.formula1');
    // const el2 = cardElement.querySelector('.formula2');
    // const el3 = cardElement.querySelector('.formula3');
    // const el4 = cardElement.querySelector('.formula4');
    // const el5 = cardElement.querySelector('.formula5');
    // const el6 = cardElement.querySelector('.formula6');
    // const el7 = cardElement.querySelector('.formula7');
    // const el8 = cardElement.querySelector('.formula8');
    // const el9 = cardElement.querySelector('.formula9');
    // const el10 = cardElement.querySelector('.formula10');
    // const el11 = cardElement.querySelector('.formula11');
    // const el12 = cardElement.querySelector('.formula12');
    // const el13 = cardElement.querySelector('.formula13');
    // const el14 = cardElement.querySelector('.formula14');
    // const el15 = cardElement.querySelector('.formula15');
    // const el16 = cardElement.querySelector('.formula16');
    // const el17 = cardElement.querySelector('.formula17');
    // const el18 = cardElement.querySelector('.formula18');

    // katex.render(String.raw`Q_ц, л/с`, el1, {throwOnError: false});
    // katex.render(String.raw`Q_ц = \dfrac{Q^{ht}}{\rho \cdot c \cdot (t^1 - t^2)}`, el2, {throwOnError: false});
    // katex.render(String.raw`Q^{ht} - `, el3, {throwOnError: false});
    // katex.render(String.raw`Вт`, el4, {throwOnError: false});
    // katex.render(String.raw`Q^{ht} = ${this._item.qht} \space Вт`, el5, {throwOnError: false});
    // katex.render(String.raw`\rho \space -`, el6, {throwOnError: false});
    // katex.render(String.raw`кг / м^{3}`, el15, {throwOnError: false});
    // katex.render(String.raw`кДж / кг \degree C`, el16, {throwOnError: false});
    // katex.render(String.raw`\degree C`, el17, {throwOnError: false});
    // katex.render(String.raw`\degree C`, el18, {throwOnError: false});
    // katex.render(String.raw`\rho = ${this._item.p.toFixed(2)} \space кг / м^{3}`, el7, {throwOnError: false});
    // katex.render(String.raw`с - `, el8, {throwOnError: false});
    // katex.render(String.raw`с = ${this._item.c.toFixed(2)} \space кДж / кг \degree C`, el9, {throwOnError: false});
    // katex.render(String.raw`t^1 - `, el10, {throwOnError: false});
    // katex.render(String.raw`t^1 = ${this._item.t1} \degree C`, el11, {throwOnError: false});
    // katex.render(String.raw`t^2 - `, el12, {throwOnError: false});
    // katex.render(String.raw`t^2 = ${this._item.t2} \degree C`, el13, {throwOnError: false});
    // katex.render(String.raw`Q_ц = \dfrac{${this._item.qht}}{${this._item.p} \cdot ${this._item.c} \cdot (${this._item.t1} - ${this._item.t2})} = ${this._item.qc.toFixed(2)} \space л/с`, el14, {throwOnError: false});

    return cardElement;
  }
}