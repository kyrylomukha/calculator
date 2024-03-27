 // UI

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const point = document.querySelector("#point");

const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");

const result = document.querySelector("#operand");

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

// Variables for each part of calculator operation
let firstOperand = 0;
let operator = 0;
let secondOperand = 0;

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

clear.addEventListener("click", () => {
  firstOperand = 0;
  operator = 0;
  secondOperand = 0;
});

del.addEventListener("click", () => {
  if (secondOperand !== 0) {
    secondOperand = 0;
  } else if(operator !== 0) {
    operator = 0;
  } else if(firstOperand !== 0) {
    firstOperand = 0;
  }
});
 
 