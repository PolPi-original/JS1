'use strict'

const basket = {
    goodList : [],
    sum : 0,
    count : 0, 
    basketElement : undefined, 

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
    },

    printBasket (goods) {
        this.basketElement.innerHTML = '';
        let tableBasket = document.createElement('table');
        this.basketElement.appendChild(tableBasket);

        this.printHeader(tableBasket);

        for (let i = 0; i < goods.length; i++) {
            this.addGoodLine(tableBasket, goods, i);
        }

        let p = document.createElement('p');
        p.innerText = this.basketText();
        this.basketElement.appendChild(p);
    },

    printHeader(tableBasket) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');

        tableBasket.appendChild(tr);
        
        td.innerText = 'Наименование товара';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = 'Количество товара';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = 'Действие';
        tr.appendChild(td);
    },

    addGoodLine(tableBasket, goods, i) {
       
        const tr = document.createElement('tr');
        let td = document.createElement('td');

        tableBasket.appendChild(tr);
        
        td.innerText = goods[i].name;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = this.getCountBasket(goods[i]);
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = 'Добавить';
        td.dataset.idGoods = i;
        td.addEventListener('click', event => this.addClickHandler(event, goods));
        tr.appendChild(td);
    },

    getCountBasket(good) {

        let countGood = 0;

        let goodInBasket = this.getGoodInBasket(good);
        if (goodInBasket != false) {
            countGood = goodInBasket.count;
        }
        return countGood;
    },

    getGoodInBasket(good) {

        let result = false;

        for (let i = 0; i < this.goodList.length; i++) {
            if (this.goodList[i].good === good) {
                result = this.goodList[i];
                break;
            }
        }
        return result;
    },

    addClickHandler (event, goods) {
        goods[+event.target.dataset.idGoods].putToBasket(this, 1);
        this.printBasket(goods);
    }
}
