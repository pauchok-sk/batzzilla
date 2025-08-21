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
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".s-rec__slider-pagination",
        clickable: true,
      },
    });
  }

  const gallerySlider = document.querySelector(".s-gallery__slider");

  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 4,
      loop: true,
      loopAdditionalSlides: 2,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".s-rec__slider-pagination",
        clickable: true,
      },
    });
  }

  const contentSlider = document.querySelector(".s-content__slider");

  if (contentSlider) {
    const swiper = new Swiper(contentSlider, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      // autoplay: {
      //   delay: 3300,
      // },
      navigation: {
        prevEl: ".s-content .slider-btn._prev",
        nextEl: ".s-content .slider-btn._next",
      },
      scrollbar: {
        el: ".s-content .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1540: {
          slidesPerView: 4,
          spaceBetween: 20,
          autoHeight: false
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
          autoHeight: false
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoHeight: false
        },
      },
    });
  }
}
