$('.hamburger').click(function () {
    $(this).toggleClass('is-active')

    if ($(this).hasClass('is-active')) {
        $('.menuBlock').addClass('menuBlockVisible')
    } else {
        $('.menuBlock').removeClass('menuBlockVisible')
    }
})

const homepageSwiper = new Swiper('.gallerySlider', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiperNext',
        prevEl: '.swiperPrev',
    },
    slidesPerView: 2,
    spaceBetween: 5,
    centeredSlides: true,
});