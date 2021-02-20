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

        

});

