const mobMenuBtn = document.querySelector('.mobile__menu-open');
const mobMenu = document.querySelector('.mobile-nav__wrapper');
const mobMenuImg = document.getElementById('mobMenuImg');
mobMenuBtn.addEventListener('click', mobMenuToggle);


function mobMenuToggle() {
    mobMenu.classList.toggle('hidden');
    if (mobMenu.classList.contains('hidden')) {
        mobMenuImg.src = './../img/icons/icons8-menu.svg';
    } else {
        mobMenuImg.src = './../img/icons/icons8-close.svg';
    }
   
}