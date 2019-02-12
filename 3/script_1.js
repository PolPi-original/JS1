'use strict'

// Задание 1 -----------------------------------

console.log('Задание 1');

let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
   ];

let b = JSON.parse(JSON.stringify(a));

a[0][0].name = 'Vasya';
a[0][0].age = 18;

console.log(a[0][0]);
console.log(b[0][0]);
console.log(a);
console.log(b);


// Задание 2 -----------------------------------

console.log('Задание 2');

function countBasketPrice(basket) {
    let sum = 0;
    basket.forEach((element) => sum += element.article.price * element.count);
    return sum;
}

const article = [];
const basket = [];

article[0] = {name : 'bread',       price : 10};
article[1] = {name : 'bread  mix',  price : 10};
article[2] = {name : 'bread wite',  price : 11};
article[3] = {name : 'bread nice',  price : 10};
article[4] = {name : 'bread v2',    price : 10};

basket[0] = {article : article[0], count : 1};
basket[1] = {article : article[1], count : 1};
basket[2] = {article : article[2], count : 1};
basket[3] = {article : article[3], count : 3};
basket[4] = {article : article[4], count : 2};

console.log(basket);

let sum = countBasketPrice(basket);
console.log(sum);


// Задание 3 -----------------------------------

console.log('Задание 3');

for (let count = 0; count < 10; console.log(count++)) {}


// Задание 4 -----------------------------------

console.log('Задание 4');

let x = '';

for (let index = 0; index < 20; index++) {
    x += 'x';
    console.log(x);
}
