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
     start: function() {
        yesDay.asking();
         yesDay. getAllServicePrices();
         yesDay. getFullPrice();
        yesDay.getServicePercentPrices();
         yesDay. getTitle();

        yesDay.logger();
     },
     isNumber : function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    
     asking: function () {
        yesDay.title = prompt('Как называется ваш проект?');
    
        yesDay.screens = prompt('Какие типы экранов нужно разработать?');
    
       do {
            yesDay.screenPrice = prompt('Сколько будет стоить данная работа?'); 
        }
        while(!yesDay.isNumber(yesDay.screenPrice));

        yesDay.adaptive = confirm('Нужен ли адаптив на сайте?');
    
},


 getAllServicePrices : function () {
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
        while(!yesDay.isNumber(price));
        sum += +price;
    }
    yesDay.allServicePrices = sum;
},

getFullPrice : function () {
    yesDay.fullPrice = +yesDay.screenPrice  +yesDay.allServicePrices;
},

getServicePercentPrices : function () {
    yesDay.servicePercentPrice =  yesDay.fullPrice - (yesDay.fullPrice * (yesDay.rollback / 100));
},

 getTitle : function () {
    yesDay.title = yesDay.title.trim()[0].toUpperCase() + yesDay.title.trim().substr(1).toLowerCase();
},

 getRollbackMessage : function (price) {
    if (price > 30000) {
        return ('Делаем скидку 10%');
    } else if (price > 15000 && price < 30000) {
        return ('Делаем скидку 5%');
    } else if (price < 15000 && price > 0) {
        console.log('Скидка не предусмотрена');
    } else if (price < 0) {
        return ('Что то пошло не так!');
    }
},


logger: function() {

console.log(yesDay.fullPrice);
console.log(yesDay.servicePercentPrice);
},
};

yesDay.start(); 
