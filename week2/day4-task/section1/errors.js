console.log("Error types");

// syntax error
/*
The SyntaxError object represents an error when trying to interpret syntactically invalid code.
 It is thrown when the JavaScript engine encounters tokens or token order that does not conform to
 the syntax of the language when parsing code.
const func = () =>{
    console.log(hello)
}
*/

// debugger;

try {
  console.log(hello);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

// try {
//   eval(alert("This shows syntax error))
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// Range Error
// There is an error when a range of expected values is required.

debugger;
try {
  let arr = new Array(-5);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
debugger;

// Reference Error
//  In a case where a variable reference can't be found or hasn't been declared, then a Reference error occurs.
// console.log(num);
try {
  console.log(n);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

// Type Error
//  An error occurs when a value is used outside the scope of its data type.
try{
    let x = 5;
    console.log(x.split(" "));
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}

// e.g:
try{
    let obj = null;
    obj.prop;
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}

// URI Error
// When the wrong character(s) are used in a URI function, the error is called.

try{
    decodeURI("%noURI");
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}


try{
    decodeURI("https://www.lacebook.com/");
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}
