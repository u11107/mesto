const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__btn_action_close');

const profilInfo = document.querySelector('.profile__info');
const profilSubtitle = document.querySelector('.profile__info-subtitle');

const saveBtn = popup.querySelector('.popup__btn_action_submit');



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
saveBtn.addEventListener('submit', savePopupValue);





