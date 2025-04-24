let marks = [48, 76, 66, 81, 63, 39, 42, 55];

function totalMarks(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum;
}

console.log("Total marks obtained: " + totalMarks(marks));

function checkMaxOrMinValue(marks) {
  let minVal = marks[0];
  let maxVal = marks[0];

  for (let item of marks) {
    if (item < minVal) minVal = item;
    if (item > maxVal) maxVal = item;
  }

  console.log("Min value is: " + minVal);
  console.log("Max value is: " + maxVal);
}
console.log(checkMaxOrMinValue(marks));
