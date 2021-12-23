import {initialCards} from './initialCards.js';
import {lockButton} from './validate.js';
import {config} from './config.js';

const addButton = document.querySelector('.profile__add');
const formAddCard = document.querySelector('.form_type_add');
const nameFormAddCard = formAddCard.querySelector('.form__input_type_name');
//const linkFormAddCard = formAddCard.querySelector('.form__input_type_link');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const areaTemplate = document.querySelector('#area-template').content;
const resultTemplate = document.querySelector('#result-template').content;

const blockArea  = document.querySelector('.block__area');
const blockResult  = document.querySelector('.block__result');


const cardsContainer = document.querySelector('.elements');
const saveButton = formAddCard.querySelector('.form__save');


//const q = formAddCard.querySelector('.form__input_type_q');
//const qPlus = formAddCard.querySelector('.form__input_type_qplus');
//const q5 = formAddCard.querySelector('.form__input_type_q5');
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

// function openImagePopup(item) {
//   const slideImage = popupTypeSlide.querySelector('.slide__image');
//   slideImage.src = item.link;
//   slideImage.alt = item.name;
//   openPopup(popupTypeSlide);
// }

// Block 

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__remove');
  const likeButton = cardElement.querySelector('.element__like');
  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", likeToggle);
  cardElement.querySelector('.element__name').textContent = item.name;
  cardElement.querySelector('.element__result').textContent = item.link;
  
  return cardElement;
}

function likeToggle(event) {
  event.target.classList.toggle('element__like_checked');
}

function deleteCard(evn) {
  evn.target.closest('.element').remove();
}

let sumArea = 0
let q5 = 0;

function calcRain() {
  let q = 0;

  sumArea = Number(roof.value) + Number(facade.value) * 0.3;
  

  if (Number(slope.value) < 1.5) {
    q = sumArea * Number(q20.value) / 10000;
  } else {
    q5 = 4 ** Number(n.value) * Number(q20.value);
    q = sumArea * q5 / 10000;
  }
  return q;
}



function saveCardForm(evt) {
  evt.preventDefault();
  let q = calcRain();


  katex.render(String.raw`F_1 = ${roof.value} \space м^2`, el7, {throwOnError: false});
  katex.render(String.raw`F_2 = ${facade.value} \space м^2`, el10, {throwOnError: false});
  katex.render(String.raw`F = ${roof.value} + 0.3 \cdot ${facade.value} = ${sumArea} \space м^2`, el14, {throwOnError: false});
  katex.render(String.raw`Q = ${q20.value} \cdot ${sumArea} \space / \space 10000 = ${q} \space л/с`, el27, {throwOnError: false});
  katex.render(String.raw`${q5} \cdot ${sumArea} = ${q} \space л/с`, el22, {throwOnError: false});

  const newCard = {
    name: nameFormAddCard.value,
    link: q//linkFormAddCard.value
  };
  const element = createCard(newCard);
  cardsContainer.prepend(element);


  if (Number(slope.value) >= 1.5) {
    blockArea.append(areaTemplate);
    blockResult.prepend(resultTemplate);
  }



  closePopup(popupTypeAdd);
}

// Block 
// initialCards.forEach(item => {
//   const element = createCard(item);
//   cardsContainer.append(element);
// });

formAddCard.addEventListener('submit', saveCardForm);
addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

// 
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

// window.addEventListener("load", function () {
//   katex.render(String.raw`${roof.value}`, el8, {throwOnError: false});
// });

const el1 = document.getElementById("formula1");
const el2 = document.getElementById("formula2");
const el3 = document.getElementById("formula3");
const el4 = document.getElementById("formula4");
const el5 = document.getElementById("formula5");
const el6 = document.getElementById("formula6");
const el7 = document.getElementById("formula7");
const el10 = areaTemplate.getElementById("formula10");
const el13 = areaTemplate.getElementById("formula13");
const el14 = areaTemplate.getElementById("formula14");
const el21 = resultTemplate.getElementById("formula21");
const el22 = resultTemplate.getElementById("formula22");
const el27 = document.getElementById("formula27");
//const el34 = document.getElementById("formula34");

window.addEventListener("load", function () {
  katex.render(String.raw`Q`, el1, {throwOnError: false});
  katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, el2, {throwOnError: false});
  katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, el3, {throwOnError: false});
  katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
  katex.render(String.raw`q_{5}`, el5, {throwOnError: false});
  katex.render(String.raw`q_{5} = 4^n \cdot q_{20}`, el6, {throwOnError: false});
  
  katex.render(String.raw`F_1 = ${roof.value} \space м^2`, el7, {throwOnError: false});
  katex.render(String.raw`F_2 = ${facade.value} \space м^2`, el10, {throwOnError: false});
  katex.render(String.raw`F = \space F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
  katex.render(String.raw`F = ${roof.value} + 0.3 \cdot ${facade.value} = ${sumArea} \space м^2`, el14, {throwOnError: false});

  katex.render(String.raw`q_{5} = 4`, el21, {throwOnError: false});
  katex.render(String.raw`${q5} \cdot ${sumArea} = 0`, el22, {throwOnError: false});
  katex.render(String.raw`Q = ${q20.value} \cdot ${sumArea} \space / \space 10000 = 0 \space л/с`, el27, {throwOnError: false});
  //katex.render(String.raw`Q = ${facade} \cdot ${facade} / \space 10000 = ${facade} л/с`, el34, {throwOnError: false});
});