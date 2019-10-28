const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort3' : 'https://praktikum.tk/cohort3';  
export {auth};
import {placesCardList} from './index.js';
import CardList from './cardList.js';
export default class Api {
    constructor() {
        
    }
  
    getUser() {
      
      
      const name = document.querySelector('.user-info__name');
      const about = document.querySelector('.user-info__job');
      const avatar = document.querySelector('.user-info__photo');
  
      fetch(`${serverUrl}/users/me`, {
        headers: {
          authorization: `${auth}`
        }
      })
  
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
          return name.textContent = result.name, about.textContent = result.about, avatar.style.backgroundImage = 'url(' + result.avatar + ')';
        })
        .catch((err) => {
          console.log(err);
        });
  
  
    };
  
  
    getArray(group, auth) {
      fetch(`${serverUrl}/cards`, {
        headers: {
          authorization: `${auth}`
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
          new CardList(placesCardList, result);
        })
        .catch((err) => {
          console.log(err);
        });
  
    };
  
  
    correctProfile(nameProfile, aboutProfile, group, auth) {
      fetch(`${serverUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: `${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameProfile,
          about: aboutProfile
        })
      })
  
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
  }
  const auth = 'b6c23b96-d9c2-4098-b25a-8bda36901348';
  