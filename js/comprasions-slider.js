document.addEventListener('DOMContentLoaded', () => {
    initComparisons();

    function initComparisons() {
        let x, i;
        x = document.querySelectorAll('.img-comp__overlay');

        for (let i = 0; i < x.length; i++) {
            compareImages(x[i]);
        }
    }

    function compareImages(img) {
        let slider, clicked = 0, width, height;

        width = img.offsetWidth;
        height = img.offsetHeight;
        img.style.width = (width / 2) + 'px';

        slider = document.createElement('div');
        sliderInner = document.createElement('div');
        slider.setAttribute('class', 'img-comp__slider');
        sliderInner.setAttribute('class', 'img-comp__slider_inner');
        slider.append(sliderInner);
        img.parentElement.insertBefore(slider, img);
        slider.style.left = (width / 2) - (slider.offsetWidth / 2) + 'px';
        
        slider.addEventListener('mousedown', slideReady);
        window.addEventListener('mouseup', slideFinish)
        slider.addEventListener('touchstart', slideReady);
        window.addEventListener('touchstop', slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener('mousemove', slideMove);
            window.addEventListener('touchmove', slideMove);
        }

        function slideFinish() {
            clicked = 0;
        }

        function slideMove(e) {
            let pos;
            if (clicked == 0) return false;
            pos = getCursorPos(e);
            if (pos < 0) pos = 0;
            if (pos > width) pos = width;
            slide(pos);
        }

        function getCursorPos(e) {
            e = e || window.event;
            let pageX;
            if (e.type == 'touchmove') {
                pageX = e.touches[0].pageX;
            }else {
                pageX = e.pageX;
            }
            let a, x = 0;
            a = img.getBoundingClientRect();
            x = pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
          }
    }

});