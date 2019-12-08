'use strict';
var level = 1;
// занание 1
console.log('занание ' + level++ + ' =>');

let a = Math.round(Math.random() * 1200);
console.log('Числo ' + a);

const objekt = {};

function numberToObject(a) {
    if (a <= 999 && a > 0) {
        let b = {
            hundreds() {
                return Math.floor(a / 100);
            },
            dozens() {
                return Math.floor((a - (hundred * 100)) / 10);
            },
            units() {
                return a - ((hundred * 100) + (dozen * 10));
            }
        };

        var hundred = b.hundreds();
        var dozen = b.dozens();
        var unit = b.units();

        objekt.hundred = hundred;
        objekt.dozen = dozen;
        objekt.unit = unit;

        console.log(objekt);

    } else {
        console.log('Число ' + a + ' превышает 999');
        console.log(objekt);
    }

}

numberToObject(a);

// ------------------------------------------------------------------------------------------------------------
// занание 2
console.log('занание ' + level++ + ' =>');

const basket = [
    {
        idProduct: 48,
        name: 'jacket',
        price: 56,
        quantity: 2
    }
    ,
    {
        idProduct: 49,
        name: 'skirt',
        price: 35,
        quantity: 5
    }
    ,
    {
        idProduct: 50,
        name: 'pants',
        price: 23,
        quantity: 3
    }
    ,
    {
        idProduct: 51,
        name: 'shoes',
        price: 47,
        quantity: 1
    }
];
function basketPrise (basket) {
    let totalPrise = 0;
    for(let i = 0; i < basket.length; i++){
        totalPrise += basket[i].price * basket[i].quantity
        console.log(basket[i].name + ' по цене ' + basket[i].price + ' в колличестве ' + basket[i].quantity + ' штук')
    }
    return totalPrise;
}
    console.log('Товаров на сумму: ' + basketPrise (basket));

// ------------------------------------------------------------------------------------------------------------
// занание 2
console.log('занание ' + level++ + ' =>');