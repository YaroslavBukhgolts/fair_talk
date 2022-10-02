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
  slidesPerView: 3,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  grabCursor: true,
  speed: 800,
});
