// Задание 6 -----------------------------------

'use strict'

function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    return val * power(val, pow - 1);
}

console.log('Задание 6');

console.log(power(2, 2));
console.log(power(3, 2));
console.log(power(4, 5));
