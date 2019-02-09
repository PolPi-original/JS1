// Задания 4 и 5 -----------------------------------

'use strict'

function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'sum'          : return sum(a, b);
        case 'difference'   : return difference(a, b);
        case 'multiply'     : return multiply(a, b);
        case 'division'     : return division(a, b);
        default             : return undefined;
    }
}

console.log('Задание 4 и 5');

console.log(mathOperation(3, 2, 'sum'));
console.log(mathOperation(3, 2, 'difference'));
console.log(mathOperation(3, 2, 'multiply'));
console.log(mathOperation(3, 2, 'division'));
console.log(mathOperation(3, 2, 'сумма'));
