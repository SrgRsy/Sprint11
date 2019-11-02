
export default class Popup {
    constructor(container, button, button2) {
  
      this.container = container;
      this.button = button;
      this.button2 = button2;
  
  
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
  
  
  
      this.button.addEventListener('click', this.close);
  
  
      this.button2.addEventListener('click', this.open);
    }
  
    open() {
      this.container.classList.add('popup_is-opened');
  
    }
    close() {
      this.container.classList.remove('popup_is-opened');
    }
  }

  
const openForm = document.querySelector('.user-info__button');
const formContainer = document.querySelector('.popup');
const editFormContainer = document.querySelector('.popup-edit');
const closeForm = document.querySelector('.popup__close');
const closeEditForm = editFormContainer.querySelector('.popup__close');
const imageContainer = document.querySelector('.popup-image');
const closeImageForm = imageContainer.querySelector('.popup__close');
const openEditForm = document.querySelector('.button-edit');
const editUserInfoButton = editFormContainer.querySelector('.popup__button-edit');
const popupImage = document.querySelector('.popup__image');
const cardButton = document.querySelector('.popup__button');
const popupForm = new Popup(formContainer, closeForm, openForm);
const popupFormAccept = new Popup(formContainer, cardButton, openForm);
const popupEdit = new Popup(editFormContainer, closeEditForm, openEditForm);
const popupEditAccept = new Popup(editFormContainer, editUserInfoButton, openEditForm);
const popupImg = new Popup(imageContainer, closeImageForm, popupImage);

  
 