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

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].type);
}

// console.log("-----------------------------------");
// for (let i = 7; i > 0; i--) {
//     console.log(colors[i]);
// }