// реализовать актив статус для кнопок
const wishlistBlock = document.querySelector('.wishlist');
const basketBlock = document.querySelector('.basket');

let wishlistCounter = 0;
let basketCounter = 0;

let countClicks = function (block, buttonClass, counter) {
    let value = block.querySelector('.counter');
    let array = document.querySelectorAll(buttonClass)
    let link = block.querySelector('.user-products__link')
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', function () {
            counter += 1;
            value.textContent = counter;
            if (link.classList.contains('user-products__link--empty')) {
                link.classList.remove('user-products__link--empty');
            }
        });
    }
};

countClicks (wishlistBlock, '.wishlist-button', wishlistCounter);
countClicks (basketBlock, '.buy-button', basketCounter);