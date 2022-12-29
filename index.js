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

let displayText = '0';
let firstDisplayValue;

const button7 = document.querySelector('.digit7');
button7.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '7';
    } else {
        displayText += '7';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button8 = document.querySelector('.digit8');
button8.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '8';
    } else {
        displayText += '8';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button9 = document.querySelector('.digit9');
button9.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '9';
    } else {
        displayText += '9';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button4 = document.querySelector('.digit4');
button4.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '4';
    } else {
        displayText += '4';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button5 = document.querySelector('.digit5');
button5.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '5';
    } else {
        displayText += '5';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button6 = document.querySelector('.digit6');
button6.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '6';
    } else {
        displayText += '6';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button1 = document.querySelector('.digit1');
button1.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '1';
    } else {
        displayText += '1';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button2 = document.querySelector('.digit2');
button2.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '2';
    } else {
        displayText += '2';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button3 = document.querySelector('.digit3');
button3.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '3';
    } else {
        displayText += '3';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const button0 = document.querySelector('.digit0');
button0.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '0';
    } else {
        displayText += '0';
    };

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (!displayText.includes('.')) {
        displayText += '.';
    }

    firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    if (displayText != '0') {
        displayText = '0';
    };

    document.getElementById('displayText').innerHTML = displayText;
});