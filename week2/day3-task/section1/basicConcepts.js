// Function declaration and definition

function greet() {
  console.log("Hello, Everyone!");
}
// greet();
greet();

// function argument and parameter
function greet1(param) {
  console.log(param);
}
greet("Hello, World!");

// function definition
const demoFunc = function () {
  console.log("This is a example of function defintion.");
};
demoFunc();

// return statement

function sum(a, b) {
  //where a and b are parameters
  return a + b;
}
console.log(sum(4, 5));

// Default parameter
function sum1(a, b = 5) {
  //b is default parameter
  return a + b;
}
console.log(sum1(10));

console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();

//Rest parameter
/*
The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array.
It is represented by three dots (…) followed by the parameter name and must be the last parameter
in the function, enabling flexible and dynamic argument handling.

Syntax
//... is the rest parameter (triple dots)
function functionname(...parameters)
{
statement;
}


When … is at the end of the function parameter, it is the rest parameter. 
It stores n number of parameters as an array. 
The rest parameter has to be the last argument, as its job is to collect all the remaining arguments 
into an array. 
So having a function definition like the code below doesn’t make any sense and will throw an error. 
*/

function addition(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const result = console.log(addition(1, 2, 3, 4));

// Arrow function

// const multiply = (a,b) =>{
//     return a*b;
// }
// console.log(multiply(4,5));

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// Nested function

function outerFunc() {
  console.log("Hii, from outer.");
  function innerFunc() {
    console.log("Hii, from inner.");
  }
  innerFunc();
}
outerFunc();

// Javascript function scope
/*
The scope is the current context of execution in which values and expressions are "visible" or 
can be referenced. If a variable or expression is not in the current scope, it will not be 
available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to 
parent scopes, but not vice versa.

JavaScript has the following kinds of scopes:

Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.

*/
console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();

function doSomething() {
  let x = 5;
  var y = 4;
  const z = 3;
  console.log(5, 4, 3); //these values are easily showed
}
// console.log(x,y,z);  //error occurred when trying to access locally scoped variables
doSomething();

let x = 5; // no error occurred when trying to access globally scoped variables
var y = 4;
const z = 3;

function doSomethingNew() {
  console.log(x, y, z);
}
doSomethingNew();

// Closure in JavaScript
/*
A closure is the combination of a function bundled together (enclosed) with references to its 
surrounding state (the lexical environment). In other words, a closure gives a function access to its 
outer scope. 
In JavaScript, closures are created every time a function is created, at function creation time.

A closure allows a function to access variables from its outer (enclosing) function even after it has 
finished executing.

Global variables can be made private within a function using closures, ensuring they cannot be 
accessed or modified directly from outside.
Closures provide a way to encapsulate private data and create public methods to interact with it.
Closures help retain references to variables that would otherwise be lost after the execution of the 
outer function.   

*/

// function myFunc() {
//     const name = "Biraj";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }

//   const myFunc1 = myFunc();
//   myFunc1();

console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();
function createCounter() {
  let count = 0; //private

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getValue: function () {
      return count;
    },
  };
}

//closure
const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getValue());
console.log(counter.decrement());
//   console.log(counter.count);

console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();

// Callback function

/*
A callback function is a function that is passed as an argument to another function and executed later.

A function can accept another function as a parameter.
Callbacks allow one function to call another at a later time.
A callback function can execute after another function has finished.

*/

// js function sequence
/*
function sayHello(){
    console.log("hello...");
}
function sayBye(){
    console.log("Bye...");
}
sayHello();
sayBye();
*/
// Using callback
function sayHello(callback) {
  console.log("hello...");
  if (callback && typeof callback === "function") {
    callback();
  }
}

function sayBye() {
  console.log("Bye...");
}

// Call sayHello and pass sayBye as a callback
sayHello(sayBye);

/*
Callbacks are widely used in

API requests (fetching data)
Reading files (Node.js file system)
Event listeners (clicks, keyboard inputs)
Database queries (retrieving data)

*/

console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();

// Higher Order Function - HOC
/*
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
A higher-order function is a function that does one of the following:
1. It takes one or more functions as an argument.
2. It may return function as a result.

*/

function add(a, b, callback) {
  let result = a + b;
  callback(result);

  return () => console.log(result);
}

// add(5, 4, (val) => console.log(val));
// add(10, 20, (val) => console.log(val));

let res = add(5, 4, () => {});
console.log(res);
res();

console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();

// Some Higher order functions used
/*

1. Map
2. Filter
3. Reduce
4. forEach
5. Find
6. Some
7. Every

*/

// 1. map
// The map function is used to transform an array by applying a callback function to each element. It returns a new array.

const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

// 2. filter
// The filter function is used to create a new array containing elements that satisfy a given condition.

const even = n.filter((num) => num % 2 === 0);
console.log(even);

// 3. reduce
// The reduce function accumulates array elements into a single value based on a callback function.

const sum2 = n.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

// 4. forEach
// The forEach function executes a provided function once for each array element.

n.forEach((num) => console.log(num * 2));

// 5. find
// The find function returns the first element in the array that satisfies a given condition.

const fEven = n.find((num) => num % 2 === 0);
console.log(fEven);

// 6. some
// The some function checks if at least one array element satisfies a condition.

const hasNeg = n.some((num) => num < 0);
console.log(hasNeg);

// 7. every
// The every function checks if all array elements satisfy a condition.

const allPos = n.every((num) => num > 0);
console.log(allPos);

// Pure Function
/*
A Pure Function is a function (a block of code) that always returns the same result if the same 
arguments are passed.

Pure functions return consistent results for identical inputs.
They do not modify external states or depend on mutable data.
Often used with immutable data structures to ensure reliability.
Their independence from external states makes them highly reusable.
*/

function sayGreeting(name) {
  return `Hello, ${name}`;
}
console.log(sayGreeting("Biraj !"));

console.log();
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");
console.log();

// Immediately Invoked Function Expressions (IIFE)
/*
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately 
after they are defined. They are typically used to create a local scope for variables to prevent them 
from polluting the global scope.

Syntax:

(function (){ 
// Function Logic Here. 
})();
*/

// var mul = (function(){
//     var x= 5, y = 4;
//     return x*y;
// }());
// console.log(mul);

(function () {
  console.log("IIFE executed");
})();

(() => {
  console.log("Arrow IIFE");
})();




