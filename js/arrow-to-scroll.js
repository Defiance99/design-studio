document.addEventListener('DOMContentLoaded', () => {
    let arrows = document.querySelectorAll('.custom-arrow-bottom');

    if (arrows.length > 0) {
        for (let i = 0; i < arrows.length; i++) {
            let scrollTo = arrows[i].getAttribute('scroll-to');

            arrows[i].addEventListener('click', () => {
                scrollToElement(scrollTo);
            })
        }
    }

    let serviceButtons = document.querySelectorAll('.service__navigation-item');

    if (serviceButtons.length > 0) {
        for (let i = 0; i < serviceButtons.length; i++) {
            let scrollTo = serviceButtons[i].getAttribute('scroll-to');

            serviceButtons[i].addEventListener('click', () => {
                scrollToElement(scrollTo);
            });
        }
    }

    function scrollToElement(scrollTo) {
        let el = document.querySelector(`.${scrollTo}`);
        let toEl = el.getBoundingClientRect().top - 70;
        window.scrollBy({
            top: toEl,
            behavior: 'smooth'
          });
    }

    let url = new URL(window.location.href);
    if (url.searchParams.get('service')) {
        let service = url.searchParams.get('service');
        scrollToElement(service);
    }

});