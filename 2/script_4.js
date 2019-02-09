// Задание 6 -----------------------------------

'use strict'

function checkLength(path) {
    return (path.length >= 3 && path.length <= 12);
}

function checkSymbol(path) {
    return (path.indexOf('&') > -1 || path.indexOf('$') > -1 || path.indexOf('%') > -1 || path.indexOf('*') > -1);
}

function checkLetter(path) {
    return (path.indexOf('q') === 0 || path.lastIndexOf('z') === path.length - 1);
}

function checkPassword(path) {
    return checkLength(path) && checkSymbol(path) && checkLetter(path);
}

let path = prompt('Введите пароль');

let result = checkPassword(path) ? 'Корректный пароль' : 'Некорректный пароль';
alert(result);


