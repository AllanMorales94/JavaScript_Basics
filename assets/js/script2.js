window.onload = function () {
    alert("Welcome to Functional JavaScript!");
  };

  function alertHello(){
    alert("Success is Disguised as Failure!")
}

let firstName = prompt("Hello there!", " Enter name here to start.." );

/* document.getElementById = collect value from the text boxes using document object model to collect input from an element 
let userName = document.getElementById("username").value;
let passWord = document.getElementById("pass").value; 

document.getElementById("output").innerHTML = "Welcome";*/

  /* Collect Input 
  1.prompt(text, defaultText); 
  2.using document.getElementById   .value
  */

  /* Display Output 
   1.alert("Hi" + firstName + "!!!");
   2.document.write("hi"); used to display text on page 
   3.using document.getElementById   .innerHTML
   4.console.log();
   */
    
   
   /* Arrays
    - Arrays are actually a special type of OBJECT. 
    - ACTUAL OBJECTS use names to access their indexes. 
    - Arrays use numbers to access indexes.  
    -The real strength of an Array is that JS provides a number of METHODS and PROPERTIES to deal with ARRAYS. 
    -Are used to store collection of data with a single variable.
    -The way you access Arrays is with index. Index of an Array starts with '0' , '1' , '2' ... ex:  console.log(students[0]) Accesses rose.
    -To know the size of an Array use the (length) property ex: console.log(students.length); Size equals to 5.
    
    -To add elements to an Array use in this case below us 
    1. ex: students[5] = "Carla"; 
    2. ex: students[students.length] = "Joseph";
    
    - To Sort the elements in an Array you use the METHOD named (sort) p.s. we sort indexes in alphabetical order.
    1. ex: students.sort();

    - To remove the first index in an Array we use the (shift) METHOD.
    1. ex: let first = students.shift(); p.s. variable can be anything. 

    - To remove the last index in an Array we use the (pop) METHOD.
    1. ex : let last = students.pop(); p.s. variable can be anything.

    - To reverse your Indexes in an Array we use the (reverse) METHOD.
    1. ex: students.reverse();
    */
 
    //  First Method (is better and best practice.)
   let students = ['rose','john','anna','albert','aaron'];
  //  students[5] = "Carla";
  //  students[students.length] = "Joseph";
  //  students.sort();
  //  let first = students.shift();
  //  let x = students.pop();
  //  students.reverse();
   console.log(students);

  //  Second Method 
  let studentz = new Array('pedro','johna','eli','justin','ben');
  console.log(studentz);