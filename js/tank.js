import { calcDwmeter } from "./calc/calcDwmeter.js";






const addButton = document.querySelector('.calculate__add');
const formAddCard = document.querySelector('.form_type_add');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');




const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const th = formAddCard.querySelector('.form__input_type_th');//models.FloatField("Температура горячей воды в местах водоразбора, °C", default=65);
const tc = formAddCard.querySelector('.form__input_type_tc');//models.FloatField("Температура холодной воды на входе в водонагреватель, °C", default=5);
const qmid = formAddCard.querySelector('.form__input_type_qmid');//models.FloatField("В течение среднего часа, кВт", default=None);
const qmax = formAddCard.querySelector('.form__input_type_qmax');//models.FloatField("В течение часа максимального водопотребления, кВт", default=None);
const qsp = formAddCard.querySelector('.form__input_type_qsp');//models.FloatField("Мощность водонагревателя, кВт", default=None);
const t = formAddCard.querySelector('.form__input_type_t');//models.FloatField("Время водоразбора, ч", default=12);
const k_hr_ht = formAddCard.querySelector('.form__input_type_k_hr_ht');//models.FloatField("к1", default=0);
const k_hr_ht_sp = formAddCard.querySelector('.form__input_type_k_hr_ht_sp');//models.FloatField("к2", default=0);
const fi = formAddCard.querySelector('.form__input_type_fi');//models.FloatField("fi1", default=0);
const fi2 = formAddCard.querySelector('.form__input_type_fi2');//models.FloatField("fi2", default=0);
const v1 = formAddCard.querySelector('.form__input_type_v1');//models.FloatField("Полная вместимость емкости бака 1", default=0);
const v2 = formAddCard.querySelector('.form__input_type_v2');//models.FloatField("Полная вместимость емкости бака 2", default=0);
const w = formAddCard.querySelector('.form__input_type_w');//models.FloatField("w", default=0);
const w2 = formAddCard.querySelector('.form__input_type_w2');//models.FloatField("w2", default=0);
const b = formAddCard.querySelector('.form__input_type_b');//models.FloatField("Коэффициент запаса вместимости бака", default=1.0, choices=valb);

function openPopup(popup) {
  document.addEventListener('keydown', (evt) => keydownEsc(popup, evt));
  popup.classList.add('popup_active');
}
function closePopup(popup) {
  document.removeEventListener('keydown', (evt) => keydownEsc(popup, evt));
  popup.classList.remove('popup_active');
}
function openAddCardPopup() {
  formAddCard.reset();
  openPopup(popupTypeAdd); 
}
function deleteCard(evn) {
  evn.target.closest('.element').remove();
}
function saveCardForm(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameFormAddCard.value,
    th: th.value,
    tc: tc.value,
    qmid: qmid.value,
    qmax: qmax.value,
    t: t.value,
    fi: fi.value,
    k_hr_ht_sp: k_hr_ht_sp.value,
    k_hr_ht: k_hr_ht.value,
    qsp: qsp.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
  }
});

function keydownEsc(popup, evt) {
  if (evt.key === 'Escape') {
      closePopup(popup);
  }
}

