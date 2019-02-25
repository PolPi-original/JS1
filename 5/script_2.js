'use strict'

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
    },

    basketText() {
        return this.count ? `В	корзине: ${this.count} товаров на сумму ${this.sum} рублей` : 'Корзина пуста'
    }
}

const good = {
    name : '', 
    price : 0,

    putToBasket(basket, count){
        basket.goodList.push({good : this, count : count});
        basket.countTotalPrice();
        basket.countTotalNumber();
    },

    setAttribute(name, price) {
        this.name = name;
        this.price = price;
    }
}

const goods = [];

goods[0] = Object.assign({}, good); goods[0].setAttribute('bread', 10);
goods[1] = Object.assign({}, good); goods[1].setAttribute('bread  mix', 11);
goods[2] = Object.assign({}, good); goods[2].setAttribute('bread wite', 15);
goods[3] = Object.assign({}, good); goods[3].setAttribute('bread nice', 20);

console.log(goods);

let basketElement = document.querySelector('#basket');
//basketElement.insertAdjacentHTML('afterBegin', basket.basketText());

goods.forEach((element, i) => i % 2 ? element.putToBasket(basket, 1) :  element.putToBasket(basket, 2));

console.log(basket);

basketElement.insertAdjacentHTML('afterBegin', basket.basketText());
