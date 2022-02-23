import { FormValidator } from './FormValidator.js';

export const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
      formValidators[formName] = validator;
   validator.enableValidation();
  });
};