"use strict";
 //  var isdeprecated, never use var in new codes is good code practice
 // datatypes primitive: 
 //numbers[0,1,2,3]
 // string: 'name', 'city'
 //boolean : true, false
 //null
 //undefined
 //symbol
 //Bigint

 //datatypes: objects
 //arrays
 //functions
 //date
 //regex
 //errors

 let number1 = 4;
 let number2 = 4.6;

 console.log(4/0); // Infinity
console.log('string' * 9); //NaN -> not a number

const person = "Alex"; // no difference between '' and "". Also backticks `` contain strings
const number = '5';

const bool = true;// or false

// console.log(something); // return null, errror ReferenceError

let und;
console.log(und); // return undefined. has initialisation, no value

const obj = { // Objects can utilize all primitives
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = ['plum.png','orange.jpeg', 6, 'apple.bmp', {}, []]; // array is also object. any kind of data can enter, since no types
console.log(arr[1]);

// alert('Hello'); // Alert user about leaving page, or similar
// const result = confirm('Are you here?'); // if choose okay -> result = true, else result = false
const answer = prompt('Are you older than 18?', '18'); // result from prompt is always string
console.log(answer);//console.log(typeof(answer)); // returns string
//REMEMBER: user input is always string

const answers = [];

// answers[0] = prompt('What is your name?','');
// answers[1] = prompt('What is your surname?','');
// answers[2] = prompt('What is your age?','');

console.log(typeof(answers));

const category = 'toys';

console.log('https://someurl.com/' + category); //old ways, deprecated
console.log('https://someurl.com/' + category + '/' + 4); // bad practice

console.log(`https:someurl.com/${category}`/5); //backticks allow string interpolation

const user = 'Ivan';

alert(`Hello, ${user}`);