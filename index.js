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

// declaration variables
let displayText = '0';
let firstDisplayValue;
let operator;
let secondDisplayValue;
let result;

// digit buttons
const button7 = document.querySelector('.digit7');
button7.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '7';
    } else {
        displayText += '7';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button8 = document.querySelector('.digit8');
button8.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '8';
    } else {
        displayText += parseInt('8');
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button9 = document.querySelector('.digit9');
button9.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '9';
    } else {
        displayText += '9';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button4 = document.querySelector('.digit4');
button4.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '4';
    } else {
        displayText += '4';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button5 = document.querySelector('.digit5');
button5.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '5';
    } else {
        displayText += '5';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button6 = document.querySelector('.digit6');
button6.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '6';
    } else {
        displayText += '6';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button1 = document.querySelector('.digit1');
button1.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '1';
    } else {
        displayText += '1';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button2 = document.querySelector('.digit2');
button2.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '2';
    } else {
        displayText += '2';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button3 = document.querySelector('.digit3');
button3.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '3';
    } else {
        displayText += '3';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

const button0 = document.querySelector('.digit0');
button0.addEventListener('click', () => {
    if (displayText === '0') {
        displayText = '0';
    } else {
        displayText += '0';
    };

    firstDisplayValue = parseInt(displayText);
    document.getElementById('displayText').innerHTML = displayText;

    displayText = displayText.substring(0, 10);
});

// decimal and clear buttons
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (!displayText.includes('.')) {
        displayText += '.';
    }

    // firstDisplayValue = displayText;
    document.getElementById('displayText').innerHTML = displayText;
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    if (displayText != '0') {
        displayText = '0';
    };

    document.getElementById('displayText').innerHTML = displayText;
});

// operator buttons
const additionButton = document.querySelector('.add');
additionButton.addEventListener('click', () => {
    operator = '+';
    secondDisplayValue = firstDisplayValue;
    firstDisplayValue = '';
    displayText = '0'
    result = operate(operator, secondDisplayValue, firstDisplayValue);
})

const subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener('click', () => {
    operator = '-';
    secondDisplayValue = firstDisplayValue;
    firstDisplayValue = '';
    displayText = '0';
    result = operate(operator, secondDisplayValue, firstDisplayValue);
});

const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', () => {
    operator = '*';
    secondDisplayValue = firstDisplayValue;
    firstDisplayValue = ''
    displayText = '0'
    result = operate(operator, secondDisplayValue, firstDisplayValue);
})

const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () => {
    operator = '/';
    secondDisplayValue = firstDisplayValue;
    firstDisplayValue = '';
    displayText = '0';
})

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    result = operate(operator, secondDisplayValue, firstDisplayValue);
    displayText = result;
    firstDisplayValue = parseInt(result);

    document.getElementById('displayText').innerHTML = result;
})