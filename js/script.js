const swiper = new Swiper('.slider', {
    pagination: {
        direction: 'vertical',
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
    },

    loop: true,
    speed: 3000,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    effect: 'fade',

    feadeEffect: {
        crossFade: true,
    },

});


$(document).ready(function() {
$('.header__search-btn').click(function (event) {
        $('.header__search-form').toggleClass('active');
    });    
});

$(document).ready(function() {
$('.header__login-btn').click(function (event) {
        $('.header__login-form').toggleClass('active');
    });    
});
