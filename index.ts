const $navbar_container = document.querySelector(
  '.navbar_container',
) as HTMLElement;
const $mainSectionTwoViewmore = document.querySelector(
  '.main_section2_viewmore',
) as HTMLDivElement;

const $sectionOne = document.querySelector('.main_section1')?.scrollHeight;
const $sectionTwo = document.querySelector('.main_section2')?.scrollHeight;
const $sectionThree = document.querySelector('.main_section3')?.scrollHeight;
const $sectionfour = document.querySelector('.main_section4')?.scrollHeight;
const $sectionFive = document.querySelector('.main_section5')?.scrollHeight;
// const $navBar = document.querySelector("#navBar") as HTMLDivElement;

window.addEventListener('DOMContentLoaded', () => {
  function viewMoreMove(select: HTMLElement) {
    select.addEventListener('mouseenter', () => {
      if (select.classList[1] === 'slide-in-left') {
        select.classList.remove('slide-in-left');
      } else {
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
    } else {
      $navbar_container.classList.add('navbar_container_shake');
    }
  }
  navBar();

  document.addEventListener('scroll', navBar);
});

// window.addEventListener('mousewheel', scrollTopMove);

document
  .querySelector('article')!
  .childNodes.forEach((v) => v.addEventListener('mousewheel', scrollTopMove));

let scrollTop: number = 0;

function scrollTopMove(e: WheelEventInit) {
  let windowHeight = window.innerHeight; // 스크린 창
  if (!e.deltaY) {
    return;
  }
  if (e.deltaY > 0 && scrollTop < 5) {
    scrollTop = scrollTop + 1;
  } else if (e.deltaY < 0 && scrollTop > 0) {
    scrollTop -= 1;
  } else {
    return;
  }
  console.log(scrollTop);

  if (scrollTop === 0) {
    // select.classList.add('')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (scrollTop === 1) {
    window.scrollTo({ top: windowHeight, behavior: 'smooth' });
    // console.log(2);
  } else if (scrollTop === 2) {
    window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
    // console.log(3);
  } else if (scrollTop === 3) {
    window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
    // console.log(4);
  } else if (scrollTop === 4) {
    window.scrollTo({ top: windowHeight * scrollTop, behavior: 'smooth' });
    // console.log(4);
  } else {
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
