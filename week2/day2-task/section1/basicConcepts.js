
// function 

// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5));

// Arrow function 

const sum = (a,b) => {
    return a+b;
};
console.log(sum(4,5));

// Conditional 

let num =  10;

if(num%2==0){
    console.log(`${num} is even.`);
} 
else{
    console.log(`${num} is odd.`);
}


//  looping 

// for loop
// for (let i = 0; i < 5; i++) {
//     console.log("Hello World!");
// }

// while loop 
// let i = 0;

// while (i<5) {
//     console.log("Hello world!");
//     i++;
// }

// do-while loop 

let i = 0;
 
do{
    console.log("Hello World!");
    i++;
}while(i<5);


// Strings 

let str = "Hello, Everyone!"
console.log(str);

// check length of string
console.log(str.length);

//charat
console.log(str.charAt(4));

// changing uppercase and lowercase strings
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// reversed words
let reversedString = str.split('').reverse().join('');
console.log(reversedString);

// string concatenation 
let str1 = 'Hello,'; //single quote
let str2 = "World!"; //double quote

let mergedString = str1.concat(str2);
console.log(mergedString);







