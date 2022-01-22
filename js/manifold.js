import {calcManifold} from "./calc/calcManifold.js";

const addButton = document.querySelector('.calculate__add');
const formAddCard = document.querySelector('.form_type_add');
const popupTypeAdd = document.querySelector('.popup_type_add');
const closeButtonAdd = popupTypeAdd.querySelector('.popup__close');

const addFieldButton = document.querySelector('.field__add');
const removeFieldButton = document.querySelector('.field__remove');

const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;


function openAddCardPopup() {
    formAddCard.reset();
    openPopup(popupTypeAdd);
}

function openPopup(popup) {
    document.addEventListener('keydown', (evt) => keydownEsc(popup, evt));
    popup.classList.add('popup_active');
}

function closePopup(popup) {
    document.removeEventListener('keydown', (evt) => keydownEsc(popup, evt));
    popup.classList.remove('popup_active');
}

function addField() {
    const count = document.querySelectorAll(".form__input").length;
    const field = `<div class="form__box">
                        <input placeholder="Диаметр патрубка №${count + 1}" class="form__input form__input_type_name"
                               required minlength="1" maxlength="30" name="name" id="nameCard-input">
                        <span class="nameCard-input-error form__input-error"></span>
                   </div>`
    const fields = document.querySelectorAll('.form__box');
    if (fields.length === 0) {
        fields[0].insertAdjacentHTML("afterend", field);
    } else {
        fields[fields.length - 1].insertAdjacentHTML("afterend", field);
    }
}

function removeLastField() {
    const fields = document.querySelectorAll('.form__box');
    if (fields.length > 1) {
        document.querySelector('.form_type_add').removeChild(fields[fields.length - 1]);
    }
}

function saveCardForm(evt) {
    evt.preventDefault();
    const element = createCard();
    cardsContainer.prepend(element);
    closePopup(popupTypeAdd);
}

function keydownEsc(popup, evt) {
    if (evt.key === 'Escape') {
        closePopup(popup);
    }
}

function deleteCard(evn) {
    evn.target.closest('.element').remove();
}

function createCard(item) {
    const fields = document.querySelectorAll('.form__box');

    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const deleteButton = cardElement.querySelector('.element__remove');
    deleteButton.addEventListener("click", deleteCard);
    cardElement.querySelector('.element__name').textContent = 'Наименование';
    cardElement.querySelector('.pipe__count').textContent = fields.length;

    const commonFormula = cardElement.querySelector('.commonFormula');
    const descrDiam = cardElement.querySelector('.descrDiam');
    const el4 = cardElement.querySelector('.formula4');
    const el5 = cardElement.querySelector('.formula5');

    katex.render(String.raw`S = \dfrac{\pi \cdot D^2}{4}`, commonFormula, {throwOnError: false});
    katex.render(String.raw`D`, descrDiam, {throwOnError: false});
    calcManifold(cardElement, fields);
    return cardElement;
}

addButton.addEventListener('click', openAddCardPopup);
closeButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));

addFieldButton.addEventListener('click', addField);
removeFieldButton.addEventListener('click', removeLastField);

formAddCard.addEventListener('submit', saveCardForm);
