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
        return add(+a, +b);
    } else if (operator === '-') {
        return subtract(+a, +b);
    } else if (operator === '*') {
        return multiply(+a, +b);
    } else if (operator === '/') {
        return divide(+a, +b);
    }
}

const clear = function() {
    display.textContent = "";
            operator = "";
            a = "";
            b = "";
            result = "";
}

const display = document.querySelector('.screen');
const buttonsOnScreen = document.querySelectorAll('.button');

let operator = "";
let a = "";
let b = "";
let result = "";

let operatorButton = "";

buttonsOnScreen.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent !== "CLEAR" && button.textContent !== "=") {
            if (button.textContent === "/" || button.textContent === "*" || button.textContent === "+" || button.textContent === "-") {
                operator = button.textContent;
                button.classList.add('operator-style');
                operatorButton = button;
                if (a !== "" && b !== "") {
                    a = operate(operator, a, b);
                    b = "";
                } else {
                    if (a !== "") {
                        b = +display.textContent;
                    } else {
                        a = +display.textContent;
                    }
                }
            } else {
                if (a !== "" && operator !== "") {
                    b += button.textContent;
                    display.textContent = b;
                    operatorButton.classList.remove('operator-style');
                } else {
                    if (a !== "") {
                        display.textContent += button.textContent;
                    } else {
                        display.textContent = "";
                        display.textContent += button.textContent;
                    }
                }
            }
        }

        if (button.textContent === 'CLEAR') {
            clear();
        }
        
        if (button.textContent === '=') {
            b = +display.textContent;
            result = operate(operator, a, b);
            display.textContent = result;
            a = "";
            b = ""
        }
    } )
});


