'use strict'

console.log('Задание 2');

const basket = {
    goodList : [],
    sum : 0,
    count : 0, 

    countTotalPrice() {
        this.sum = 0;
        this.goodList.forEach((element) => this.sum += element.good.price * element.count);
        },

    countTotalNumber() {
        this.count = 0;
        this.goodList.forEach((element) => this.count += element.count);
    }
}

const good = {
    name : '', 
    price : 0,

    putToBasket(basket, count){
        basket.goodList.push({good : this, count : count});
        basket.countTotalPrice();
        basket.countTotalNumber();
    }
}

const goods = [];

goods[0] = Object.assign({}, good); goods[0].name = 'bread';        goods[0].price = 10;
goods[1] = Object.assign({}, good); goods[1].name = 'bread  mix';   goods[1].price = 12;
goods[2] = Object.assign({}, good); goods[2].name = 'bread wite';   goods[2].price = 9;
goods[3] = Object.assign({}, good); goods[3].name = 'bread nice';   goods[3].price = 20;

console.log(goods);

goods.forEach((element, i) => i % 2 ? element.putToBasket(basket, 1) :  element.putToBasket(basket, 2));

console.log(basket);
