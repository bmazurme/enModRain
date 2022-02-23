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
      this._setEventListeners();
    }
  
    resetValidation() {   
      this._formElement.reset();
      this._inputList.forEach((inputElement) => {
        this._hideError(inputElement);
        const label = this._formElement.querySelector(`.${inputElement.id}-label`);
        label.classList.remove(`${this._config.inboxLabel}_error-empty`);
      });
      this._toggleButtonState();

    }
    
    _hideError(inputElement) {
      inputElement.textContent = '';
      inputElement.classList.remove('inbox__input_invalid');
      this._hideInputError (inputElement);
    }
  
    _setEventListeners() {
      this._toggleButtonState();
      const checkInputValidity = (inputElemen) => this._checkInputValidity(inputElemen);
      const toggleButtonState = () => this._toggleButtonState();  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          checkInputValidity(inputElement);
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
  
    _showInputError (inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
      inputElement.classList.add(this._config.inputErrorClass);
      inputElement.classList.add(this._config.errorLine);
      this._toggleLabel(inputElement, errorMessage);
    };

    _hideInputError (inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._config.inputErrorClass);
      inputElement.classList.remove(this._config.errorLine);
      this._toggleLabel( inputElement);
      const bar = this._formElement.querySelector(`.${inputElement.id}-bar`);
      bar.classList.remove(`${this._config.inboxBar}_error`);
    };

    _toggleLabel(inputElement, errorMessage) {
      const label = this._formElement.querySelector(`.${inputElement.id}-label`);
      const bar   = this._formElement.querySelector(`.${inputElement.id}-bar`);

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

    _checkInputValidity (inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError( inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError( inputElement);
      }
    };
  }