// import functions and grab DOM elements
const input1Add = document.getElementById('add-input-1');
const input2Add = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addOutput = document.getElementById('add-output');

const input1Subtract = document.getElementById('subtract-input-1');
const input2Subtract = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractOutput = document.getElementById('subtract-output');

const input1Multiply = document.getElementById('multiply-input-1');
const input2Multiply = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyOutput = document.getElementById('multiply-output');



const input1Divide = document.getElementById('divide-input-1');
const input2Divide = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideOutput = document.getElementById('divide-output');
console.log(input1Divide, input2Divide, divideButton, divideOutput);


// initialize state
addButton.addEventListener('click', () => {
     /*input1Add = Number(input1Add.value);
    input2Add = Number(input2Add.value);
    console.log(input1Add, input2Add);
    const sum = input1Add + input2Add;
    console.log(sum);
    addOutput.textContent = sum;*/
   
    const numOne = Number(input1Add.value);
    const numTwo = Number(input2Add.value);
    const sum = numOne + numTwo;
    addOutput.textContent = sum;


});

subtractButton.addEventListener('click', () => {
   
    const numOne = Number(input1Subtract.value);
    const numTwo = Number(input2Subtract.value);
    const sum = numOne - numTwo;
    subtractOutput.textContent = sum;


});

multiplyButton.addEventListener('click', () => {
   
    const numOne = Number(input1Multiply.value);
    const numTwo = Number(input2Multiply.value);
    const sum = numOne * numTwo;
    multiplyOutput.textContent = sum;


});

divideButton.addEventListener('click', () => {
   
    const numOne = Number(input1Divide.value);
    const numTwo = Number(input2Divide.value);
    const sum = numOne / numTwo;
    divideOutput.textContent = sum;


});

// set event listeners to update state and DOM