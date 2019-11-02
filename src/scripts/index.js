import '../pages/index.css';
import './script.js';
import Validation from './valid.js';
import Card from './card.js';
  
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
  const cardButton = document.querySelector('.popup__button');
  const validation = new Validation(); 
  
  
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
  
  
 
