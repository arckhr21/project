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

    //Создаем переменные для работы с формой
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),

        statusMessage = document.createElement('div'); //создаем новый элемент для вывода сообщений на страницу

        statusMessage.classList.add('status'); //добавляем к нашему элементу класс, стили которого написали в CSS

    //Навешиваем на форму обработчик события 'submit'
    form.addEventListener('submit', function(event) {
        event.preventDefault(); //отключаем стандартную перезагрузку страницы браузера при событии 'submit'
        form.appendChild(statusMessage); //добавляем наш новый элемент для вывода сообщения на страницу

        let request = new XMLHttpRequest(); //создаем новый объект запроса и помещаем его в переменную request
        //request.open('POST', 'http://learn.test/yoga/server.php'); 
        request.open('POST', 'server.php');
      
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //заголовок formData
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //заголовок JSON
        
        let formData = new FormData(form); //создаем элемент объекта FormData и помещаем в него нашу форму (наши данные)
        
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });  //заполняем объект ключ: значение.

        let json = JSON.stringify(obj);
               
        //request.send(formData);
        request.send(json);

        request.addEventListener('readystatechange', function() {  //навешиваем на запрос контроль состояния свойства readyState
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading; //наше сообщение
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success; //наше сообщение
            } else {
                statusMessage.innerHTML = message.failure; //наше сообщение
            };

        });
    
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        };

    }); 

    //Передача данных из формы "Контакты"   
    let messageContact = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    let formContact = document.querySelector('#form'),
        inputContact = formContact.getElementsByTagName('input'),
        statusMessageContact = document.createElement('div'); //создаем новый элемент для вывода сообщений на страницу
        
        statusMessageContact.classList.add('statuscontact'); //добавляем к нашему элементу класс, стили которого написали в CSS

        //Устанавливаем стили нашего сообщения
        //statusMessageContact.style.backgroundColor += 'red';
        statusMessageContact.style.marginTop += '30px'; // "+=" предотвращает переобредение стилей в файле CSS
        statusMessageContact.style.color += 'white';

        formContact.addEventListener('submit', function(event) {
            event.preventDefault(); //отключаем стандартную перезагрузку страницы браузера при событии 'submit'
            formContact.appendChild(statusMessageContact); //добавляем наш новый элемент для вывода сообщения на страницу
    
            let requestContact = new XMLHttpRequest(); //создаем новый объект запроса и помещаем его в переменную request
            //requestContact.open('POST', 'http://learn.test/yoga/server.php'); 
            requestContact.open('POST', 'servercontact.php');
          
            //requestContact.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //заголовок formData
            requestContact.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //заголовок JSON
            
            let formDataContact = new FormData(formContact); //создаем элемент объекта FormData и помещаем в него нашу форму (наши данные)
            
            let objContact = {};
            formDataContact.forEach(function(value, key) {
                objContact[key] = value;
            });  //заполняем объект ключ: значение.
    
            let jsonContact = JSON.stringify(objContact);
                   
            //requestContact.send(formData);
            requestContact.send(jsonContact);
    
            requestContact.addEventListener('readystatechange', function() {  //навешиваем на запрос контроль состояния свойства readyState
                if (requestContact.readyState < 4) {
                    statusMessageContact.innerHTML = messageContact.loading; //наше сообщение
                } else if (requestContact.readyState === 4 && requestContact.status == 200) {
                    statusMessageContact.innerHTML = messageContact.success; //наше сообщение
                } else {
                    statusMessageContact.innerHTML = messageContact.failure; //наше сообщение
                };
    
            });
        
            for (let i = 0; i < inputContact.length; i++) {
                inputContact[i].value = '';
            };
    
        });     
 
});

