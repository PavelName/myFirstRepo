'use strict';

 
const yesDay = {

     title: '', 
     screens: '', 
     screenPrice: 0, 
     adaptive: true, 
     rollback:  10,
     allServicePrices: 0,
     fullPrice: 0,
     servicePercentPrice: 0,
     service1: '', 
     service2: '', 

     asking: function () {
        yesDay.title = prompt('Как называется ваш проект?');
    
        yesDay.screens = prompt('Какие типы экранов нужно разработать?');
    
       do {
            yesDay.screenPrice = prompt('Сколько будет стоить данная работа?'); 
        }
        while(!isNumber(yesDay.screenPrice));

        yesDay.adaptive = confirm('Нужен ли адаптив на сайте?');
    
}
};

// Тип - function expression
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};


const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++){ 
        let price = 0;

        if (i === 0) {
            yesDay.service1 = prompt('Какой дополнительный тип услуг нужен?');
        } else if (i === 1) {
            yesDay.service2 = prompt('Каой дополнительный тип услуг нужен?');
        }
        do{ 
    price = prompt("Сколько это будет стоить?");
        }
        while(!isNumber(price));
        sum += +price;
    }
    return sum;
};

const getTitle = function () {
    return yesDay.title.trim()[0].toUpperCase() + yesDay.title.trim().substr(1).toLowerCase();
};


const getServicePercentPrices = function () {
    return yesDay.fullPrice - (yesDay.fullPrice * (yesDay.rollback / 100));
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
    return +yesDay.screenPrice  +yesDay.allServicePrices;
}

yesDay.asking();
yesDay.allServicePrices = getAllServicePrices();
yesDay.fullPrice = getFullPrice();
yesDay.servicePercentPrice = getServicePercentPrices();
yesDay.title = getTitle();

console.log(yesDay.fullPrice);
console.log(yesDay.servicePercentPrice);
