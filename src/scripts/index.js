export {cardButton};
export {placesCardList};
export {editUserInfoButton};
import '../pages/index.css';
import Card from './card.js';
import Popup from './popUp.js';
import Validation from './valid.js';
import {auth} from './api.js';
import Api from './api.js';


  const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort3' : 'https://praktikum.tk/cohort3';  
  const userNameInfo = document.querySelector('.user-info__name');
  const userJobInfo = document.querySelector('.user-info__job');
  const api = new Api();
  const group = 'cohort3';
  const cardButton = document.querySelector('.popup__button');
  const openForm = document.querySelector('.user-info__button');
  const formContainer = document.querySelector('.popup');
  const closeForm = document.querySelector('.popup__close');
  const openEditForm = document.querySelector('.button-edit');
  const editFormContainer = document.querySelector('.popup-edit');
  const placesCardList = document.querySelector('.places-list');
  const editUserInfoButton = editFormContainer.querySelector('.popup__button-edit');
  const closeEditForm = editFormContainer.querySelector('.popup__close');
  const imageContainer = document.querySelector('.popup-image');
  const popupImage = document.querySelector('.popup__image');
  const closeImageForm = imageContainer.querySelector('.popup__close');
  const popupInput = document.querySelector('.popup__input_type_name');
  const popupInputLink = document.querySelector('.popup__input_type_link-url');
  const editButton = document.querySelector('.popup__button-edit');
  const formNew = document.forms.new;
  const formEdit = document.forms.edit;
  const userNameInput = formEdit.userName;
  const infoInput = formEdit.info;
  const errorMessage = document.querySelector('.error-message');
  const errorInfo = document.querySelector('.info-error');
  const formInputName = formNew.elements.name;
  const formInputLink = formNew.elements.link;
  const formInputEditName = formEdit.elements.userName;
  const formInputInfo = formEdit.elements.info;
  const popupForm = new Popup(formContainer, closeForm, openForm);
  const popupFormAccept = new Popup(formContainer, cardButton, openForm);
  const popupEdit = new Popup(editFormContainer, closeEditForm, openEditForm);
  const popupEditAccept = new Popup(editFormContainer, editUserInfoButton, openEditForm);
  const popupImg = new Popup(imageContainer, closeImageForm, popupImage);
  const validation = new Validation();
  const valid = {
    validationLenght: 'Должно быть от 2 до 30 символов',
    notEmpty: 'Поле не должно быть пустым'
  }
  api.getUser(group, auth);
  api.getArray(group, auth);
  

  
  
    
  
  //создание карточки 
  cardButton.addEventListener('click', function () {
    new Card(formInputName.value, formInputLink.value);
  });
  
  //Валидация
  popupInput.addEventListener('click', function () {
    validation.checkValidity(formInputEditName, errorMessage);
  });
  popupInputLink.addEventListener('click', function () {
    validation.checkValidity(formInputInfo, errorInfo);
  });
  
  userNameInput.addEventListener('input', function () {
    validation.checkValidity(formInputEditName, errorMessage)
  });
  infoInput.addEventListener('input', function () {
    validation.checkValidity(formInputInfo, errorInfo)
  });
  
  formNew.addEventListener('input', function () {
    validation.checkMinLength(formInputName, formInputLink, cardButton);
  });
  
  formEdit.addEventListener('input', function () {
    validation.checkMinLength(formInputEditName, formInputInfo, editButton);
  });
  
  
 