function createCard(item) {
  //let result = calcDwmeter(item.q, item.s);
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__remove');
  deleteButton.addEventListener("click", deleteCard);
  cardElement.querySelector('.element__name').textContent = item.name;

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
  katex.render(String.raw`W_1 = \dfrac{${item.fi} \cdot ${item.t} \cdot ${item.qmid}}{1.16 \cdot (${item.th} - ${item.tc})}`, el2, {throwOnError: false});


  //katex.render(String.raw`W_1 = calc.fi|floatformat:3 \cdot calc.t \cdot calc.qmid / ( 1.16 \cdot ( ${item.th} - calc.tc ) ) = calc.w|floatformat:2`, el2, {throwOnError: false});
  katex.render(String.raw`\varphi`, el3, {throwOnError: false});
  katex.render(String.raw`\varphi_1 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1}`, el4, {throwOnError: false});
  katex.render(String.raw`\varphi_1 = 1 - ${item.k_hr_ht_sp} + (${item.k_hr_ht} - 1) \cdot \Big(\dfrac{ ${item.k_hr_ht_sp} }{${item.k_hr_ht}}\Big)^ \frac{${item.k_hr_ht}}{${item.k_hr_ht} - 1}`, el5, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht,sp}`, el6, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, el7, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{${item.qsp}}{${item.qmid}}`, el8, {throwOnError: false});

  //katex.render(String.raw`K_{hr}^{ht,sp} = ${item.qsp} / calc.qmid|floatformat:3 = calc.k_hr_ht_sp|floatformat:3`, el8, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht}`, el9, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, el10, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht} = calc.qmax|floatformat:3  / calc.qmid|floatformat:3 = calc.k_hr_ht|floatformat:3`, el11, {throwOnError: false});
  
  
  
  katex.render(String.raw`V = W \cdot B`, el12, {throwOnError: false});
  katex.render(String.raw`V_1 = calc.w|floatformat:2 \cdot calc.b = calc.v1|floatformat:2 м^3`, el13, {throwOnError: false});
  katex.render(String.raw`B`, el14, {throwOnError: false});
  katex.render(String.raw`Q_T^h`, el15, {throwOnError: false});
  katex.render(String.raw`Q_{hr}^h`, el16, {throwOnError: false});
  katex.render(String.raw`Q^{sp}`, el17, {throwOnError: false});
  katex.render(String.raw`T`, el18, {throwOnError: false});
  katex.render(String.raw`t^c`, el19, {throwOnError: false});
  katex.render(String.raw`t^h`, el20, {throwOnError: false});
  katex.render(String.raw`W = \dfrac{\varphi \cdot T \cdot Q_T^h}{1.16 \cdot (t^h - t^c)}`, el21, {throwOnError: false});
  katex.render(String.raw`W_2 = calc.fi2|floatformat:3 \cdot calc.t \cdot calc.qmid / ( 1.16 \cdot ( calc.th - calc.tc ) ) = calc.w2|floatformat:2`, el22, {throwOnError: false});
  katex.render(String.raw`\varphi`, el23, {throwOnError: false});
  katex.render(String.raw`\varphi_2 = 1 - K_{hr}^{ht,sp} + (K_{hr}^{ht} - 1) \cdot \Big(\dfrac{K_{hr}^{ht,sp}}{K_{hr}^{ht}}\Big)^ \frac{K_{hr}^{ht}}{K_{hr}^{ht} - 1} + \Big( \dfrac{K_{hr}^{ht,sp} - 1}{K_{hr}^{ht,sp}} \Big)^{K_{hr}^{ht}}`, el24, {throwOnError: false});
  katex.render(String.raw`\varphi_2 = 1 - calc.k_hr_ht_sp|floatformat:3 + (calc.k_hr_ht|floatformat:3 - 1) \cdot (calc.k_hr_ht_sp|floatformat:3/calc.k_hr_ht|floatformat:3 ) ^ (calc.k_hr_ht|floatformat:3/(calc.k_hr_ht|floatformat:3 - 1)) + (( calc.k_hr_ht_sp|floatformat:3- 1 ) / calc.k_hr_ht_sp|floatformat:3 ) ^ calc.k_hr_ht|floatformat:3  = calc.fi2|floatformat:3`, el25, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht,sp}`, el26, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht,sp} = \dfrac{Q^{sp}}{Q_T^{h}}`, el27, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht,sp} = calc.qsp|floatformat:3 / calc.qmid|floatformat:3 = calc.k_hr_ht_sp|floatformat:3`, el28, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht}`, el29, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht} = \dfrac{Q_{hr}^{h}}{Q_T^{h}}`, el30, {throwOnError: false});
  katex.render(String.raw`K_{hr}^{ht} = calc.qmax|floatformat:3 / calc.qmid|floatformat:3 = calc.k_hr_ht|floatformat:3`, el31, {throwOnError: false});
  katex.render(String.raw`V = W \cdot B`, el32, {throwOnError: false});
  katex.render(String.raw`V_2 = calc.w2|floatformat:2 \cdot calc.b = calc.v2|floatformat:2 м^3`, el33, {throwOnError: false});
  katex.render(String.raw`B`, el34, {throwOnError: false});
  katex.render(String.raw`Q_T^h`, el35, {throwOnError: false});
  katex.render(String.raw`Q_{hr}^h`, el36, {throwOnError: false});
  katex.render(String.raw`Q^{sp}`, el37, {throwOnError: false});
  katex.render(String.raw`T`, el38, {throwOnError: false});
  katex.render(String.raw`t^c`, el39, {throwOnError: false});
  katex.render(String.raw`t^h`, el40, {throwOnError: false});



  // const el2 = cardElement.querySelector('.formula2');
  // const el3 = cardElement.querySelector('.formula3');
  // const el4 = cardElement.querySelector('.formula4');
  // const el5 = cardElement.querySelector('.formula5');
  // const el6 = cardElement.querySelector('.formula6');

  // katex.render(String.raw`q`, el2, {throwOnError: false});
  // katex.render(String.raw`л/с`, el3, {throwOnError: false});
  // katex.render(String.raw`S`, el4, {throwOnError: false});
  // katex.render(String.raw`м/(м^3/ч)^2`, el5, {throwOnError: false});
  // katex.render(String.raw`h_{сч} = ${item.s} \cdot (3.6 \cdot ${item.q} )^2 = ${result.toFixed(2)} \space м`, el6, {throwOnError: false});

  
  // self.k_hr_ht = self.qmax / self.qmid
  //       self.k_hr_ht_sp = self.qsp / self.qmid

  //       self.fi = 1 - self.k_hr_ht_sp + (self.k_hr_ht - 1) * (self.k_hr_ht_sp / self.k_hr_ht) ** (self.k_hr_ht / (self.k_hr_ht - 1)) #self.k_hr_ht / self.k_hr_ht_sp
  //       self.fi2 =1 - self.k_hr_ht_sp + (self.k_hr_ht - 1) * (self.k_hr_ht_sp / self.k_hr_ht) ** (self.k_hr_ht / (self.k_hr_ht - 1)) + ((self.k_hr_ht_sp - 1) / self.k_hr_ht_sp) ** self.k_hr_ht

  //       self.w = self.fi * self.t * self.qmid / (1.16 * (self.th - self.tc))
  //       self.w2 = self.fi2 * self.t * self.qmid / (1.16 * (self.th - self.tc))

  //       self.v1 = self.w * self.b
  //       self.v2 = self.w2 * self.b
  
  return cardElement;
}















