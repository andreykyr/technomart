const popupMap = document.querySelector('.popup-map');
const mapOpenButton = document.querySelector('.location__map-button');
const mapCloseButton = popupMap.querySelector('.popup-map__close-button');

// OPEN POPUP
mapOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('popup-map--show');
});

// CLOSE POPUP
mapCloseButton.addEventListener('click', function () {
    popupMap.classList.remove('popup-map--show');
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Escape') {
      if (popupMap.classList.contains("popup-map--show")) {
        popupMap.classList.remove('popup-map--show');
      }
    }
});
