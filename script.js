const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

const display = document.querySelector('.screen');
const buttonsOnScreen = document.querySelectorAll('.button');

let operator = "";

buttonsOnScreen.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent !== "CLEAR" && button.textContent !== "=") {
            if (button.textContent === "/" || button.textContent === "*" || button.textContent === "+" || button.textContent === "-") {
                operator = button.textContent;
                button.classList.add('operator-style');
            } else {
                display.textContent += button.textContent;
            }
        }
        if (button.textContent === 'CLEAR') {
            display.textContent = "";
        }
        if (button.textContent === '=') {
            operate(operator, a, b);
        }
    } )
});


