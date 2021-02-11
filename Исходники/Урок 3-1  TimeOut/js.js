// setTimeout(sayHello, 5000);

// function sayHello() {
//     alert('Hello World!');
// };

// let timeId = setTimeout(sayHello, 5000);
// clearTimeout(timeId);

// let timeId = setInterval(sayHello, 5000);
// clearTimeout(timeId);

// function sayHello() {
//    console.log('Hello World!');
// };

// let timeId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 3000);
// });
// clearTimeout(timeId);

// //Анимация
let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
     //elem = document.querySelector('#box');

    console.log(btn);
    console.log(box);
   //console.log(wrapper);

function myAnimation() {
    let pos = 0;
    //console.log(elem.style.top);
    //console.log(elem.style.left);

    let id = setInterval (frame, 10);
    function frame() {
        if (pos == 250) {
            clearInterval(id);
        } else {
            pos ++;
            elem.style.top = pos + 'px';
            elem.style.left = pos +'px';
        };
    };
};

btn.addEventListener('click', myAnimation);

// //requestAnimationFrame(function())
// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');
//     //elem = document.querySelector('#box');

//     console.log(btn);
//     console.log(box);
//     //console.log(wrapper);

// function myAnimation() {
//     let pos = 0;
//     //console.log(elem.style.top);
//     //console.log(elem.style.left);

//     let id = requestAnimationFrame (frame);
//     function frame() {
//        // if (pos == 250) {
//         //   cancelAnimationFrame(id);
//       //  } else {
//        //     pos ++;
//        //     elem.style.top = pos + 'px';
//        //     elem.style.left = pos +'px';
//       //  };
//       while (pos < 250) {
//         pos ++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos +'px';
//       };
//     };
// };

// btn.addEventListener('click', myAnimation);

//let btnBlock = document.querySelector('.btn-block');

// btnBlock.addEventListener('click', function(event){
//     if(event.target && event.target.tagName == 'BUTTON'){
//         console.log('Hello');
//     };
// });

// btnBlock.addEventListener('click', function(event){
//     if(event.target && event.target.classList.contains('first')){
//         console.log('Hello');
//     };
// });

// btnBlock.addEventListener('click', function(event){
//     if(event.target && event.target.matches('button.first')){
//         console.log('Hello');
//     };
// });
