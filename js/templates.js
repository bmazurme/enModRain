import { CardProject } from "./cards/CardProject.js";
import { FormValidator } from './FormValidator.js';
import { config } from "./config.js";
import { projects as data } from "./data/projects.js";

const modal = document.querySelector('.modal');
const yes = modal.querySelector('.modal__remove');
const no = modal.querySelector('.modal__cancel');

yes.addEventListener('click', confirm);
no.addEventListener('click', closePopupByConfirm);

function confirm(evt) {
  const openedPopup = document.querySelector('.popup_active');
  closePopup(openedPopup);
  alert('yes');
}
function closePopupByConfirm() {
  const openedPopup = document.querySelector('.popup_active');
  closePopup(openedPopup);
  alert('no');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
}