'use strict'

let age = document.getElementById('age');

console.log(age);

// age.addEventListener('click', function() {
//     console.log('Event - Click');
//     console.log(this);
//     let a = this.value;
//     console.log(a);
//     //showUser('Smith', 'John');
//     showUser.apply(age, ['Smith', 'John']);
// });

function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
//showUser();
showUser.apply(age, ['Smith', 'John']);