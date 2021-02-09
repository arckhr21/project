'use strict';

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

console.log(btn);

// btn[0].onclick = function(){
//     alert('Вы нажали первую кнопку');
// };

// console.log(btn[0]);

// btn[0].onclick = function(){
//     alert('Вы  снова нажали первую кнопку');
// };

// btn[0].addEventListener('click', function(){
//     alert('Вы нажали первую кнопку');
// });
// btn[0].addEventListener('click', function(){
//     alert('Вы снова нажали первую кнопку');
// });
// 

// btn[0].addEventListener('click', function(){
//     alert('Вы нажали первую кнопку');
//     alert('Вы снова нажали первую кнопку');
// });

// btn[0].addEventListener('mouseover', function(){
//     alert('Мы навели на первую кнопку');
// });

// btn[0].addEventListener('click', function(event){
//         console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// });

// btn[0].addEventListener('click', function(event){
//     let target = event.target;
//     target.style.display = 'none';
// });

// btn[0].addEventListener('click', function(event){
//              console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// });
// wrap.addEventListener('click', function(event){
//     console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// });

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// });

btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('Вышли');
    });

    
});