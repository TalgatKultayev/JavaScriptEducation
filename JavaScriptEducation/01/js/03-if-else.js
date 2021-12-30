'use strict';

// if(4 === 9) {
//     console.log("Ok!");
// } else {
//     console.log("Error!");
// }

//const num = 50;

// if(num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('');
// }

//Terniary operator

// (num === 50) ? console.log("Ok!") : console.log("Error");
let num = 50;
switch (num) {
    case 49:
        console.log('Not equal');
        break;
    case 100:
        console.log('Too much');
        break;
    case 50:
        console.log('Equal');
        break;
    default:
        console.log('Not this time');
        break;
}