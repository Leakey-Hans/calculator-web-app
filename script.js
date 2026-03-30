function addition(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let firstNum = "";
let operation = '';
let secondNum = '';
const screen = document.querySelector(".display-screen");
const digits = document.querySelectorAll(".digit");
const clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", () => {
    screen.textContent = '';
    firstNum = '';
    operation = '';
    secondNum = '';
});
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        operation = e.target.value;
        screen.textContent = `${firstNum}${operation}`;
    });
});
const equalBtn = document.querySelector(".equal-button")
equalBtn.addEventListener("click", () => {
    let results = operate(operation, firstNum, secondNum);
    screen.textContent = results
});
/*Previously the for each loop was inside the  function updateFirstNum but that
would result in the loop add eventListener to all the button every time they
are clicked so I took it outside here plus we dont have to do this updateFirstNUm()*/
digits.forEach((digit) => {
    digit.addEventListener("click", (e) => {
         if (operation !== ''){
            updateSecondName(e);
         } else if (operation === ''){
            updateFirstNum(e);
         };
    });
});

function operate(operator, num1, num2){

    /*Figured Out the + sign will concatenate the var so 1 + 1 becomes 11
    rather than two so below we explicitly convert the var values to numbers */

    if (operator === "+"){
        return addition(Number(num1), Number(num2));
    } else if (operator === "-"){
        return subtract(Number(num1), Number(num2));
    }  else if (operator === "*"){
        return multiply(Number(num1), Number(num2));
    } else if (operator === "/"){
        return divide(Number(num1), Number(num2));
    };
}

function updateFirstNum(e){
    firstNum += e.target.value;
    screen.textContent = firstNum;
}

function updateSecondName(e){
    secondNum += e.target.value
    screen.textContent = `${firstNum}${operation}${secondNum}`
}



