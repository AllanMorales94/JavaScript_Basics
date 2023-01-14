console.log('Hello World');

const name = 'Allan';
let age = 28;
const isMarried = true;


function doubleAge (age) {
    // console.log(age * 2);
    return age * 2;
}

// doubleAge(age);
console.log(doubleAge(10));

// word function is a declaration that we're going to define a function.
// doubleAge is the name of function.
// inside the opening an closing paranthesis is where you pass in arguements or parameters.
// curly braces is where you put the functinality of the function.

// function doubleAge (age) {
//     console.log(age * 2);
// } this is defining a function not called on it 


const colors = ['orange', 'black', 'blue', 'teal', 'red', 'yellow', 'gray', 'pink', 'blue', 'pink', 'red'];
// size of this array is 11 because it has 11 elements
// the index of the last element is 7
// the first index is 0
// the last index 10
console.log(colors[10])
console.log(colors[colors.length - 1]) // colors[11] -> 

// the last index is always one less than the size/length of an array

// We have an array with 2500 patients 
// what is the index of the last patient?
// 2500 - 1 = 2499
// the last patient's name is Bob
// patients[patients.length - 1]





colors.length;
console.log(colors[colors.length - 1]) // colors[11 - 1] -> colors[10]

const numbers = [1,2,3,4,5,6,7,5,6,7,4,3,5,6,7,8,9,5,4,3,3,5,67,7,7,8,89,9,0,6,4,3,34]
console.log(numbers[numbers.length - 1])

const arrBooleans = [true, false, true, false, true, true]

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// for loop is a use to iterate through an arrray element by element 
// ADD ; TO SEPERATE PARAMETERS ONLY IN FOR LOOPS.
// for (){

// }
// for is just a key word
// () where parameter or aguement 
// {} to execute code.

// three parameters are 
// 1. What index we want to start @ in the array.[index 0, 1, 2, 3, etc]
// 2. Whats going to be the end of the for loop. Defining an end point.
// 3. Are we going up + or down - .

// i < colors.length; 
// i < 8;
console.log("-----------------------------------");
for (let i = 7; i > 0; i--) {
    console.log(colors[i]);
}







// A Javascript Object is data structure that holds data in key value pairs inside of curly braces {}.

const myDailyCar = {
    "color": "red",
    "numberDoors": 4,
    "isTinted": true,
    "make": "Honda"
}

const myWeekendCar = {
    color: "black",
    numberDoors: 2,
    isTinted: true,
    make: "Mercedes"
}

console.log(myDailyCar)
console.log(myWeekendCar.numberDoors)


const animal = {
    numLegs: 4,
    hasFur: true,
    type: "dog",
    sex: "male",
    colorFur: "black"
}

console.log(animal.numLegs);

// console log: My dog has 4 legs. It is a male with black fur.
console.log("My " + animal.type + " has " + animal.numLegs + " legs. It is a " + animal.sex + " with " + animal.colorFur + " fur.");
console.log(`My ${animal.type} has ${animal.numLegs} legs. It is a ${animal.sex} with ${animal.colorFur} fur.`);

const animals = [
    {
        numLegs: 0,
        hasFur: false,
        type: "fish",
        sex: "male",
        colorFur: null
    },{
        numLegs: 4,
        hasFur: true,
        type: "kangaroo",
        sex: "female",
        colorFur: "brown"
    },{
        numLegs: 4,
        hasFur: true,
        type: "dog",
        sex: "male",
        colorFur: "black"
    },{
        numLegs: 4,
        hasFur: true,
        type: "cat",
        sex: "female",
        colorFur: "orange"
    }
];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i].type);
// }


// 1/8/2023
// collection of data in the form of a list.
const myCars = ['m4', 'gwagon', 'mclaren', 'lambo URUS', 'GTR'];

console.log(myCars[3]);

const favoritePizza = {
    toppings: ['chicken', 'pineapple','bbq sauce'],
    crust: 'cheese crust',
    warm: true,
    shape: 'square',
};

// Dot Notation Preview
console.log(favoritePizza.toppings[2] = 'ketchup');

// Square Bracket Notation Preview
console.log(favoritePizza['toppings'][2]);


// an operator is a special symbol used to perform operations: >, <, =, ==, ===, !=, +, -, /, *
// an operator can be used for math (adding and subtracting), for assigning a value, and for comparing values

