'use strict';

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}
//
//     4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//     x
//     xx
//     xxx
//     xxxx
//     xxxxx

// занание 1
console.log('занание 1');

var i = 1;
var a = 100;
number:
    while (i < a) {
        i++;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue number;
        }
        console.log(i);
    }

// занание 2

console.log('занание 2.a');

let arr = [
    ['куртка', 100],
    ['юбка', 87],
    ['платье', 239],
    ['майка', 29]
];
for (i = 0; i < arr.length; i++) {
     console.log(arr[i])
}

// занание 2
    console.log('занание 2.a');
function countBasketPrice() {
     var y = 0;
     for (i = 0; i < arr.length; i++) {
          y = y + arr[i][1]
     }
     return y;
}
console.log('Товаров на сумму: ' + countBasketPrice());