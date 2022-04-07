'use strict';

let title = prompt('Как называется ваш проект?');
console.log('type title:', typeof title);

let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log('type screens:', typeof screens);

let screenPrice = prompt('Сколько будет стоить данная работа?', '8000, 12000,15000 рублей');
console.log('type screenPrice:', typeof screens);
console.log(parseFloat(screenPrice));

let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log('type adaptive', typeof adaptive);

let service1 = prompt('Каой дополнительный тип услуг нужен?', 'Ремонт');
let servicePrice1 = prompt('Сколько это будет стоить?', '8000, 12000,15000 рублей');
console.log(parseFloat(servicePrice1));

let service2 = prompt('Каой дополнительный тип услуг нужен?', 'Тестирование');
let servicePrice2 = prompt('Сколько это будет стоить?', '8000, 12000,15000 рублей');
console.log(parseFloat(servicePrice2));

let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);

let rollback = 50;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log('Делаем скидку 10%');
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log('Делаем скидку 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так!');
}