// an expression is where we have values on the left and/or on the right of the operator
// an expression is a full sentence
//  expressions can compare and evaluate two values or they can assign a value

// >
// 5 > 2

// +
// 5 + 5

// let x = 5;
// 5 === "5"

// a single = sign is used for asigning or replacing/updating a value
// a double or tripple = signs are used for comparison

// console.log(7 === 7); // true

// === is known as strict comparison and compares both the value and type
// == only compares the value
// == and === signs will only output boleans: true or false
// console.log("5" == 5); // true: because they are both 5s
// console.log("5" === 5); // false: true because they are both 5s, but this is false because one is a string and one is a number. Ultimately, this is false

// tyeof operator will give you the variable type
const bike = "Harley";
// console.log(typeof bike);
// console.log(typeof 5 === typeof '5');
// console.log(typeof "5"); // false

// focus on using typeof and === on numbers, strings, and booleans

// console.log(5 > 7); // false
// console.log(100 > 2); // true
// console.log("5" < 4); // false
// console.log(5 > "4"); // weak compariosn between a number and string

// console.log(5 >= 5); // true


// != compares two values to see if they are not equal
// console.log(5 != 5); // 

const person1 = {
    name: 'Amy',
    age: 18,
}

const person2 = {
    name: 'Mike',
    age: 25,
}

const person3 = {
    name: 'Anonymous',
    age: null,
}

// Conditional statemes check a condition and then execute a block of code based on the condition

// here we have three possible scenarions
// depending on the condition, a different block of code will be executed

const x = 5;

// if (x > 5) {
//     console.log('this variable is greater than 5');
// }

// there are three blocks of code in this conditional statement
// only one of these blocks of cose will be executed depending on the condition that is met
if (x > 5) {
    console.log('This variable is greater than 5')
} else if (x < 5) {
    console.log('This variable is less than 5')
} else {
    console.log('This variable is not greater than or less than 5')
}

// 2 additional data types

// a decimal 0.5 is knowsn as a float in JS
// null is a data type that represents an empty value

const moneyInPocket = 0.50; // float
const dogName = null;

// strings, booleans, numbers, floats, and null








// 1/14/2023
// MAJOR COMPUTER SCIENCE FUNDAMENTAL: I/0 OR IN AND OUT

// IN > PROCESS > OUT
// LAUNDRY EXAMPLE
// PUT IN DIRTY CLOTHERS -> LAUNDRY MACHINE CLEANS IT -> WE GET CLEAN CLOTHES OUT

// basic structure of a function consists of three things
// the function keyword
// a function name (not required)
// a place to pass in argumentes/parameters in ()
// the curly braces where the code is executed
function addFive(someNumber) {
    return someNumber + 5;
}

addFive(100); // 105
// 100 in
// processing is the math
// out is the final sum (105)

// the last index is always one less than the size/length of an array
const letters = ['a', 'b', 'c'];
// letters[2];
// THE SIZE/LENGTH IS DIFFERENT THAN THE INDEX OF AN ARRAY .
// length is 3 
// first index is 0
// last index is 2

// define a function called lastIndex that takes an array as an arguemnet and returns the last element of that array
function lastIndex(arr) {
// 

    // return arr.length - 1; // gives me back the last index of an array
    // to get the last element of an array we have to use the last index
    return arr[arr.length - 1];

}

console.log(lastIndex(letters));

// the index is the positon of the element in an array
// the length of an array is the total numbers of elements in an array


// write a function called stringAdder that adds two strings together and returns them.

function stringAdder() {
    return cake + pie;
}

stringAdder(1, 5);

// -----------------------------

function stringAdder(string1, string2) {
    return string1 + string2;
}

const myName = 'mario';
const myLastName = 'smith';

// typeof 5

// console.log(stringAdder(myName, myLastName));
// console.log(typeof true);

// typeof will always return a string of the type



// write a funciton, can be any name, that takes in two numbers and multiplies them and returns that value. 
// If any of the two numbers is not a number, then return the string 'cannot compute'

function multiplier(num1, num2 ) {
    // if (typeof num1 != 'number') {
    //     return 'cannot compute';
    // } else if (typeof num2 != 'number') {
    //     return 'cannot compute';
    // } else {
    //     return num1 * num2;
    // }

    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'cannot compute';
    } else {
        return num1 * num2;
    }
    
} 

console.log(multiplier(5, '50'));



function adder() {
    console.log(arguments);
}

console.log(adder(4,4,4,4))