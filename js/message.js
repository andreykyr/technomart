const popupMessage = document.querySelector('.popup-message');
const buyButtons = document.querySelectorAll('.buy-button');
const closeMessageButton = popupMessage.querySelector('.popup-message__close-button');
const MessageButtonContinue = popupMessage.querySelector('.popup-message__continuie');

for (let a = 0; a < buyButtons.length; a++) {
    buyButtons[a].addEventListener('click', function() {
        popupMessage.classList.add('popup-message--show'); 
    });
};

closeMessageButton.addEventListener('click', function() {
    popupMessage.classList.remove('popup-message--show');
});

MessageButtonContinue.addEventListener('click', function() {
    popupMessage.classList.remove('popup-message--show');
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Escape') {
      if (popupMessage.classList.contains("popup-message--show")) {
        popupMessage.classList.remove('popup-message--show');
      }
    }
});