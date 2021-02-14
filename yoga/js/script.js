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
    })
})