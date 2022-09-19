import * as myFunctions from './modules/functions.js';
import * as activeTabs from  './modules/tabs.js';

myFunctions.isWebp();
activeTabs.activeTabs();

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  grabCursor: true,
});
