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


const colors = ['orange', 'black', 'blue', 'teal', 'red', 'yellow', 'gray', 'pink'];

const numbers = [1,2,3,4,5,6,7]

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