import * as myFunctions from './modules/functions.js';
import * as activeTabs from  './modules/tabs.js';
import * as mobileMenu from './modules/mobile-menu.js';

myFunctions.isWebp();
activeTabs.activeTabs();
mobileMenu.mobileMenuVisible();
mobileMenu.mobileMenuClose();

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  grabCursor: true,
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    901: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    901: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});
