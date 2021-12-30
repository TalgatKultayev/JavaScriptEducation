'use strict';

// const obj = new Object();
const options = {
    name: 'test', // key : value
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    }
};

console.log(options);

delete options.name;

console.log(options);
