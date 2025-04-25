export function demoArrayMethods(numbers) {
  console.log(
    "Map:",
    numbers.map((n) => n * 2)
  );
  console.log(
    "Filter:",
    numbers.filter((n) => n % 2 === 0)
  );
  console.log(
    "Reduce:",
    numbers.reduce((acc, n) => acc + n, 0)
  );

  const chainedResult = numbers
    .map((n) => n * 2)
    .filter((n) => n > 5)
    .reduce((a, b) => a + b, 0);

  console.log("Chained Result:", chainedResult);
}
