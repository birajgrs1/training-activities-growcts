const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;

    expression = expression.replace(/&&/g, " && ");
    expression = expression.replace(/\|\|/g, " || ");
    expression = expression.replace(/!/g, " ! ");

    const result = eval(expression);

    if (typeof result === "boolean") {
      display.value = result ? "1" : "0";
    } else if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
    setTimeout(clearDisplay, 1000);
  }
}
