// Your calculator is going to contain functions for all of the basic math operators 
// you typically find on simple calculators, so start by creating functions for the 
// following items and testing them in your browser’s console.

// create a function for addition
const add = (num1, num2) => num1 + num2;

// create a function for subtraction
const subtract = (num1, num2) => num1 - num2;

// create a function for multiplication
const multiply = (num1, num2) => num1 * num2;

// create a function for division
const divide = (num1, num2) => num1 / num2;

// Create a new function operate 
// that takes an operator and 2 numbers
// then calls one of the above functions on the numbers.
const operate = (operator, num1, num2) => {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2)
    } else {
        return 'ERROR';
    };
};

// Create the functions that populate the display when you click the number buttons. 
//
// You should be storing the ‘display value’ in a variable somewhere for use in the 
// next step.

const button7 = document.querySelector('.digit7');
button7.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '7';
    } else {
        displayText.innerHTML += '7';
    };
});

const button8 = document.querySelector('.digit8');
button8.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '8';
    } else {
        displayText.innerHTML += '8';
    };
});

const button9 = document.querySelector('.digit9');
button9.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '9';
    } else {
        displayText.innerHTML += '9';
    };
});

const button4 = document.querySelector('.digit4');
button4.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '4';
    } else {
        displayText.innerHTML += '4';
    };
});

const button5 = document.querySelector('.digit5');
button5.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '5';
    } else {
        displayText.innerHTML += '5';
    };
});

const button6 = document.querySelector('.digit6');
button6.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '6';
    } else {
        displayText.innerHTML += '6';
    };
});

const button1 = document.querySelector('.digit1');
button1.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '1';
    } else {
        displayText.innerHTML += '1';
    };
});

const button2 = document.querySelector('.digit2');
button2.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '2';
    } else {
        displayText.innerHTML += '2';
    };
});

const button3 = document.querySelector('.digit3');
button3.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '3';
    } else {
        displayText.innerHTML += '3';
    };
});

const button0 = document.querySelector('.digit0');
button0.addEventListener('click', () => {
    const displayText = document.getElementById('displayText');
    if (displayText.innerHTML === '0') {
        displayText.innerHTML = '0';
    } else {
        displayText.innerHTML += '0';
    };
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    document.getElementById('displayText').innerHTML += '.';

    if (displayText.innerHTML.includes('.')) {
        decimalButton.disabled = true;
    } else {
        decimalButton.disabled = false;
    };
});