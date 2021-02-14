//touchstart
window.addEventListener('DOMContentLoaded', function(){

    let box = document.querySelector('.box');
        //console.log(box);

    // box.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.touches);
    //     console.log(e.changeTouches);
    //     console.log(e.targetTouches);
    //     console.log(e.target);
    //     console.log(e.touches[0].target);

    // });

    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        //console.log("Red box: " + e.touches[0].pageX);
        console.log(e.touches[0].screenY);

    });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });

    //RegExp - search
    // let ans = prompt("Введите имя");
    // let reg = /n/;
    // console.log(ans.search(reg));

    //match
   // let ans = prompt("Введите имя");
    // let reg = /n/;
    // console.log(ans.match(reg));

    // let reg = /n/g;
    // console.log(ans.match(reg));

    // let reg = /n/ig;
    // console.log(ans.match(reg));

    //replace
    // let pass = prompt('Введите пароль');
    // console.log(pass.replace(/./g, '*'));
    // alert('12-34-56'.replace(/-/g, ':'));

    //Методы рег. выражений
    // let ans = prompt("Введите имя");
    // let reg = /n/g;
    // console.log(reg.test(ans));

    // Class RegExp
    // let ans = prompt("Введите число");
    // let reg = /\d/g;
    // console.log(ans.match(reg));

    //Комбинация рег. выражений
    // let str = 'My name is R2D2';
    // let reg = /\w\d\w\d/i;
    // console.log(str.match(reg));

    //экранирование спецсимволов
    let str = 'My name is $ R2D2';
    let reg = /\$/i;
    console.log(str.match(reg));

});