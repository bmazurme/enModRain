export class FormValidator {
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
    }
  
    enableValidation() {
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(this._formElement);
    }
  
    resetValidation() {   
      this._formElement.reset();
      const errorList = Array.from(this._formElement
         .querySelectorAll(`.${this._config.errorClass}`));
      const inputList = Array.from(this._formElement
        .querySelectorAll(this._config.inputSelector));
      const buttonElement = this._formElement
        .querySelector(this._config.submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
      errorList.forEach((inputElement) => {
        this._hideError(inputElement);
      });
    }
    
    _hideError(inputElement) {
      inputElement.textContent = '';
    }
  
    _setEventListeners(formElement) {
      const inputList = Array.from(formElement
        .querySelectorAll(this._config.inputSelector));
      const buttonElement = formElement
        .querySelector(this._config.submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement)
      const checkInputValidity = (formElement, inputElemen) => 
        this._checkInputValidity(formElement, inputElemen);
      const toggleButtonState = (inputList, buttonElement) => 
        this._toggleButtonState(inputList, buttonElement);
  
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement);
          toggleButtonState(inputList, buttonElement);
        });
      });
    };
  
    _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._config.inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._config.inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      }); 
    }
  
    _showInputError (formElement, inputElement, errorMessage) {
      const errorElement = formElement
        .querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
      inputElement.classList.add(this._config.errorLine);

      this._toggleLabel(formElement, inputElement, errorMessage);
    };

    _toggleLabel(formElement, inputElement, errorMessage) {

      const label = formElement.querySelector(`.${inputElement.id}-label`);
      const bar   = formElement.querySelector(`.${inputElement.id}-bar`);

      if (errorMessage) {
        bar.classList.add(`${this._config.inboxBar}_error`);
      }
 

      if (inputElement.value) {
        label.classList.add(`${this._config.inboxLabel}_error`);
        label.classList.remove(`${this._config.inboxLabel}_error-empty`);
 
      } else {
        label.classList.remove(`${this._config.inboxLabel}_error`);
        label.classList.add(`${this._config.inboxLabel}_error-empty`);
      }
    }

    _hideInputError (formElement, inputElement) {
      const errorElement = formElement
      .querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._config.errorLine);
      this._toggleLabel(formElement, inputElement);

      const bar   = formElement.querySelector(`.${inputElement.id}-bar`);
      bar.classList.remove(`${this._config.inboxBar}_error`);
    };
    
    _checkInputValidity (formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    };
  }