"use strict";
var _a, _b, _c, _d, _e;
const $navbar_container = document.querySelector('.navbar_container');
const $mainSectionTwoViewmore = document.querySelector('.main_section2_viewmore');
const $sectionOne = (_a = document.querySelector('.main_section1')) === null || _a === void 0 ? void 0 : _a.scrollHeight;
const $sectionTwo = (_b = document.querySelector('.main_section2')) === null || _b === void 0 ? void 0 : _b.scrollHeight;
const $sectionThree = (_c = document.querySelector('.main_section3')) === null || _c === void 0 ? void 0 : _c.scrollHeight;
const $sectionfour = (_d = document.querySelector('.main_section4')) === null || _d === void 0 ? void 0 : _d.scrollHeight;
const $sectionFive = (_e = document.querySelector('.main_section5')) === null || _e === void 0 ? void 0 : _e.scrollHeight;
// const $navBar = document.querySelector("#navBar") as HTMLDivElement;
window.addEventListener('DOMContentLoaded', () => {
    function viewMoreMove(select) {
        select.addEventListener('mouseenter', () => {
            if (select.classList[1] === 'slide-in-left') {
                select.classList.remove('slide-in-left');
            }
            else {
                select.classList.add('slide-in-left');
            }
        });
    }
    viewMoreMove($mainSectionTwoViewmore);
    function navBar() {
        if (!$navbar_container) {
            return;
        }
        if (window.scrollY === 0) {
            $navbar_container.classList.remove('navbar_container_shake');
        }
        else {
            $navbar_container.classList.add('navbar_container_shake');
        }
    }
    navBar();
    document.addEventListener('scroll', navBar);
});
// window.addEventListener('mousewheel', scrollTopMove);
document
    .querySelector('article')
    .childNodes.forEach((v) => v.addEventListener('mousewheel', scrollTopMove));
let scrollTop = 0;
function scrollTopMove(e) {
    let windowHeight = window.innerHeight; // 스크린 창
    if (!e.deltaY) {
        return;
    }
    if (e.deltaY > 0 && scrollTop < 5) {
        scrollTop = scrollTop + 1;
    }
    else if (e.deltaY < 0 && scrollTop > 0) {
        scrollTop -= 1;
    }
    else {
        return;
    }
    console.log(scrollTop);
    if (scrollTop === 0) {
        // select.classList.add('')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (scrollTop === 1) {
        window.scrollTo({ top: windowHeight, behavior: 'smooth' });
        // console.log(2);
    }
    else if (scrollTop === 2) {
        window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
        // console.log(3);
    }
    else if (scrollTop === 3) {
        window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
        // console.log(4);
    }
    else if (scrollTop === 4) {
        window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
        // console.log(4);
    }
    else {
        console.log('??');
        return;
    }
}
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
