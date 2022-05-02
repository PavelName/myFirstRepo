'use strict';

const prise = function() {

let prize =  Math.ceil(Math.random()*100);
 console.log(prize);
 
while (true) {

    let answer = prompt("Угадай число");
    
    if(isNaN(answer)) {
        alert("Ошибка ввода");
        break;
    } else if(answer < prize) {
        alert(" Мало пробуй еще");
    } else if(answer > prize) {
        alert("Много пробуй");
    } else {
        alert("Угадал");
        break;
    }

}
};

prise();