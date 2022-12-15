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