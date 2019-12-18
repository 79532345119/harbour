// Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'), // получаем список всех слайдов
        prev = document.querySelector('.prev'), // получаем стрелку назад
        next = document.querySelector('.next'), // получаем стрелку вперед
        dotsWrap = document.querySelector('.slider-dots'), // получаем все точки <div class="slider-dots">
                                                                                //     <div class="dot dot-active"></div>
                                                                                //     <div class="dot"></div>
                                                                                //     <div class="dot"></div>
                                                                                //     <div class="dot"></div>
                                                                                // </div>
        dots = document.querySelectorAll('.dot'); // получаем точки 
    
    showSlides(slideIndex);

    function showSlides(n) {   
        if (n > slides.length) { // если слайды закончились, показываем первый
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length; 
        }

          
        slides.forEach((item)=> item.style.display = 'none'); // прячем все слайды
        dots.forEach((item)=> item.classList.remove('dot-active')); // делаем все точки неактивными
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active'); // добавляем текущей точке класс активный
    }
    function plusSlide(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click', function() { // подключаем кнопку назад
        plusSlide(-1);
    });
    next.addEventListener('click', function() { // подключаем кнопку вперед
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', function(event) { // вешаем обработчки событий на точки
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    })