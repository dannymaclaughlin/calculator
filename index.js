const clearButton = document.querySelector('[data-all-clear]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const operatorSignTextElement = document.querySelector('[data-operator-sign]');

// OPERATION FUNCTIONS
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

function operate(operator, previousOperand, currentOperand) {
    previousOperand = Number(previousOperand);
    currentOperand = Number(currentOperand);
    switch(operator) {
        case '+':
            return add(previousOperand, currentOperand);
        case '-':
            return subtract(previousOperand, currentOperand);
        case '×':
            return multiply(previousOperand, currentOperand);
        case '÷':
            return divide(previousOperand, currentOperand);
        default:
            return;
    }
}

let currentOperand = '';
let previousOperand = '';
let operator = '';
let result = ''

// CALCULATOR FUNCTIONS
function clear() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
    updateDisplay();
};

function deleteDigit() {

};

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand + number;
};

function updateDisplay() {
    currentOperandTextElement.innerText = currentOperand;
    previousOperandTextElement.innerText = previousOperand;
    operatorSignTextElement.innerText = operator;
};

// EVENT LISTENERS
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
        console.log(button.innerText);
    });
});

clearButton.addEventListener('click', () => {
    clear();
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (previousOperand != '' && currentOperand != '') {
            result = operate(operator,previousOperand,currentOperand);
            previousOperand = result;
            currentOperand = '';
            operator = button.innerText;
            console.log(previousOperand);
            updateDisplay();
        } else if (previousOperand === '') {
            operator = button.innerText;
            previousOperand = currentOperand;
            currentOperand = '';
            console.log(operator);
            updateDisplay();
        }
        
        
    });
});

equalsButton.addEventListener('click', () => {
    if (previousOperand === '') {
        return;
    } else if (currentOperand === '') {
        return;
    } else {
        result = operate(operator,previousOperand,currentOperand);
        console.log(result);
        previousOperand = result;
        currentOperand = '';
        operator = '';
        updateDisplay();
    };
})