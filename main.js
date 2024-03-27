// UI
const numberButtons = document.querySelectorAll(".number")
const addButton = document.querySelector("#addBtn");
const subtractButton = document.querySelector("#subtractBtn");
const divideButton = document.querySelector("#divideBtn");
const multiplyButton = document.querySelector("#multiplyBtn");
const pointButton = document.querySelector("#pointBtn");

const clearButton = document.querySelector("#clearBtn");
const deleteButton = document.querySelector("#deleteBtn");

const currentOperation = document.querySelector("#current-operation");

// Variables for each part of calculator operation
let firstOperand = 0;
let operator = 0;
let secondOperand = 0;

// Basic math operations functions

function addition(a,b) {
  return a + b;
 }

function subtraction(a,b) {
  return a - b;
 }

function multiplication(a,b) {
  return a * b;
 }

 function division(a,b) {
  return a / b;
 }

function operate(){
  let result;
  if(operator == add) {
    return result = firstOperand + secondOperand;
  } else if(operator == subtract) {
    return result = firstOperand - secondOperand;
  } else if(operator == multiply) {
    return result = firstOperand * secondOperand;
  } else if(operator == divide) {
    return result = firstOperand / secondOperand;
  }

  firstOperand = result; 
}



clearButton.addEventListener("click", () => {
  firstOperand = 0;
  operator = 0;
  secondOperand = 0;
});

deleteButton.addEventListener("click", () => {
  if (secondOperand !== 0) {
    secondOperand = 0;
  } else if(operator !== 0) {
    operator = 0;
  } else if(firstOperand !== 0) {
    firstOperand = 0;
  }
});
 
 