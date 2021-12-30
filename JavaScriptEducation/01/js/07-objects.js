'use strict';

// const obj = new Object();
const options = {
    name: 'test', // key : value
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    },
    makeTest: function() { // make custom method
        console.log('Test');
    }
};

console.log(Object.keys(options).length); // count keys == length
options.makeTest();

const {border, background} = options.colors; // destructure objects
console.log(background);
// console.log(options);

// delete options.name;

// console.log(options);
let counter = 0;
for (let key in options) { // use 'in' for objects. use 'of' for arrays
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Setting ${i} in key ${key} has value of ${options[key][i]}`);

        }
        counter++;
    } else {
        console.log(`Setting ${key} has value of ${options[key]}`);
        counter++;
    }

}
console.log(counter);

