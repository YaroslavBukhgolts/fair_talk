
let mobileMenuBtn = document.querySelector('.header__burger-menu'); // кнопка меню
let mobileMenu = document.querySelector('.header__mobile-menu'); // мобильное меню
let menuClose = document.querySelector('.header__mobile-close'); // крестик

export function mobileMenuVisible(){
   mobileMenuBtn.addEventListener('click', () => {
        if(mobileMenu.classList.contains('mobile-menu-visible')){
            mobileMenu.classList.remove('mobile-menu-visible', 'animate__fadeOutTopRight');
        }
        mobileMenu.classList.add('mobile-menu-visible');
        mobileMenu.classList.add('animate__fadeInTopRight');
   })
}

export function mobileMenuClose(){
    menuClose.addEventListener('click', () => {
        if(mobileMenu.classList.contains('animate__fadeInTopRight')){
            mobileMenu.classList.remove('animate__fadeInTopRight');
        }
        mobileMenu.classList.add('animate__fadeOutTopRight');
    })
}