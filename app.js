

import { addHandler, divideHandler, multiplyHandler, subtractHandler } from './handlers'


const addButton = document.getElementById('add-button');

const subtractButton = document.getElementById('subtract-button');

const multiplyButton = document.getElementById('multiply-button');

const divideButton = document.getElementById('divide-button');



addButton.addEventListener('click', addHandler)

subtractButton.addEventListener('click', subtractHandler)


multiplyButton.addEventListener('click', multiplyHandler)

divideButton.addEventListener('click', divideHandler);

