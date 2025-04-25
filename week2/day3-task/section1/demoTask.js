// 1. Utility Functions using Closures
// Curry implementation
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
      return (...moreArgs) => curried.apply(this, args.concat(moreArgs));
    };
  }
  
  // Debounce implementation
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  
  // 2. Array Method Examples
  const numbers = [1, 2, 3, 4, 5];
  
  // Basic usage
  const doubled = numbers.map(n => n * 2);
  const evens = numbers.filter(n => n % 2 === 0);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  
  // Method chaining
  const result = numbers
    .map(n => n * 3)        // [3, 6, 9, 12, 15]
    .filter(n => n > 5)     // [6, 9, 12, 15]
    .reduce((acc, n) => acc + n, 0); // 42
  
  // 3. Mini Library with Chaining Support
  class ChainableArray {
    constructor(array) {
      this.array = array;
    }
  
    map(fn) {
      return new ChainableArray(this.array.map(fn));
    }
  
    filter(fn) {
      return new ChainableArray(this.array.filter(fn));
    }
  
    reduce(fn, initialValue) {
      return this.array.reduce(fn, initialValue);
    }
  
    // Optional: Add value getter for intermediate inspection
    get value() {
      return this.array;
    }
  }
  
  // Usage examples
  const chainResult = new ChainableArray([1, 2, 3, 4])
    .map(x => x * 2)         // [2, 4, 6, 8]
    .filter(x => x > 5)      // [6, 8]
    .reduce((acc, x) => acc + x, 0); // 14
  
  console.log(chainResult); // 14
  
  const advancedResult = new ChainableArray([10, 20, 30])
    .map(x => x + 5)        
    .filter(x => x < 30)    
    .map(x => x * 2)         // [30, 50]
    .reduce((acc, x) => acc * x, 1); // 1500
  
  console.log(advancedResult); // 1500






  //main.js:
  const multiply = curry((a, b) => a * b);
const double = multiply(2);
console.log(double(5)); 

const resizeHandler = () => console.log('Window resized');
window.addEventListener('resize', debounce(resizeHandler, 300));

const inventory = new ChainableArray([
  { name: 'Apple', price: 150, quantity: 10 },
  { name: 'Banana', price: 120, quantity: 20 },
  { name: 'Orange', price: 80, quantity: 15 }
]);

const totalValue = inventory
  .filter(item => item.quantity > 5)
  .map(item => item.price * item.quantity)
  .reduce((acc, value) => acc + value, 0);

console.log(totalValue); 