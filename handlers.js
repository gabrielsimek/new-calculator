import { add, subtract, multiply, divide } from './utils.js';



const input1Add = document.getElementById('add-input-1');
const input2Add = document.getElementById('add-input-2');
const addOutput = document.getElementById('add-output');

const input1Subtract = document.getElementById('subtract-input-1');
const input2Subtract = document.getElementById('subtract-input-2');
const subtractOutput = document.getElementById('subtract-output');

const input1Multiply = document.getElementById('multiply-input-1');
const input2Multiply = document.getElementById('multiply-input-2');
const multiplyOutput = document.getElementById('multiply-output');

const input1Divide = document.getElementById('divide-input-1');
const input2Divide = document.getElementById('divide-input-2');
const divideOutput = document.getElementById('divide-output');

export function addHandler() {
       
    const numOne = Number(input1Add.value);
    const numTwo = Number(input2Add.value);
    const sum = add(numOne, numTwo)
    addOutput.textContent = sum;

}

export function subtractHandler() {
    const numOne = Number(input1Subtract.value);
    const numTwo = Number(input2Subtract.value);
    const sum = subtract(numOne, numTwo);
    subtractOutput.textContent = sum;
}

export function multiplyHandler() {
  
    const numOne = Number(input1Multiply.value);
    const numTwo = Number(input2Multiply.value);
    const sum = multiply(numOne, numTwo)
    multiplyOutput.textContent = sum;
  
}

export function divideHandler() {
    const numOne = Number(input1Divide.value);
    const numTwo = Number(input2Divide.value);
    const sum = divide(numOne, numTwo)
    divideOutput.textContent = sum;
}