document.addEventListener('DOMContentLoaded', () => {

    let swipePaginations = document.querySelectorAll('.advatanges__swiper-pagination');

    function showTActiveSlideTime(index) {
        swipePaginations[index].classList.add('advantages__swiper-slide_active');
    }

    function hiddenPrevSlideTime(index) {
        swipePaginations[index - 1].classList.remove('advantages__swiper-slide_active');
    }

    let swiper = new Swiper('.advantages__swiper-container', {
        loop: true,
        autoplay: { 
            delay: 4000,
            disableOnInteraction: false
        },
        on: {
            afterInit: function() {
                showTActiveSlideTime(0);
            }
        }
    });
    
    for (let i = 0; i < swipePaginations.length; i++) {
        swipePaginations[i].addEventListener('click', () => {
            swiper.slideToLoop(i);
        });
    }

    swiper.on('realIndexChange', function() {
        if (swiper.previousIndex == 7) {
            hiddenPrevSlideTime(1);
        }else {
            hiddenPrevSlideTime(swiper.previousIndex);
        }
        showTActiveSlideTime(swiper.realIndex);
    });


    let swiperServices = new Swiper('.swiper-service', {
        init: false,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        spaceBetween: 50,
        navigation: {
            nextEl: '.service-plan__swiper-button-next',
            prevEl: '.service-plan__swiper-button-prev',
          },
    });

    initServiceSwiper();

    window.addEventListener('resize', () => {
        initServiceSwiper();
    })

    function initServiceSwiper() {
        if (window.innerWidth <= 770) {
            swiperServices.init();
        }else {
            swiperServices.destroy(true, true);
        }
    }



});