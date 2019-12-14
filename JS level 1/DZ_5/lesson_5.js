'use strict';

const map = document.getElementById('map');
map.insertAdjacentHTML('beforebegin', '<div class="rowLetters">ABCDEFGH</div>');
map.insertAdjacentHTML('afterbegin', '<div class="colmLetters">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8</div>');
map.insertAdjacentHTML('beforeend', '<div id="lok"></div>');
const d1 = document.getElementById('lok');
for (let a = 0; a < 4; a++) {
    for (let i = 0; i < 4; i++) {
        d1.insertAdjacentHTML('beforeend', '<div class="dblok"></div>');
        for (let i = 0; i < 1; i++) {
            d1.insertAdjacentHTML('beforeend', '<div class="wblok"></div>');
        }
    }
    for (let i = 0; i < 4; i++) {
        d1.insertAdjacentHTML('beforeend', '<div class="wblok"></div>');
        for (let i = 0; i < 1; i++) {
            d1.insertAdjacentHTML('beforeend', '<div class="dblok"></div>');
        }
    }
}
map.insertAdjacentHTML('afterend', '<div id="line"></div>');
const line = document.getElementById('line');
//----------------------------------------------------------------------------------------------------------------

line.insertAdjacentHTML('afterend', '<div class="basketBox"></div>');
const basketBox = document.querySelector('.basketBox');
const basketProd = [
    {
        idProduct: 48,
        name: 'куртка',
        price: 56,
        quantity: 2,
    }
    ,
    {
        idProduct: 49,
        name: 'рубашка',
        price: 35,
        quantity: 5
    }
    ,
    {
        idProduct: 50,
        name: 'шорты',
        price: 23,
        quantity: 3
    }
    ,
    {
        idProduct: 51,
        name: 'ботинки',
        price: 47,
        quantity: 1
    }
    ,
    {
        idProduct: 51,
        name: 'уги',
        price: 69,
        quantity: 2
    }
    ,
    {
        idProduct: 51,
        name: 'майка',
        price: 28,
        quantity: 4
    }
    ,
    {
        idProduct: 51,
        name: 'шарф',
        price: 48,
        quantity: 1
    }
    ,
    {
        idProduct: 51,
        name: 'шапка',
        price: 93,
        quantity: 1
    }
];

basketBox.insertAdjacentHTML('beforeend', '<div id="click">Кликни по мне)</div>');
const click = document.getElementById('click');
basketBox.insertAdjacentHTML('afterend', '<div class="totalPricePr">Корзина пуста :-(</div>');

const totalPricePr = document.querySelector('.totalPricePr');
let e = 0;
let totalPrice = 0;
click.addEventListener('click', function () {
    console.log(basketProd[e]);

    if (e < basketProd.length + 1) {
        totalPrice += basketProd[e].price * basketProd[e].quantity;
        basketBox.insertAdjacentHTML('beforeend', '<div class="product">efwfef</div>');

        let price = document.querySelector('.product:last-child');
        price.textContent = (basketProd[e].name + ' ' + (basketProd[e].price * basketProd[e].quantity) + ' рублей');
        console.log(totalPrice);
        e++;
    }
    totalPricePr.textContent = 'Товаров на сумму: ' + totalPrice + ' рублей';
});
totalPricePr.insertAdjacentHTML('afterend', '<div class="lineSecond"></div>');
const lineSecond = document.querySelector('.lineSecond');

//----------------------------------------------------------------------------------------------------------------
lineSecond.insertAdjacentHTML('afterend', '<div class="exercise3"></div>');

const exercise3 = document.querySelector('.exercise3');
for (let i = 0; i < basketProd.length; i++) {
    exercise3.insertAdjacentHTML('afterbegin', '<div class="catalogProductov"></div>');
    let product = document.querySelector('.catalogProductov');
    product.textContent = basketProd[i].name + ' ' +basketProd[i].price + ' рублей';
    console.log(product)
}