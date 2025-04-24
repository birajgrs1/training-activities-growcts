console.log(" Type Coercion Puzzles\n");

let result1 = [] + {};
console.log("1. [] + {} =", result1); 

let result2 = {} + [];
console.log("2. {} + [] =", result2); 

let result3 = [] == 0;
console.log("3. [] == 0:", result3); 

let result4 = '' == 0;
console.log("4. '' == 0:", result4); 

let result5 = false == '0';
console.log("5. false == '0':", result5); 

let result6 = false === '0';
console.log("6. false === '0':", result6); 

let result7 = null == undefined;
console.log("7. null == undefined:", result7); 

let result8 = null === undefined;
console.log("8. null === undefined:", result8); 

