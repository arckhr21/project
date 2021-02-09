'use strict';
/*
let body = document.querySelector('body'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('#title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    answ = document.querySelector('#prompt');
//let menu = document.getElementsByClassName('menu');
body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

//console.log(column);
//console.log(adv);
li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = "Пятый пункт";
//document.body.appendChild('li');
console.log(li);
console.log(menu);

//document.menu.insertBefore(menuItem[2], menuItem[1]);

menu.insertBefore(menuItem[2], menuItem[1]);

title.innerHTML = "Мы продаем только подлинную технику Apple";



column[1].removeChild(adv);

let a = prompt('Как вы относитесь к технике Apple', '');
answ.textContent = a;
*/
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;

console.log(adv);