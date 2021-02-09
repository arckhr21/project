'use strict';

let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItem_1 = document.getElementsByClassName('expenses-item')[0],
    expensesItem_2 = document.getElementsByClassName('expenses-item')[1],
    expensesItem_3 = document.getElementsByClassName('expenses-item')[2],
    expensesItem_4 = document.getElementsByClassName('expenses-item')[3],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesItem_1 = document.querySelectorAll('.optionalexpenses-item')[0],
    optionalexpensesItem_2 = document.querySelectorAll('.optionalexpenses-item')[1],
    optionalexpensesItem_3 = document.querySelectorAll('.optionalexpenses-item')[2],
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    chooseIncome = document.querySelector('#income'),
    checksavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    
console.log(optionalexpensesItem[0]);