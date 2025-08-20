export default function sliders() {
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 800,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".intro__slider-arrow._prev",
        nextEl: ".intro__slider-arrow._next",
      },
      pagination: {
        el: ".intro__slider-pagination",
        clickable: true,
      },
    });
  }

  const recSlider = document.querySelector(".s-rec__slider");

  if (recSlider && window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper(recSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      // autoplay: {
      //   delay: 3500,
      // },
      pagination: {
        el: ".s-rec__slider-pagination",
        clickable: true,
      },
    });
  }
}
