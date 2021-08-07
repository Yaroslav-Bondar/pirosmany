const reviewsSlider = new Swiper('.aboutprod__slider', {
    loop: true,
    loopedSlides: 1,

    autoHeight: true,
    slidesPerView: 1,
    // slidesPerGroup: 1,
    // spaceBetween: 15,
    navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    nextEl: '.aboutprod__btn-next',
    prevEl: '.aboutprod__btn-prev',
    },
    breakpoints: {
        530: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    }
});