
export default class Validation {
    constructor() {
    }
  
    checkMinLength(firstInput, secondInput, button) {
      if (firstInput.value.length <= 1 || secondInput.value.length <= 1) {
        button.setAttribute('disabled', true);
        button.classList.add('input__btn_disabled');
      } else {
        button.removeAttribute('disabled', true);
        button.classList.remove('input__btn_disabled');
      }
    }
  
  
    checkValidity(cont, error) {
      if (!cont.validity.valid) {
        error.textContent = valid.notEmpty;
        error.classList.add('error-message-active');
      } else if (cont.validity.valid) {
        error.classList.remove('error-message-active');
      }
      if (cont.value.length == 1) {
        error.textContent = valid.validationLenght;
        error.classList.add('error-message-active');
      } else if (cont.validity.valid) {
        error.classList.remove('error-message-active');
      }
    }
  }