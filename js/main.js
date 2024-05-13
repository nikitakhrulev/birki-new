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


const contactUsModal = document.getElementById('contactUsModal');
const contactShowModal = document.getElementById('contactUsBtn');

contactShowModal.addEventListener('click', showModal);

function showModal() {
    contactUsModal.classList.remove('hidden')
}


const closeContactUsModal = document.querySelector('.contactUs-modal__close');

closeContactUsModal.addEventListener('click', closeModal)

function closeModal() {
    contactUsModal.classList.add('hidden');
}




// swipers

const swiper = new Swiper('.swiper-silicon', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
