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

$.each($('.faqItem'), function () {
    var hiddenHeight = $(this).find('.faqItemVisible').height();
    var visibleHeight = $(this).find('.faqItemAnswer').height();

    $(this).height(40);
})

$('.faqItem').click(function () {
    var H = $(this).height();
    var hVisible = $(this).find('.faqItemAnswer').height() + 10;

    if ($(this).hasClass('faqOpen')) {
        $(this).height(40);
        $(this).removeClass('faqOpen')

    } else {
        $(this).height(H + hVisible);
        $(this).addClass('faqOpen')
    }
})