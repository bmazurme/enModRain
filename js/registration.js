import { FormValidator } from './FormValidator.js';
import { config } from "./config.js";


const form = document.querySelector('.registration__form');
const button = document.querySelector('.form__toggle');
const formValidator = new FormValidator(config, form);

formValidator.enableValidation();
button.addEventListener('click', toggle);

function toggle() {
    const input = document.getElementById('password-input');
    button.classList.toggle('form__toggle_disabled');
    console.log(input.type);

    if (input.type === 'password') {            
        input.type = 'text';
      } else {
        input.type = 'password';
      }
}