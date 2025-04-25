import { curry } from "./utils/curry.js";
import { debounce } from "./utils/debounce.js";
import { demoArrayMethods } from "./utils/arrayMethods.js";
import { ChainableArray } from "./utils/chainableArray.js";

function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log("Curried Add:", curriedAdd(1)(2)(3));

function greet(name) {
  console.log("Hello, " + name);
}
const debouncedGreet = debounce(greet, 1000);
debouncedGreet("Ram");
debouncedGreet("Shyam");

const numbers = [1, 2, 3, 4, 5];
demoArrayMethods(numbers);

const result = new ChainableArray([1, 2, 3, 4, 5])
  .map((x) => x * 2)
  .filter((x) => x > 5)
  .reduce((a, b) => a + b, 0)
  .value();
console.log("ChainableArray Result:", result);
