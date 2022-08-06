// Importing Helpers
import { NodeHelper, FuncsHelper } from "./modules/Helpers";
// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

const swup = new Swup({
  plugins: [
    new SwupOverlayTheme({
      color: "#000",
      duration: 1000,
      direction: "to-right",
    }),
  ],
});

function Slider() {
  if (getNode(".product")) {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 20,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
}
// function imageView() {
//   if (getNode(".galeryPage")) {
//     lightbox.option({
//       resizeDuration: 200,
//       wrapAround: true,
//     });
//   }
// }

function menuToogle() {
  getNode(".menu-btn").addEventListener("click", function (params) {
    getNode(".menu-btn").classList.toggle("active");
    getNode(".mob-menu").classList.toggle("active");

    let tl = gsap.timeline();
    tl.fromTo(
      ".mob-navabr li",
      0.2,
      { y: "-100%", opacity: 0 },
      { y: "0", opacity: 1, stagger: 0.02 },
      0.5
    );
  });
}
function init() {
  Slider();
  menuToogle();
  // imageView();

  window.scrollTo(0, 0);
}
init();

swup.on("contentReplaced", function () {
  /*  startFullPage(); */
  init();
});

// const menu = getNodes(".mob-navabr li a");
// for (let index = 0; index < menu.length; index++) {
//   menu[index].addEventListener("click", function (params) {
//     removeClass(getNode(".menu-btn", "active"));
//     removeClass(getNode(".mob-menu", "active"));
//   });
// }
