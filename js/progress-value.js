document.addEventListener('DOMContentLoaded', () => {
    let progressBar = document.querySelectorAll('.progress-bar__interval_disable');
    let progressBarValue = document.querySelectorAll('.progress-bar__value');
    let windowHeight = window.innerHeight;
    let arrayProgressValue = [];

    if (progressBarValue.length > 0) {
            document.addEventListener('scroll', () => {
        for (let i = 0; i < progressBar.length; i++) {
            if (!progressBar[i].classList.contains('progress-bar__interval_active') && progressBar[i].getBoundingClientRect().top - windowHeight <= 0) {
                arrayProgressValue.push(progressBarValue[i].getAttribute('data-progress-value'));
                activingProgressBar(i);
            }
        }

        function activingProgressBar(i) {
            let j = 0;
            let time = parseInt(arrayProgressValue[i].match(/\d+/)) / 4;
            progressBar[i].classList.add('progress-bar__interval_active');
            progressBar[i].style.width = arrayProgressValue[i];

            function progressValue() {
                if (progressBarValue[i].innerHTML == arrayProgressValue[i]) clearInterval(timer);

                j++;
                progressBarValue[i].innerHTML = j + '%';
            }

            let timer = setInterval(progressValue, time);
        }

    })
    }


    //data-single-value="321"
    // Single value
    let singleProgressValue = document.querySelectorAll('.single-progress-value');
    let arraySinlgeValues = [];
    let timeForSignleProgressValue = 2000;

    if (singleProgressValue.length > 0) {
        document.addEventListener('scroll', () => {
            for (let i = 0; i < singleProgressValue.length; i++) {
                if (!singleProgressValue[i].classList.contains('progress-bar__interval_active') && singleProgressValue[i].getBoundingClientRect().top - windowHeight <= 0) {
                    arraySinlgeValues.push(singleProgressValue[i].getAttribute('data-single-value'));
                    activingProgressBar(i);
                }
            }

            function activingProgressBar(i) {
                let j = 0;
                let time = timeForSignleProgressValue / 20;
                let gapValue = arraySinlgeValues[i] / time;
                gapValue = Math.floor(gapValue);
                singleProgressValue[i].classList.add('progress-bar__interval_active');
    
                function progressValue() {
                    j += gapValue;  
                    singleProgressValue[i].innerHTML = j;
                   /*  console.log(singleProgressValue[i].innerHTML, j); */

                    if (+singleProgressValue[i].innerHTML >= +arraySinlgeValues[i] || isNaN(singleProgressValue[i].innerHTML)) {
                        /* console.log(singleProgressValue[i].innerHTML); */
                        singleProgressValue[i].innerHTML = arraySinlgeValues[i]; 
                        clearInterval(timer);
                    }
                }
    
                let timer = setInterval(progressValue, 15);
            }
        });
    }

    window.addEventListener('resize', () => {
        initHeaderMobile();
    });
    let menu = document.querySelector('.header__navigation');
    let openMenuButton = document.querySelector('.header__burger-menu');
    initHeaderMobile();
    
    function initHeaderMobile() {
        

        if (window.innerWidth <= 900) {

            if (openMenuButton) {
                let itemsHaveMenu = document.querySelectorAll('.header__navigation .menu-item-has-children > a');
                let isActiveMenu = false;
    
                for (let i = 0; i < itemsHaveMenu.length; i++) {
                    itemsHaveMenu[i].addEventListener('click', (event) => {
                        event.preventDefault();
                    })
                }
    
                openMenuButton.addEventListener('click', () => {
                    if (!isActiveMenu) {
                        isActiveMenu = true;
                        menu.classList.add('header__nav_active');
                        openMenuButton.classList.add('header__burger-menu_active');
                    }else {
                        isActiveMenu = false;
                        menu.classList.remove('header__nav_active');
                        openMenuButton.classList.remove('header__burger-menu_active');
                    }
                });
            }
        }else {
            menu.classList.remove('header__nav_active');
            openMenuButton.classList.remove('header__burger-menu_active');
        }
    }

});