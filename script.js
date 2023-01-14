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
    if (a === 0) {
        return 'ERROR';
    } else {
        return a / b;
    }
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
    operatorButton.classList.remove('operator-style');
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
                if (display.textContent === "" && button.textContent === "-"){
                    display.textContent += button.textContent;
                } else {
                    if (a !== "" && b !== "") {
                        a = operate(operator, a, b);
                        operator = button.textContent;
                        button.classList.add('operator-style');
                        operatorButton = button;
                        b = display.textContent;
                        b = "";
                    } else {
                        operator = button.textContent;
                        button.classList.add('operator-style');
                        operatorButton = button;
                        if (a !== "") {
                            b = +display.textContent;
                        } else {
                            a = +display.textContent;
                        }
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
                        if (display.textContent !== "" && result !== "") {
                            display.textContent = button.textContent;
                            result = "";
                        } else {
                            display.textContent += button.textContent;
                        }
                    }
                }
            }
        }

        if (button.textContent === 'CLEAR') {
            clear();
        }
        
        if (button.textContent === '=') {
            if (b === "") {
            } else {
                b = +display.textContent;
                result = operate(operator, a, b);
                if (Number.isInteger(result) === true) {
                    display.textContent = result;
                } else {
                        display.textContent = parseFloat(result.toFixed(2));
                }
                a = "";
                b = "";
            }
        }
    } )
});


