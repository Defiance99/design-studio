document.addEventListener('DOMContentLoaded', () => {

    let swiper = new Swiper('.schemes-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.schemes-swiper-button-next',
            prevEl: '.schemes-swiper-button-prev',
        },
        pagination: {
            el: '.schemes-swiper-pagination'
        },
    });

    let swiper3d = new Swiper('.schemes-3d-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.schemes-3d-swiper-button-next',
            prevEl: '.schemes-3d-swiper-button-prev',
        },
        pagination: {
            el: '.schemes-3d-swiper-pagination'
        },
        effect: 'cube',
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        speed: 1200
    });

    let swiperWorks = new Swiper('.swiper-works-emaples', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.examples-swiper-button-next',
            prevEl: '.examples-swiper-button-prev',
        },
        pagination: {
            el: '.exmaples-swiper-pagination'
        },
        speed: 1200
    });


    let swiperComprasions = new Swiper('.img-comp__container', {
        loop: false,
        /* cssMode: true, */
        /* mousewheel: true, */
        allowTouchMove: false,
        navigation: {
            nextEl: '.img-comp__next',
            prevEl: '.img-comp__prev',
        },
        pagination: {
            el: '.img-comp__pagination',
        },
    });

});