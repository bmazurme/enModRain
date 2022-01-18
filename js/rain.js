import {config} from './config.js';
import {calcRain} from './calc/calcRain.js';
import {lockButton} from './validate.js';

const addButton = document.querySelector('.calculate__add');

const mapButton = document.querySelector('.calculate__map');
const popupTypeSlide = document.querySelector('.popup_type_slide');
// const popupTypeMap = document.querySelector('.popup_type_map');
const closeButtonImage = popupTypeSlide.querySelector('.popup__close');

const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const card1Template = document.querySelector('#card1-template').content;
const cardsContainer = document.querySelector('.elements');

const saveButton= document.querySelector('.form__save');  

const n = formAddCard.querySelector('.form__input_type_n');
const q20 = formAddCard.querySelector('.form__input_type_q20');
const slope = formAddCard.querySelector('.form__input_type_slope');
const roof = formAddCard.querySelector('.form__input_type_roof');
const facade = formAddCard.querySelector('.form__input_type_facade');

// Block change of visibility state
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

  lockButton(saveButton, config.inactiveButtonClass);

  openPopup(popupTypeAdd); 
}

function openMapCardPopup() {
  //formAddCard.reset();

  //lockButton(saveButton, config.inactiveButtonClass);

  openPopup(popupTypeSlide); 
}

// Block 
function createCard(item) {
  let obj = calcRain(item.slope, item.roof, item.facade, item.q20, item.n);

  if (item.slope < 1.5) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const deleteButton = cardElement.querySelector('.box__remove');
    const el1 = cardElement.querySelector('.formula1');
    const el2 = cardElement.querySelector('.formula2');
    // const el3 = cardElement.querySelector('.formula3');
    const el4 = cardElement.querySelector('.formula4');
    const el7 = cardElement.querySelector('.formula7');
    const el10 = cardElement.querySelector('.formula10');
    const el13 = cardElement.querySelector('.formula13');
    const el14 = cardElement.querySelector('.formula14');
    const el27 = cardElement.querySelector('.formula27');

    katex.render(String.raw`Q`, el1, {throwOnError: false});
    katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, el2, {throwOnError: false});
    // katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, el3, {throwOnError: false});
    katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
    katex.render(String.raw`F_1 = ${roof.value} \space м^2`, el7, {throwOnError: false});
    katex.render(String.raw`F_2 = ${facade.value} \space м^2`, el10, {throwOnError: false});
    katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
    katex.render(String.raw`F = ${roof.value} + 0.3 \cdot ${facade.value} = ${obj.sumArea} \space м^2`, el14, {throwOnError: false});
    deleteButton.addEventListener("click", deleteCard);
    cardElement.querySelector('.element__name').textContent = item.name;
    katex.render(String.raw`Q = \dfrac {${q20.value} \cdot ${obj.sumArea}}{10000} = ${obj.q.toFixed(2)} \space л/с`, el27, {throwOnError: false});
    
    return cardElement;
  }
  else {
    const card1Element = card1Template.querySelector('.element').cloneNode(true);
    const deleteButton = card1Element.querySelector('.box__remove');
    const el1 = card1Element.querySelector('.formula1');
    // const el2 = card1Element.querySelector('.formula2');
    const el3 = card1Element.querySelector('.formula3');
    const el4 = card1Element.querySelector('.formula4');
    const el5 = card1Element.querySelector('.formula5');
    const el6 = card1Element.querySelector('.formula6');
    const el7 = card1Element.querySelector('.formula7');
    const el27 = card1Element.querySelector('.formula27');
    const el10 = card1Element.querySelector('.formula10');
    const el13 = card1Element.querySelector('.formula13');
    const el14 = card1Element.querySelector('.formula14');
    const el21 = card1Element.querySelector('.formula21');

    katex.render(String.raw`Q`, el1, {throwOnError: false});
    // katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, el2, {throwOnError: false});
    katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, el3, {throwOnError: false});
    katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
    katex.render(String.raw`q_{5}`, el5, {throwOnError: false});
    katex.render(String.raw`q_{5} = 4^n \cdot q_{20}`, el6, {throwOnError: false});
    katex.render(String.raw`q_{5} = 4^{${n.value}} \cdot ${q20.value} = ${obj.q5} \space л/с`, el21, {throwOnError: false});
    katex.render(String.raw`F_1 = ${roof.value} \space м^2`, el7, {throwOnError: false});
    katex.render(String.raw`F_2 = ${facade.value} \space м^2`, el10, {throwOnError: false});
    katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
    katex.render(String.raw`F = ${roof.value} + 0.3 \cdot ${facade.value} = ${obj.sumArea} \space м^2`, el14, {throwOnError: false});
  
    deleteButton.addEventListener("click", deleteCard);
    card1Element.querySelector('.element__name').textContent = item.name;
    katex.render(String.raw`Q = \dfrac { ${obj.q5} \cdot ${obj.sumArea}}{10000} = ${obj.q.toFixed(2)} \space л/с`, el27, {throwOnError: false});

    return card1Element;
  }
}

function deleteCard(evn) {
  evn.target.closest('.element').remove();
}

function saveCardForm(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameFormAddCard.value,
    slope: slope.value,
    roof: roof.value,
    facade: facade.value,
    q20: q20.value,
    n: n.value
  };

  const element = createCard(newCard);
  cardsContainer.prepend(element);
  closePopup(popupTypeAdd);
}

// Block 
// initialCards.forEach(item => {
//   const element = createCard(item);
//   cardsContainer.append(element);
// });

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
mapButton.addEventListener('click', openMapCardPopup);



closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));
closeButtonImage.addEventListener('click', () => closePopup(popupTypeSlide));

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