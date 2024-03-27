const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const pointButton = document.querySelector("#pointBtn");
const clearButton = document.querySelector("#clearBtn");
const deleteButton = document.querySelector("#deleteBtn");
const currentOperation = document.querySelector("#currentOperation");
const resultButton = document.querySelector("#resultBtn");

let firstOperand = "";
let operation = "";
let secondOperand = "";
let operationResult = "";

//clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLastNumber);

numbersButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addNumber(button.textContent)})
  }
);

operatorsButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    addOperator(operator.textContent)})
  }
);

resultButton.addEventListener("click", () => {
  operate(firstOperand, secondOperand);
})

function deleteLastNumber() {
  if(currentOperation.textContent != ""){
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
  }
}

function addNumber(number) {
  if(firstOperand === "") {
    currentOperation.textContent = number;
    firstOperand = number;
  } else if(firstOperand !== "" && operation == "" && operationResult == "") {
    currentOperation.textContent += number;
    firstOperand += number;
  } else if(firstOperand !== "" && operation == "" && operationResult !== "") {
    currentOperation.textContent = number;
    firstOperand = number;
  } else if(firstOperand !== "" && operation !== "" && secondOperand == ""){
    currentOperation.textContent = number;
    secondOperand = number;
  } else if(firstOperand !== "" && operation !== "" && secondOperand !== "" && operationResult == ""){
    currentOperation.textContent += number;
    secondOperand += number;
  }
}

function addOperator(operator) {
  if(firstOperand === "") {
    currentOperation.textContent = operator;
  } else if (firstOperand !== "" && secondOperand === "") {
    currentOperation.textContent = operator;
    operation = operator;
  } else if(firstOperand !== "" && secondOperand !== ""){
    operate(firstOperand, secondOperand);
  }
}

function operate(a,b){
  let result;
  a = +a;
  b = +b;

  if(operation == "+") {
    result = a + b;
  } else if(operation == "-") {
    result = a - b;
  } else if(operation == "*") {
    result = a * b;
  } else if(operation == "/") {
    result = a / b;
  } 

  result.toString();
  currentOperation.textContent = result;
  firstOperand = result;
  operationResult = result;
  operation = "";
  secondOperand = "";

}
