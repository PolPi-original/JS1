'use strict'

const good = {
    name : '', 
    price : 0,

    putToBasket(basket, count){

        let basketItem = basket.getGoodInBasket(this);

        if (basketItem === false) {
            basket.goodList.push({good : this, count : count});
        }
        else {
            basketItem.count += count;
        }

        basket.countTotalPrice();
        basket.countTotalNumber();
    },

    setAttribute(name, price) {
        this.name = name;
        this.price = price;
    },

}
