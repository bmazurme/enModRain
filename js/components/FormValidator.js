export class FormValidator {
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }
  
    enableValidation() {
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(this._formElement);
    }
  
    resetValidation() {   
      this._formElement.reset();

      const errorList = Array.from(this._formElement.querySelectorAll(`.${this._config.errorClass}`));
      const labelList = Array.from(this._formElement.querySelectorAll('.inbox__label_error'));
      const borderList = Array.from(this._formElement.querySelectorAll('.inbox__input_invalid'));

      this._toggleButtonState();
      errorList.forEach((inputElement) => { this._hideError(inputElement); });
      labelList.forEach((labelElement) => { labelElement.classList.remove('inbox__label_error'); });
      borderList.forEach((labelElement) => { labelElement.classList.remove('inbox__input_invalid'); });
    }
    
    _hideError(inputElement) {
      inputElement.textContent = '';
      inputElement.classList.remove('inbox__input_invalid');
    }
  
    _setEventListeners(formElement) {
      this._toggleButtonState();
      const checkInputValidity = (formElement, inputElemen) => this._checkInputValidity(formElement, inputElemen);
      const toggleButtonState = () => this._toggleButtonState();  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement);
          toggleButtonState();
        });
      });
    };
  
    _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    }
  
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      }); 
    }
  
    _showInputError (formElement, inputElement, errorMessage) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
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
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._config.errorLine);
      this._toggleLabel(formElement, inputElement);

      const bar = formElement.querySelector(`.${inputElement.id}-bar`);
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