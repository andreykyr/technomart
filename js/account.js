const  accountBlock = document.querySelector('.header__account');

const accountGuest = accountBlock.querySelector('.account__guests');
const accountLogin = accountGuest.querySelector('.account__login');

const accountUser = accountBlock.querySelector('.account__user');
const accountOpen = accountUser.querySelector('.account__open');
const accountLogout = accountUser.querySelector('.account__logout');

const accountMy = accountBlock.querySelector('.account__my');

accountLogin.addEventListener('click', function (evt) {
    evt.preventDefault;
    accountUser.classList.remove('visually-hidden');
    accountMy.classList.remove('visually-hidden');
    accountGuest.classList.add('visually-hidden');
});

accountLogout.addEventListener('click', function (evt) {
    evt.preventDefault;
    accountUser.classList.add('visually-hidden');
    accountMy.classList.add('visually-hidden');
    accountGuest.classList.remove('visually-hidden');
});

