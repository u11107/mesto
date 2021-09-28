const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__btn_action_close');

const profilInfo = document.querySelector('.profile__info');
const profilSubtitle = document.querySelector('.profile__info-subtitle');

const saveBtn = popup.querySelector('.popup__btn_action_submit');

const popupAdd = document.querySelector('.popup__add_card');// второй модальное окно
const openPopupEditBtn = document.querySelector('.profile__abb-button');
const closePopupEdit = popupAdd.querySelector('.popup__btn_action_close');

const foto = document.querySelector('.foto');// like
const blackLike = foto.querySelector('.foto__like');
const btnFotoLike = foto.querySelector('.foto__like-black');

let formElement = popup.querySelector('.popup__form');// поля ввода для первого модального она
let nameInput = popup.querySelector('.popup__item_type_name');
let jobInput = popup.querySelector('.popup__item_type_vocation');

function popupToggle() {
    popup.classList.toggle('popup_open');
}

function popupEditToggle() {
    popupAdd.classList.toggle('popup_open');
}

function likeToggle() {
    blackLike.classList.toggle('foto__like-black')
}


function setPopupInoutValue() {
    nameInput.value = profilInfo.textContent
    jobInput.value = profilSubtitle.textContent
    popupToggle();

}

function setPopupAdd() {
    nameInput.value = profilInfo.textContent
    jobInput.value = profilSubtitle.textContent
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

closePopup.addEventListener('click', popupToggle);// открытие и закрытие первого модально окна
openPopup.addEventListener('click', setPopupInoutValue);


openPopupEditBtn.addEventListener('click', popupEditToggle);// откыртие и закрытие второго модального окна
closePopupEdit.addEventListener('click', popupEditToggle);

btnFotoLike.addEventListener('click', likeToggle);// слушатель кнопки лайк



