// slaider1
// swiper-container
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // containerModifierClass: 'slaider1',
    loop: true,
    // loopedSlides: 3,
    // slidesPerView: 1,
    // slidesPerGroup: 1,
    // spaceBetween: 10,
    // noSwiping: true,
    autoHeight: true,
    // breakpoints : {
    //   0: {
    //     slidesPerGroup: 1,
    //     slidesPerView: 1,
    //   },
    //   667: {
    //     slidesPerGroup: 2,
    //     slidesPerView: 2,
    //   },
    //   870: {
    //     slidesPerGroup: 3,
    //     slidesPerView: 3,
    //   },
    // },    
    // // If we need pagination
    // pagination: {
    //   el: '.customer__pagination',
    //   bulletClass: 'customer__pagination-bullet',
    //   bulletElement: 'div',
    //   bulletActiveClass: 'customer__pagination-bullet_active',
    //   clickable : true,
    // },
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });
  const swiper2 = new Swiper('.slider2__container', {
    loop: true,
    // loopedSlides: 3,
    // slideClass: slider2__slide,
    slidesPerView: 5,
    // freeMode: true,
    // slidesPerView: 'auto',
    // loopFillGroupWithBlank: true,
    // loopAdditionalSlides: 2,
    nested: true,
    // loopedSlides: 3,
    slidesPerGroup: 1,
    spaceBetween: 95,
    navigation: {
      // nextEl: '.swiper-button-next',
      nextEl: '.slider2__prev',
      prevEl: '.slider2__next',
      // hideOnClick: true,
      // hiddenClass: 'slider2__but-hidden'
    },
  });
  