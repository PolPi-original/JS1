'use strict'

// Задание 1 -----------------------------------

console.log('Задание 1');

// 1 пример
let a = 1, b = 1, c, d;
c = ++a;
// =2; перед присваиванием "а" увеличивается на 1, а=а+1=2, с=а=2
console.log(c); 

// 2 пример
d = b++;
// =1; сначала значение присваивается "d", а потом "b" увеличивается на 1, d=b=1, b=b+1=2
console.log(d); 

// 3 пример
c = (2+ ++a);
// =5, перед сложением "а" увеличивается на 1, а=а+1=3, с=(2+3)=5
console.log(c);

// 4 пример
d = (2+ b++);
// =4, сначала выполняется сложение, потом  а потом "b" увеличивается на 1, d=(2+2)=4, d=d+1=3
console.log(d);

console.log(a); // =3, берется последнее значение переменной
console.log(b); // =3, берется последнее значение переменной


// Задание 2 -----------------------------------

console.log('Задание 2');

a = 2;
var x = 1 + (a *= 2); 
// x=5, a=4, x=1+(a=a*2)=1+(a=2*2)=1+4=5
console.log(x);


// Задание 3 -----------------------------------

console.log('Задание 3');

a = 3;
b = -2;

if (a >= 0 && b >= 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else {
    console.log(a + b);
}
