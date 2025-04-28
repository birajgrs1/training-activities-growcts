/*
Memory Management in JavaScript
Memory management is critical in JavaScript, especially for applications running in the browser or 
Node.js. Unlike low-level programming languages such as C or C++, JavaScript automatically 
allocates and deallocates memory using Garbage Collection (GC) mechanisms.
However, understanding how memory management works in JavaScript helps developers write efficient code 
and increase performance while avoiding memory leaks.

Understanding Memory Life Cycle
Regardless of the programming language, the memory life cycle follows three main steps:

i. Allocate the memory you need – Memory is allocated when variables, objects, or functions are created.

ii. Use the allocated memory – The allocated memory is used during execution 
(reading/writing operations).
iii. Release the allocated memory – Once it is no longer needed, it should be released 
(garbage collected).
iv. In low-level languages like C, developers manually allocate and free memory using functions 
like malloc() and free(). However, in JavaScript, memory management is handled automatically.

Types of Memory in JavaScript
JavaScript manages memory in two main areas:

1. Stack Memory (Primitive Data Types)
Used for storing primitive values (e.g., number, string, boolean, null, undefined, symbol, and bigint).
Operates on a Last In, First Out (LIFO) basis.

2. Heap Memory (Reference Data Types)
Used for objects, arrays, and functions.
Allocated dynamically and accessed via references.



Garbage Collection in JavaScript
In JavaScript, Garbage Collection (GC) is an automatic memory management feature that helps free up 
memory that is no longer needed by a program. 
JavaScript uses a garbage collector to identify and remove unused objects, ensuring efficient 
memory usage and preventing memory leaks.


Garbage collection refers to the process of automatically reclaiming memory occupied by objects that
are no longer accessible. Since JavaScript manages memory allocation dynamically,
developers don’t need to manually allocate or free memory like in low-level languages (e.g., C, C++).

How Garbage Collection works in JavaScript?
i. JavaScript stores variables and objects in memory (the heap) during program execution.
ii. The engine tracks objects and variables in use, with unused ones becoming unreachable.
iii. Unreachable objects are automatically detected and removed by the JavaScript engine through 
garbage collection.
iv. Garbage collection runs in the background, periodically freeing memory by removing unused objects.
v. It happens automatically, so developers don’t need to manage memory manually, preventing memory leaks.

*/

/*
let a = 5 ;   //stack 
let b = a;
b = 10; 
console.log(a);  //remains unchanged


let obj1 = { name: "Ajay" };  //heap
let obj2 = obj1;
obj2.name = "Vijay";
console.log(obj1.name); 

*/


function createUserSession() {
  let userId = 101;
  let userName = "Ram Dahal";

  let preferences = {
    theme: "dark",
    language: "en",
  }; 

  let sessionData = {
    id: userId,
    name: userName, 
    prefs: preferences, 
  };

  sessionData.logout = function () {
    console.log(`${this.name} has logged out.`);
  };

  preferences = {
    theme: "light",
    language: "fr",
  };

  sessionData = null;
}

createUserSession();

setTimeout(() => {
  console.log(
    "End of program. If heap not reached then GC clear them!!!"
  );
}, 1000);
