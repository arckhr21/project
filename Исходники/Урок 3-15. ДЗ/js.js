// 
'use strict';

// let div = document.createElement('div'); //создаем элемент div в js

// //console.log(div); //в консоли VS будет ошибка. В консоли браузера видим <div></div>

// let txt = document.createTextNode('Test');

// //console.log(txt); // "Test"

// //Добавляем класс block-text в созданный элемент div
// div.classList.add('block-text');
// //console.log(div);

// //Выводим  наш элемент на страницу в родителя - в нашем  случае это body. Сам html - файл не меняется, а динамическая верстка меняется.
// document.body.appendChild(div);

// //console.log(div);

// //Вставляем текст через textContent
// let a = 'Test';
// div.textContent = a;

// //Добавим элемент параграфа.
// let blockText = document.querySelector('.block-text');
// //console.log(blockText);

// let p = document.createElement('p');
// //console.log(p);

// blockText.appendChild(p); //Вставляем параграф в блок-текст
// let b = 'Параграф';
// p.textContent = b;

// console.log(div);

//Создаем функцию добаления нового элемента в документ. Вместо отсутствующего аргумента необходимо поставить ''.
// function addNewElement(nameElement, nameClass, nameClassParent) {
//     let nameEl = document.createElement(nameElement);
//     if (nameClass) {
//         nameEl.classList.add(nameClass);
//         console.log(nameEl);
//     } 

//     if(nameClassParent) {
//         let namePar = document.getElementsByClassName(nameClassParent)[0];
//         console.log(namePar);
//         namePar.appendChild(nameEl);
//     } else {
//         document.body.appendChild(nameEl);
//     }    
// };

// addNewElement('div', 'block-text');
// addNewElement('p', '', '');

//Создаем класс Option

class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newTextElement (text) {
        let div= document.createElement('div');
        div.classList.add('block-text');
        document.body.appendChild(div);
        div.textContent = text;
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`; 
        console.log(div);
    }
};

let a = new Option (50, 600, 'red', 12, 'center');

let text = 'Тест';

a.newTextElement (text);








