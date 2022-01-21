import { FormValidator } from './FormValidator.js';
import { config } from "./config.js";


const form = document.querySelector('.registration__form');

const formValidator = new FormValidator(config, form);
formValidator.enableValidation();















// const button = document.querySelector('.button__toggle');


// button.addEventListener('click', toggle);

// function toggle() {
//     console.log('1');
//     const input = document.getElementById('password-input');//.type = 'text';
//     // console.log(input);
//     console.log(input.type);
//     //input.setAttribute('type', 'password')
//     if (input.type === 'password') {            
//         input.type = 'text';
//       } else {
//          input.type = 'password';
//       }

// }
