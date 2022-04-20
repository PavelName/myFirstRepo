'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Каой дополнительный тип услуг нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Каой дополнительный тип услуг нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

// Тип - function expression

const getAllServicePrices = function () {
    return screenPrice + servicePrice1 + servicePrice2;
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


