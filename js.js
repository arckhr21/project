'use strict';

//let num = 50;

/*if (num<49){
    console.log('Неверно')
}else if(num>100){
    console.log('Много')
}else{
    console.log('Верно')
};

(num==50) ? console.log('Верно') :  console.log('Неверно');

switch (num) {
    case num < 49:
        console.log('Неверно');
        break;
    case num > 100:
        console.log('Много');
        break;
    case num > 80:
        console.log('Все еще много');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Что-то пошло не так!');
        break;
};*/


//let num = 50;

//while (num < 55) {
//    console.log(num);
//    num++;
//}

/*do {
    console.log(num);
    num++;
} while (num < 55); */

/*for (let i = 1; i < 8; i++) {
    if (i == 6) {
       continue
    }
    console.log(i)
}

let option = {
    width: 1024,
    heigth: 1024,
    name: "test"
};

console.log(option.name);

//добавим  новые свойства объекта
option.bool = false;
option.color = {
    border: "black",
    bg: "red"
};
delete option.bool;
console.log(option);

//цикл для вывода всех свойств объекта
for (let key in option){
    console.log('Свойство ' + key + ' имеет значение ' + option[key])
};



// определение общего количества свойств объекта
console.log(Object.keys(option).length);

//Массивы
//let arr = [1, 2, 3, 4, 5];
//arr.unshift('1');

//console.log(arr);

let arr = ['first', 2, 3, 'four', 5];

//arr.forEach(function(item, i, mass){
//    console.log(i + ': ' + item + " (массив: " + mass + ')');
//});



//arr.forEach(function(item, i){
//    console.log(i + ': ' + item );
//});

//arr.forEach(function(item){
//    console.log(item );
//});

//arr.forEach(function(i){
//    console.log(i);
//});

/*let arr = ['first', 2, 3, 'four', 5];

for (let key of arr){
    console.log(key);
}*/

/*let ans = prompt("",""),
    arr = [];

arr = ans.split(',');

console.log(arr);*/

/*let arr = ['sdf', "sdfg", 'fgh', "sdfggghh"],
    i = arr.join(', ');

console.log(i);*/

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(i);
console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__=soldier;

console.log(john);
console.log(john.armor);









