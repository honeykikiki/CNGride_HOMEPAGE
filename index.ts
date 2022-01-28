// const $navbar_container = document.querySelector(
//   '.navbar_container',
// ) as HTMLElement;
const $ = (selector: string) => document.querySelector(selector);

const addClass = (select: string, list: string) =>
  $(select)?.classList.add(list);

const removeClass = (select: string, list: string) =>
  $(select)?.classList.remove(list);

window.addEventListener('DOMContentLoaded', () => {
  function navBar() {
    if (window.scrollY === 0) {
      addClass('.navbar_container', 'navbar_container_shake');
    } else {
      removeClass('.navbar_container', 'navbar_container_shake');
    }
  }
  navBar();

  addClass('.main_section1_h1', 'text-focus-in');
  addClass('.main_section_lineimg', 'focus-in-expand');

  document.addEventListener('scroll', navBar);
});

const viewMoreMove = (select: string) => {
  $(select)?.addEventListener('mouseenter', () => {
    if ($(select)?.classList[1] === 'slide-in-left') {
      $(select)?.classList.remove('slide-in-left');
    } else {
      $(select)?.classList.add('slide-in-left');
    }
  });
};
viewMoreMove('.main_section2_viewmore_span');

const swiperOpction = {
  direction: 'vertical',
  slidesPerView: 0,
  spaceBetween: 0,
  speed: 500,
  mousewheel: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // breakpoints: {
  //   //반응형 조건 속성
  //   1020: {
  //     //640 이상일 경우
  //     slidesPerView: 1, //레이아웃 2열
  //   },
  // },
  on: {
    transitionEnd: function () {
      if (Swiper.realIndex === 0) {
        removeClass('.navbar_container', 'navbar_container_shake');
        addClass('.main_section1_h1', 'text-focus-in');
        addClass('.main_section_lineimg', 'focus-in-expand');
      } else {
        // removeClass('.main_section1_h1', 'text-focus-in');
        // removeClass('.main_section_lineimg', 'focus-in-expand');
        addClass('.navbar_container', 'navbar_container_shake');
      }

      if (Swiper.realIndex === 1) {
        addClass('.main_section2_img', 'flip-in-hor-top');
        addClass('.main_section2_text', 'text-focus-in-left');
      } else {
        // removeClass('.main_section2_img', 'flip-in-hor-top');
        // removeClass('.main_section2_text', 'text-focus-in-left');
      }

      if (Swiper.realIndex === 2) {
        addClass('.main_section3_icon', 'flip-in-hor-top');
        addClass('.main_section3_text', 'text-focus-in-left');
        viewMoreMove('.main_section3_viewmore_span');
      }
      if (Swiper.realIndex === 3) {
        addClass('.main_section4_icon', 'flip-in-hor-top');

        viewMoreMove('.main_section4_viewmore_span');
      }
      if (Swiper.realIndex === 4) {
      }
    },
  },
};

if (window.innerWidth > 1020) {
}
var Swiper: any = new Swiper('.mySwiper', swiperOpction);
Swiper.slideTo(0, 0);

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
