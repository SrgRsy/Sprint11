export {cardButton,imageContainer,editUserInfoButton,placesCardList,popupImage,userNameInfo,userJobInfo,api,editFormContainer};
import Api from './api.js'
const cardButton = document.querySelector('.popup__button');
const imageContainer = document.querySelector('.popup-image');
const editFormContainer = document.querySelector('.popup-edit');
const editUserInfoButton = editFormContainer.querySelector('.popup__button-edit');
const placesCardList = document.querySelector('.places-list');
const popupImage = document.querySelector('.popup__image');
const userNameInfo = document.querySelector('.user-info__name');
const userJobInfo = document.querySelector('.user-info__job');
const api = new Api();
