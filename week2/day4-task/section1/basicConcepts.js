
// Spread Operator:
/*
The Spread operator (represented as three dots or …) is used on iterables like array and string, 
or properties of Objects. to expand wherever zero or more elements are required top be copied or 
assigned. Its primary use case is with arrays, especially when expecting multiple values. 
*/

let n1  =  [10,20,30];
let n2 = [40,50,60,70];
let str = ["Hello, World!"];

// let numsJoined = n1.concat(n2);
let numsJoined = [...n1, ...n2];
console.log(numsJoined);

let allJoined = [...n1, ...n2, ...str];
console.log(allJoined);

const person = {
    name: "Ram Dahal", 
    age: 20
}
const detailedPerson = {
    ...person,
    address: "KTM", 
    profession: "Designer",
    contact: "9834507890"
}
console.log(detailedPerson);


const tarkari = ["pyaj", "Aalu", "Kauli"];

const arkoPani = [...tarkari, "Dhaniya"];

console.log(arkoPani);


// 'this' keyword in js 
// The ‘this keyword’ in JavaScript refers to the object to which it belongs. 
// Its value is determined by how a function is called, making it a dynamic reference.
// method -> obj 
// function -> global (window, global)

const user = {
    name: "CloudTech",
    greet(){
        console.log(`Welcome to, ${this.name}`);
    }
};
// console.log(user.greet());