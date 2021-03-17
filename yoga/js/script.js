window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Получаем переменные со страницы
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        // console.log(tab);
        // console.log(info);
        // console.log(tabContent);


    //Функция скрытия контента
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //Запускаем функцию hideTabContent(a) с а = 1, которое позволит удалить весь контект, кроме первого (c i = 0)
    hideTabContent(1);

    //Функция отображения определенного контента
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //Пишем обработчик на родительский класс 'info-header', содержащий наши табы 'info-header-tab'
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //если клик попал в один из табов
            for (let i = 0; i < tab.length; i++) {  //проверяем все табы на соответствие цели
                if (target == tab[i]) {      //если цель найдена
                    hideTabContent(0); //скрытие всего контента и 
                    showTabContent(i); //отображение найденного.
                    break;
                }
            }
        }
    });
    
    //Timer

    let deadLine = '2024-02-18';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            };

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            };

            if (t.seconds < 10) {
               seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            };

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            };
        };
    };

    setClock('timer', deadLine);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Привязка к кнопке "Узнать подробнее"

    let knowMore = document.querySelector('.info'); //родитель для кнопок "description-btn"
    //console.log(knowMore);

    knowMore.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains("description-btn")) {
            //console.log('OK');

            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        };
    });

    //Form
    //Объект сообщений пользователю о состоянии запросов
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    //Передача данных из формы

    let form = document.querySelector('.main-form'),
        //input = form.getElementsByTagName('input'),
        formContact = document.querySelector('#form'),
        //inputContact = formContact.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //создаем новый элемент для вывода сообщений на страницу
        
        statusMessage.classList.add('status'); //добавляем к нашему элементу класс, стили которого написали в CSS 
        statusMessage.style.marginTop += '30px'; // "+=" предотвращает переопределение стилей в файле CSS
        statusMessage.style.color += 'white';
    
    function sendForm(elem) {
        let  input = elem.getElementsByTagName('input');

        elem.addEventListener('submit', function(event) {
            event.preventDefault(); //отключаем стандартную перезагрузку страницы браузера при событии 'submit'
            elem.appendChild(statusMessage); //добавляем наш новый элемент для вывода сообщения на страницу
    
        //    function sendData (data) {
        //        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest(); //создаем новый объект запроса и помещаем его в переменную request
            
            request.open('POST', 'http://learn.test/yoga/server.php');

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //заголовок formData
            //request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //заголовок JSON

            let formData = new FormData(elem); //создаем элемент объекта FormData и помещаем в него нашу форму (наши данные)
            
            // let obj = {};
            // formData.forEach(function(value, key) {
            //     obj[key] = value;
            // });  //заполняем объект ключ: значение.
    
            //let json = JSON.stringify(obj);
            
            request.send(formData);
            //request.send(json);

            request.addEventListener('readystatechange', function() {  //навешиваем на запрос контроль состояния свойства readyState
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            };
        })

    }

    sendForm(form);
    sendForm(formContact);

    //Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        //Эта запись идентична следующей:
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //Calc
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;
    
    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personSum = +this.value;                        //"+" преобразует сроку в число
        total = (daysSum + personSum)*4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personSum)*4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a*this.options[this.selectedIndex].value;
        }
    });



    
 
});  //End Window

