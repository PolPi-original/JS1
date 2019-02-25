'use strict'

const goods = [];

goods[0] = Object.assign({}, good); goods[0].setAttribute('bread', 10);
goods[1] = Object.assign({}, good); goods[1].setAttribute('bread  mix', 11);
goods[2] = Object.assign({}, good); goods[2].setAttribute('bread wite', 15);
goods[3] = Object.assign({}, good); goods[3].setAttribute('bread nice', 20);

console.log(goods);

basket.basketElement = document.querySelector('#basket');
basket.printBasket(goods);
