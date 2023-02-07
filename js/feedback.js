const popupFeedback = document.querySelector('.popup-form-wrap');
const popupForm = popupFeedback.querySelector('.popup-form');
const popupFormLogin = popupForm.querySelector('.popup-form__input--name');
const popupFormEmail = popupForm.querySelector('.popup-form__input--email');
const popupFormMessage = popupForm.querySelector('.popup-form__input--message');
const feedbackOpenButton = document.querySelector('.location__button');
const feedbackCloseButton = popupFeedback.querySelector('.popup-form__close-button');

// OPEN POPUP
feedbackOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add('popup-feedback--show');
    popupFormLogin.focus();
});

// CLOSE POPUP
feedbackCloseButton.addEventListener('click', function() {
    popupFeedback.classList.remove('popup-feedback--show');
    popupFeedback.classList.remove('popup-error');
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Escape') {
      if (popupFeedback.classList.contains("popup-feedback--show")) {
        popupFeedback.classList.remove('popup-feedback--show');
        popupFeedback.classList.remove('popup-error');
      }
    }
});

// SUBMIT DATA
popupForm.addEventListener('submit', function(evt) {
    if (!popupFormLogin.value || !popupFormEmail.value || !popupFormMessage.value) {
        evt.preventDefault();
        popupFeedback.classList.remove('popup-error');
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add('popup-error');
    }
});