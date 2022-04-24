'use strict';

let title; 
let screens; 
let screenPrice; 
let adaptive; 

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1; 
let service2; 


// Тип - function expression
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};


const asking = function () {
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?');
    screenPrice = prompt('Сколько будет стоить данная работа?');
    while(!isNumber(screenPrice)) {
        screenPrice = prompt('Сколько будет стоить данная работа?');  
    }
    adaptive = confirm('Нужен ли адаптив на сайте?');   
};

const getAllServicePrices = function () {
    let sum =0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуг нужен?');
        } else if (i === 1) {
            service2 = prompt('Каой дополнительный тип услуг нужен?');
        }
        sum += +prompt("Сколько это будет стоить?");
    }

    return sum;
};
const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

const getRollbackMessage = function (price) {
    if (price > 30000) {
        return ('Делаем скидку 10%');
    } else if (price > 15000 && price < 30000) {
        return ('Делаем скидку 5%');
    } else if (price < 15000 && price > 0) {
        console.log('Скидка не предусмотрена');
    } else if (price < 0) {
        return ('Что то пошло не так!');
    }
};


// Тип - function declaration
function getFullPrice() {
    return screenPrice + allServicePrices;
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);


