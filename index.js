"use strict";
// const $navbar_container = document.querySelector(
//   '.navbar_container',
// ) as HTMLElement;
const $ = (selector) => document.querySelector(selector);
const addClass = (select, list) => { var _a; return (_a = $(select)) === null || _a === void 0 ? void 0 : _a.classList.add(list); };
const removeClass = (select, list) => { var _a; return (_a = $(select)) === null || _a === void 0 ? void 0 : _a.classList.remove(list); };
window.addEventListener('DOMContentLoaded', () => {
    function navBar() {
        if (window.scrollY === 0) {
            addClass('.navbar_container', 'navbar_container_shake');
        }
        else {
            removeClass('.navbar_container', 'navbar_container_shake');
        }
    }
    navBar();
    addClass('.main_section1_h1', 'text-focus-in');
    addClass('.main_section_lineimg', 'focus-in-expand');
    document.addEventListener('scroll', navBar);
});
const viewMoreMove = (select) => {
    var _a;
    (_a = $(select)) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', () => {
        var _a, _b, _c, _d, _e;
        console.log((_a = $(select)) === null || _a === void 0 ? void 0 : _a.classList);
        if (((_b = $(select)) === null || _b === void 0 ? void 0 : _b.classList[1]) === 'slide-in-left' ||
            ((_c = $(select)) === null || _c === void 0 ? void 0 : _c.classList[2]) === 'slide-in-left') {
            (_d = $(select)) === null || _d === void 0 ? void 0 : _d.classList.remove('slide-in-left');
        }
        else {
            (_e = $(select)) === null || _e === void 0 ? void 0 : _e.classList.add('slide-in-left');
        }
    });
};
// $('.menu-toggle').addEventListener('click', () => {
//   if ($('.menu-bar-sm').style.opacity === '1') {
//     $('.menu-bar-sm').style.display = 'none';
//     $('.menu-bar-sm').style.opacity = '0';
//   } else {
//     $('.menu-bar-sm').style.display = 'block';
//     $('.menu-bar-sm').style.opacity = '1';
//   }
// });
const swiperOpction = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        //반응형 조건 속성
        1020: {
            //640 이상일 경우
            slidesPerView: 1, //레이아웃 2열
        },
    },
    on: {
        transitionEnd: function () {
            if (Swiper.realIndex === 0) {
                removeClass('.navbar_container', 'navbar_container_shake');
                addClass('.main_section1_h1', 'text-focus-in');
                addClass('.main_section_lineimg', 'focus-in-expand');
            }
            else {
                // removeClass('.main_section1_h1', 'text-focus-in');
                // removeClass('.main_section_lineimg', 'focus-in-expand');
                addClass('.navbar_container', 'navbar_container_shake');
            }
            if (Swiper.realIndex === 1) {
                addClass('.main_section2_h1', 'text-focus-in');
                addClass('.main_section2_img', 'flip-in-hor-top');
                addClass('.main_section2_text', 'text-focus-in-left');
            }
            if (Swiper.realIndex === 2) {
                addClass('.main_section3_h1', 'text-focus-in');
                addClass('.main_section3_icon', 'flip-in-hor-top');
                addClass('.main_section3_text', 'text-focus-in-left');
            }
            if (Swiper.realIndex === 3) {
                addClass('.main_section4_h1', 'text-focus-in');
                addClass('.main_section4_icon', 'flip-in-hor-top');
                addClass('.main_section4_viewmore_span', 'flip-in-hor-top');
            }
            if (Swiper.realIndex === 4) {
            }
        },
    },
};
var Swiper = new Swiper('.mySwiper', swiperOpction);
// Swiper.slideTo(3, 0);
// window.addEventListener('wheel', function (event) {
//   if (event.deltaY < 0) {
//     Swiper.mousewheel.enable();
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   } else if (event.deltaY > 0) {
//   }
// });
// window.addEventListener('mousewheel', scrollMove);
// document
//   .querySelector('article')!
//   .childNodes.forEach((v) => v.addEventListener('mousewheel', scrollMove));
// let scrollTop: number = 0;
// function scrollMove(e: WheelEventInit) {
//   let windowHeight = window.innerHeight; // 스크린 창
//   let nowScrollTop = window.scrollY;
//   if (!e.deltaY) {
//     return;
//   }
//   if (e.deltaY > 0 && scrollTop < 4) {
//     scrollTop = scrollTop + 1;
//   } else if (e.deltaY < 0 && scrollTop > 0) {
//     scrollTop -= 1;
//   } else {
//     return;
//   }
//   console.log(scrollTop, 'scrollTop');
//   console.log(nowScrollTop, 'nowScrollTop');
//   console.log(windowHeight, 'windowHeight');
//   if (scrollTop === 0) {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   } else if (scrollTop === 1 && 0 <= nowScrollTop) {
//     window.scrollTo({ top: windowHeight, behavior: 'smooth' });
//     console.log(2);
//   } else if (scrollTop === 2 && windowHeight * 1 <= nowScrollTop) {
//     window.scrollTo({ top: windowHeight * 2, behavior: 'smooth' });
//     console.log(3);
//   } else if (scrollTop === 3 && windowHeight * 2 <= nowScrollTop) {
//     window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
//     console.log(4);
//   } else if (scrollTop === 4 && windowHeight * 3 <= nowScrollTop) {
//     window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
//     console.log(4);
//   }
// }
// if (
//   window.scrollY < window.innerHeight &&
//   window.scrollY >= window.innerHeight / 2
// ) {
//   // select.classList.add('')
//   window.scrollTo({ top: $sectionOne, behavior: 'smooth' });
// } else if (
//   window.scrollY < window.innerHeight * 2 &&
//   window.scrollY >= window.innerHeight
// ) {
//   // console.log(2);
// } else if (
//   window.scrollY < window.innerHeight * 3 &&
//   window.scrollY >= window.innerHeight * 2
// ) {
//   // console.log(3);
// } else if (
//   window.scrollY < window.innerHeight * 4 &&
//   window.scrollY >= window.innerHeight * 3
// ) {
//   // console.log(4);
// } else {
//   console.log('??');
//   return;
// }
