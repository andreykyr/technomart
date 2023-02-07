const services = document.querySelector('.services');
let servicesButtons = services.querySelectorAll('.services-nav__button');
let servicesBlocks = services.querySelectorAll('.service');

for (let i = 0; i < servicesButtons.length; i++) {
    servicesButtons[i].addEventListener('click', function(){
        for (let y = 0; y < servicesButtons.length; y++) {
            servicesButtons[y].disabled = false;
            servicesBlocks[y].classList.add('visually-hidden');
        }
        servicesButtons[i].disabled = true;
        servicesBlocks[i].classList.remove('visually-hidden');
    }); 
}