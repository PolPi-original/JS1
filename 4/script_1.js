'use strict'

console.log('Задание 1');

function numberToObject(n) {

    if (n > 999) {
        console.log('Ошибка! Число больше 999');
        return null;
    }

    const result = {one : 0, ten: 0, hundred : 0};

    result.hundred = ~~ (n / 100);
    n = n - result.hundred * 100;
    result.ten = ~~ (n / 10);
    result.one = n - result.ten * 10;

    return result;
}

let s = prompt('Введите целое число:');

let obj = numberToObject(Number(s));

console.log(obj);