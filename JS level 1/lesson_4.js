'use strict';

let a = Math.round(Math.random()*1100);
console.log(a);

function numberToObject(a) {
    if (a <= 999 && a > 0) {
        let b = {
            hundreds() {
                let hundred = Math.floor(a/100);
                return hundred;
            },
            dozens() {
                let dozen = Math.floor((a-(hundred*100))/10);
                return dozen;
            },
            units() {
                let unit = a-((hundred*100)+(dozen*10));
                return unit;
            }
        };
        var hundred = b.hundreds();
        var dozen = b.dozens();
        var unit = b.units();
        console.log(hundred);
        console.log(dozen);
        console.log(unit);
    } else {
        console.log('Число превышает 999');
        let b = {};
        console.log(b);
    };
};

numberToObject(a);