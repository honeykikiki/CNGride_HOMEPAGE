"use strict";
// const $navbar_container = document.querySelector(
//   '.navbar_container',
// ) as HTMLElement;
const $ = (selector) => document.querySelector(selector);
const addClass = (select, list) => { var _a; return (_a = $(select)) === null || _a === void 0 ? void 0 : _a.classList.add(list); };
const removeClass = (select, list) => { var _a; return (_a = $(select)) === null || _a === void 0 ? void 0 : _a.classList.remove(list); };
window.addEventListener('DOMContentLoaded', () => {
    function navBar() {
        if (window.scrollY > 0) {
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
// 메뉴바 리스트 하단 라인
const navList = document.querySelectorAll('.navbar_list');
navList.forEach((v) => {
    v.addEventListener('click', (e) => {
        const targer = e.target;
        console.log(targer.classList[1]);
        navList.forEach((v) => {
            v.classList.remove('navbar_list_on');
        });
        targer.classList.add('navbar_list_on');
    });
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
$('.menu-toggle').addEventListener('click', () => {
    if ($('.menu-bar-sm').style.opacity === '1') {
        $('.menu-bar-sm').style.display = 'none';
        $('.menu-bar-sm').style.opacity = '0';
    }
    else {
        $('.menu-bar-sm').style.display = 'block';
        $('.menu-bar-sm').style.opacity = '1';
    }
});
const swiperOpction = {
    direction: 'vertical',
    slidesPerView: 'auto',
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
// Swiper.slideTo(2, 0);
if ($('.company_navbox')) {
    $('.company_navbox').addEventListener('click', (e) => {
        const target = e.target;
        if (target.dataset.list === 'introduction') {
            removeClass('.company_title_history', 'border_line');
            addClass('.company_title_introduction', 'border_line');
            $('.company_introduction').style.display = 'block';
            $('.company_history').style.display = 'none';
            return;
        }
        if (target.dataset.list === 'history') {
            addClass('.company_title_history', 'border_line');
            removeClass('.company_title_introduction', 'border_line');
            $('.company_introduction').style.display = 'none';
            $('.company_history').style.display = 'block';
            return;
        }
    });
}
if (window.innerWidth < 767) {
    const essSoulationImg = document.querySelector('.ess_section2_img');
    if (essSoulationImg) {
        essSoulationImg.src = '/public/Ess/system_mobile.png';
    }
}
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
});
