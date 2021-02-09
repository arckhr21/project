'use strict';

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
 

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//for(let i = 0; i < heart.length; i++){
//    heart[i].style.backgroundColor = 'blue';
//}

//heart.forEach(function(item, i, mass){
//    item.style.backgroundColor = 'green';
//})

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

//console.log(text);

div.classList.add('black');
//div.classList.add('green');
//console.log(div);

//document.body.appendChild(div);

//wrapper.appendChild(div);
//div.innerHTML = "<h1>Hello World!</h1>";
div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[1]);
//document.body.removeChild(circle[2]);
//wrapper.removeChild(heart[0]);

//document.body.replaceChild(btn[1], circle[2]);



