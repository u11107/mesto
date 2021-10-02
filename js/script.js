const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__btn_action_close');

const profilInfo = document.querySelector('.profile__info');
const profilSubtitle = document.querySelector('.profile__info-subtitle');

const saveBtn = popup.querySelector('.popup__btn_action_submit');

const sectionFotoCard = document.querySelector('.foto__grup');



let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__item_type_name');
let jobInput = popup.querySelector('.popup__item_type_vocation');

function popupToggle() {
    popup.classList.toggle('popup_open');
}

function setPopupInoutValue() {
    nameInput.value = profilInfo.textContent
    jobInput.value = profilSubtitle.textContent
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler); 

function savePopupValue() {
    profilInfo.textContent = nameInput.value
    profilSubtitle.textContent = jobInput.value 
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    savePopupValue();
    popupToggle();
}

closePopup.addEventListener('click', popupToggle);
openPopup.addEventListener('click', setPopupInoutValue);

const initialCards  = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const popupAdd = document.querySelector('.popup__add_card');// второй модальное окно
const openPopupEditBtn = document.querySelector('.profile__abb-button');
const closePopupEdit = popupAdd.querySelector('.popup__btn_action_close');

function popupEditToggle() {
    popupAdd.classList.toggle('popup_open');
}

openPopupEditBtn.addEventListener('click', popupEditToggle);// откыртие и закрытие второго модального окна
closePopupEdit.addEventListener('click', popupEditToggle);


//добавление карточек из коробки
 const fotoGrup = document.querySelector('.foto__grup');

function addPhotoCardToDOM(elementLink, elementName) {
    const templateCard = document.querySelector('#templateFoto').content;
    const templateItems = templateCard.querySelector('.foto__list').cloneNode(true);
    templateItems.querySelector('.foto__items').src = elementLink;
    templateItems.querySelector('.foto__items').alt = elementName;
    templateItems.querySelector('.foto__figcaption').textContent = elementName;
    return templateItems;
};


    initialCards.forEach((data) => {
      const newCard = addPhotoCardToDOM(data.link, data.name);
      fotoGrup.append(newCard);
    });
  

    