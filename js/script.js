const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__btn_action_close');
const profilInfo = document.querySelector('.profile__info');
const profilSubtitle = document.querySelector('.profile__info-subtitle');
const saveBtn = popup.querySelector('.popup__btn_action_submit');
const sectionFotoCard = document.querySelector('.foto__grup');
const popupAddCard = document.querySelector('.popup__add_form');
const formElement = popup.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup__add_card');
const openPopupEditBtn = document.querySelector('.profile__abb-button');
const closePopupEdit = popupAdd.querySelector('.popup__btn_action_close');
const fotoGrup = document.querySelector('.foto__grup');
const fotoList = document.querySelector('.foto__list');
const windowCard = document.querySelector('.popup__foto');
const windowFoto = document.querySelector('.popup__container_window');
const fotoItem = document.querySelector('.foto__items');
const closeImg = document.querySelector('.popup__btn_action_img');


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

function savePopupValue() {
    profilInfo.textContent = nameInput.value
    profilSubtitle.textContent = jobInput.value 
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    savePopupValue();
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler); 
openPopup.addEventListener('click', setPopupInoutValue);
closePopup.addEventListener('click', popupToggle);

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


function popupEditToggle() {
    popupAdd.classList.toggle('popup_open');
}

openPopupEditBtn.addEventListener('click', popupEditToggle);// откыртие и закрытие второго модального окна
closePopupEdit.addEventListener('click', popupEditToggle);


 
 //добавление карточек из коробки
function addPhotoCardToDOM(elementLink, elementName) {
    const templateCard = document.querySelector('#templateFoto').content;
    const templateItems = templateCard.querySelector('.foto__list').cloneNode(true);
    const btnDelete = templateItems.querySelector('.foto__delete-button');
    templateItems.querySelector('.foto__figcaption').textContent = elementName;
    templateItems.querySelector('.foto__items').alt = elementName;
    templateItems.querySelector('.foto__items').src = elementLink;


    //лайк карточки
    const likeBtn = templateItems.querySelector('.foto__like');
    likeBtn.addEventListener('click', () => {
      likeToggle(likeBtn);
    });


// удаление карточки
    btnDelete.addEventListener('click', deleteCardItems);

    const fotoItem = templateItems.querySelector('.foto__items')
    fotoItem.addEventListener('click', () => {
    openWindowCard({name:elementName, link:elementLink});
    });

    return templateItems;
}
//like
  function likeToggle(likeBtn) {
    likeBtn.classList.toggle('foto__like-black');
  }


  //удаление карточки
  function deleteCardItems(evt) {
    const elementDelete = evt.target.closest('.foto__list');
    elementDelete.remove();
  }

// из коробки
    initialCards.forEach((data) => {
      const newCard = addPhotoCardToDOM(data.link, data.name);
      fotoGrup.append(newCard);
    });

//создание карточки
function addCard(evt) {
  evt.preventDefault();

const data = {
  name: document.querySelector('.popup__item_type_title').value,
  link: document.querySelector('.popup__item_type_link').value
}


 fotoGrup.prepend(addPhotoCardToDOM(data.link, data.name))
 evt.currentTarget.reset();
 popupEditToggle();
}


//сохранение и закрытие второго модального окна.
popupAddCard.addEventListener('submit', addCard);


function openWindowCard(data) {
  windowCard.querySelector('.popup__image_foto').src = data.link;
  windowCard.querySelector('.popup__image-caption').textContent = data.name;
  windowCard.classList.add('popup_open');
}






























