import { FormValidator } from '../components/FormValidator.js';
import { configNew as config } from "../config.js";

const form = document.querySelector('.registration__form');
const button = document.querySelector('.form__toggle');
const formValidator = new FormValidator(config, form);
document.addEventListener('submit', redirectToProfile);

formValidator.enableValidation();
button.addEventListener('click', toggle);

function toggle() {
  const input = document.getElementById('password-input');
  button.classList.toggle('form__toggle_disabled');

  if (input.type === 'password') {            
      input.type = 'text';
    } else {
      input.type = 'password';
    }
}

function redirectToProfile(evt) {
  evt.preventDefault(); 
  document.removeEventListener('submit', redirectToProfile);
  window.location.replace('../profile.html');
}