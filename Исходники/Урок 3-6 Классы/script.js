let age = document.getElementById('#age');

age.addEventListener('click', function() {
    showUser('Smith', 'John');
})

function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
//showUser();




