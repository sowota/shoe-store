import "../scss/main.scss"; 

import {hamburger} from "./hamburger"
import {thumbnail} from "./thumbnail"
import {expanding} from "./expand-card"
import {scrolled} from "./header"
//import{swiper} from "./swiper"
//import Swiper from 'swiper/bundle'; 
// コアバージョンに加えて、ナビゲーションとページネーションを追加する
import Swiper, {Autoplay, Navigation, Pagination } from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';

// モジュールを使用可能に this one is super important. i was stuck on it for a day
Swiper.use([ Autoplay, Navigation, Pagination]);

let swiper_home = new Swiper(".swiper-home", {
    slidesPerView: 1,
    autoplay: {
            delay: 7000,
            disableOnInteraction: false
            },
    	        
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

let swiper_product = new Swiper(".swiper-product", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      560: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },  
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


