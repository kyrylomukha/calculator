const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clearBtn");
const deleteButton = document.querySelector("#deleteBtn");
const currentOperation = document.querySelector("#currentOperation");
const resultButton = document.querySelector("#resultBtn");

let firstOperand = "";
let operation = "";
let secondOperand = "";
let operationResult = "";

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLastNumber);

numbersButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addNumber(button.textContent);
  });
});

operatorsButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    addOperator(operator.textContent);
  });
});

resultButton.addEventListener("click", () => {
  operate(firstOperand, secondOperand);
});

function deleteLastNumber() {
  if (firstOperand === operationResult) {
    firstOperand = "";
    operationResult = "";
    currentOperation.textContent = "";
  } else if (firstOperand == "" && secondOperand == "" && operation != "") {
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
    operation = operation.slice(0, -1);
  } else if (firstOperand != "" && secondOperand == "") {
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
    firstOperand = firstOperand.slice(0, -1);
  } else if (secondOperand != "" && firstOperand != "") {
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
    secondOperand = secondOperand.slice(0, -1);
  }
}

function clear() {
  currentOperation.textContent = "";
  firstOperand = "";
  operation = "";
  secondOperand = "";
  operationResult = "";
}

function addNumber(number) {
  if (number == "." && currentOperation.textContent.includes(".")) {
  } else if (firstOperand === "") {
    currentOperation.textContent = number;
    firstOperand = number;
  } else if (firstOperand !== "" && operation == "" && operationResult == "") {
    currentOperation.textContent += number;
    firstOperand += number;
  } else if (firstOperand !== "" && operation == "" && operationResult !== "") {
    currentOperation.textContent = number;
    firstOperand = number;
  } else if (firstOperand !== "" && operation !== "" && secondOperand == "") {
    currentOperation.textContent = number;
    secondOperand = number;
  } else if (firstOperand !== "" && operation !== "" && secondOperand !== "") {
    currentOperation.textContent += number;
    secondOperand += number;
  }
}

function addOperator(operator) {
  if (firstOperand === "") {
    currentOperation.textContent = operator;
  } else if (firstOperand !== "" && secondOperand === "") {
    currentOperation.textContent = operator;
    operation = operator;
  } else if (firstOperand !== "" && secondOperand !== "") {
    operate(firstOperand, secondOperand);
    operation = operator; 
  }
}

function operate(a, b) {
  let result;
  a = +a;
  b = +b;

  if (operation == "+") {
    result = a + b;
  } else if (operation == "-") {
    result = a - b;
  } else if (operation == "*") {
    result = a * b;
  } else if (operation == "/") {
    result = a / b;
  }

  result.toString();
  currentOperation.textContent = result;
  firstOperand = result;
  operationResult = result;
  operation = "";
  secondOperand = "";
}