'use strict';

let money,time;

function start(){
  money = +prompt ("Ваш бюджет на месяц?", "");
  time = prompt ("Введите дату в формате YYYY-MM-DD", "");

  while(isNaN(money) || money == "" || money == null){
    money = +prompt ("Ваш бюджет на месяц?", "");
  }
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
      for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
            appData.expenses[a] = b;
    
        } else {                            
            console.log ("bad result");
            i--;
        }
    
      }
    },
    detectDayBudget: function(){
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function(){
      if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
      } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
      } else {
        console.log ("Произошла ошибка");
      };
    },
    checkSavings: function(){
      if (appData.savings == true){
        let save = +prompt("Какова сумма накомлений?", ""),
            percent = +prompt("Под какой процент", "");
        
        appData.monthIncome = (save/100/12*percent).toFixed();
        alert("Доход в месяц с вашего депозита:" + appData.monthIncome + " руб.");
      };
    },
    chooseOptExpenses: function(){
      for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
      }
    },
    chooseIncome: function(){
      let items = prompt('Что принесет дополнительный доход? (Введите через запятую.', '');
      let c = prompt('Может быть еще что-нибудь?', '');
          
      if (typeof(items)==='string' && typeof(items) != null && items != "" && items != " " && typeof(c)==='string' && typeof(c) != null && c != "" && c != " ") {
        
        appData.income = items.split(', ');
        appData.income.push(c);
        appData.income.sort();

        console.log('Способы доп. заработка: ');
        appData.income.forEach(function(item, i, mass){
          //console.log('Способы доп. заработка: ' + (i+1) + ' : ' + item + ' (массив: ' + mass + ')');
          console.log((i+1) + ' : ' + item);
        });

      } else {                            
        console.log ("Ошибка! Попробуйте еще раз!");
      }

      //Вывод всех данных объекта appData
      console.log('Наша программа включает в себя данные: '); 
      let d = 1;
      for (let key in appData){
          console.log(d +') ' + 'Свойство ' + '"' + key + '"' + ' имеет значение: ' + appData[key]);
          d++;
      }
         
    },
    
      
    


};

/*appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome(); */







// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);










