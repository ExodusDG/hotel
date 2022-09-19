$('.hamburger').click(function () {
    $(this).toggleClass('is-active')

    if ($(this).hasClass('is-active')) {
        $('.menuBlock').addClass('menuBlockVisible')
    } else {
        $('.menuBlock').removeClass('menuBlockVisible')
    }
})

$('#bookRoom').click(function () {
openBooking('room')
})

$('#bookTable').click(function () {
    openBooking('table')
})

function openBooking(service) {
    var target = service;

    $('.booking').removeClass('bookingShow')
    $('.' + target + 'Booking').toggleClass('bookingShow')
}

$('.bookingBack').click(function() {
    $('.booking').removeClass('bookingShow')
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