let currentInput = "0";
let previousInput = "";
let operation = null;
let shouldResetInput = false;

function appendNumber(number) {
    if (currentInput === "0" || shouldResetInput) {
        currentInput = number;
        shouldResetInput = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operation = null;
    shouldResetInput = false;
    updateDisplay();
}

function plusMinus() {
    if (currentInput.startsWith("-")) {
        currentInput = currentInput.substring(1);
    } else {
        currentInput = `-${currentInput}`;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operation !== null) calculate();
    operation = op;
    previousInput = currentInput;
    shouldResetInput = true;
}

function calculate() {
    if (operation === null || shouldResetInput || previousInput === "") return;

    if (operation === "×") operation = "*";
    else if (operation === "÷") operation = "/";
    const params = new URLSearchParams({
        num1: previousInput,
        num2: currentInput,
        sign: operation,
    });

    fetch(`calc.php?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((result) => {
            currentInput = result;
            operation = null;
            shouldResetInput = true;
            updateDisplay();
        })
        .catch((error) => {
            console.error(
                "There has been a problem with your fetch operation:",
                error
            );
        });

    previousInput = "";
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = currentInput;
}

clearDisplay();
