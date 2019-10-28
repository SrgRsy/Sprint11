import {cardButton,imageContainer,editUserInfoButton,placesCardList,popupImage,userNameInfo,userJobInfo,api,group} from './index.js';
import {auth} from './api.js';
export default class Card {
    constructor(name, link) {
      this.placeCard = this.create(name, link);
  
    }
  
    like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
    remove(event) {
      event.target.closest('.place-card').remove()
    }
    create(name, link) {
      cardButton.setAttribute('disabled', true);
  
      const placeCard = document.createElement('div');
      const placeCardImage = document.createElement('div');
      const placeCardDeleteIconButton = document.createElement('button');
      const placeCardDescription = document.createElement('div');
      const placeCardName = document.createElement('h3');
      const placeCardCreateIconButton = document.createElement('button');
  
  
      placeCard.classList.add('place-card');
      placeCardImage.classList.add('place-card__image');
      placeCardImage.style.backgroundImage = "url(" + link + ")";
      placeCardDeleteIconButton.classList.add('place-card__delete-icon');
      placeCardDescription.classList.add('place-card__description');
      placeCardName.classList.add('place-card__name');
      placeCardName.textContent = name;
      placeCardCreateIconButton.classList.add('place-card__like-icon');
  
      placeCard.appendChild(placeCardImage);
      placeCard.appendChild(placeCardDescription);
      placeCardImage.appendChild(placeCardDeleteIconButton);
      placeCardDescription.appendChild(placeCardName);
      placeCardDescription.appendChild(placeCardCreateIconButton);
      placesCardList.appendChild(placeCard);
      document.forms.new.reset();
  
  
  
  
  
      placeCard.addEventListener('click', (event) => {
        if (event.target.classList.contains('place-card__like-icon')) {
          event.target.classList.toggle('place-card__like-icon_liked');
        } else if (event.target.classList.contains('place-card__delete-icon')) {
          event.target.closest('.place-card').remove()
        }
      });
  
  
      placeCardImage.addEventListener('click', (event) => {
        if (event.target.classList.contains('place-card__image')) {
          imageContainer.classList.add('popup_is-opened');
          const imageUrl = event.target.style.backgroundImage;
          const imageUrlSplice = imageUrl.split('').slice(5, -2).join('');
          popupImage.src = imageUrlSplice;
        }
      });
  
      editUserInfoButton.addEventListener('click', this.refreshData);
  
    }
  
    refreshData() {
      const form = document.forms.edit;
      const editName = form.elements.userName;
      const editUserInfo = form.elements.info;
      userNameInfo.textContent = editName.value;
      userJobInfo.textContent = editUserInfo.value;
      api.correctProfile(userNameInfo.textContent, userJobInfo.textContent, group, auth);
      form.reset();
    }
  
  
  }