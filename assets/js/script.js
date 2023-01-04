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

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
