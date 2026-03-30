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
    //Dividing by zero might crash my PC
    if( b === 0){
        return 'math error'
    } else {
        return a / b;
    }
}

function percentage(a){
    return a / 100
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
//The backspacing 
const deleteBtn = document.querySelector(".backspace");
deleteBtn.addEventListener("click", () => {
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
        screen.textContent = `${firstNum}${operation}${secondNum}`;
    } else if (operation !== "") {
        operation = "";
        screen.textContent = firstNum;
    } else {
        firstNum = firstNum.slice(0, -1);
        screen.textContent = firstNum;
    }
});
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
    //Makes sures when another operator is clicked the previous calculation is calculated first
    if (firstNum !== "" && secondNum !== "" && operation !== "") {
        let results = operate(operation, firstNum, secondNum);
        screen.textContent = results;
        // carry result forward
        firstNum = results.toString();
        secondNum = "";
    }

    operation = e.target.value;
    screen.textContent = `${firstNum}${operation}`;
    });
});
const equalBtn = document.querySelector(".equal-button")
equalBtn.addEventListener("click", () => {
    //This ensures that all variables have data before calculation
    if (firstNum !== "" && secondNum !== "" && operation !== ""){
        let results = operate(operation, firstNum, secondNum);
        screen.textContent = results;
        //Below ensures that when a digit is pressed after calculation it starts again
        results = '';
        firstNum = '';
        secondNum = '';
        operation = '';
        //special case for the percentage operatpr can work with firstNum only
    } else if (firstNum !== '' && operation === "%"){
        let results = operate(operation, firstNum);
        screen.textContent = results;
    } else{
        screen.textContent = "syntax error"
    }
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

//Rounding oof not to overlap the display
function roundResult(num) {
    return Math.round(num * 100) / 100;
}

function operate(operator, num1, num2){

    /*Figured Out the + sign will concatenate the var so 1 + 1 becomes 11
    rather than two so below we explicitly convert the var values to numbers */

    if (operator === "+"){
        return roundResult(addition(Number(num1), Number(num2)));
    } else if (operator === "-"){
        return roundResult(subtract(Number(num1), Number(num2)));
    }  else if (operator === "*"){
        return roundResult(multiply(Number(num1), Number(num2)));
    } else if (operator === "/"){
        return roundResult(divide(Number(num1), Number(num2)));
    } else if (operator === "%"){
        return roundResult(percentage(Number(num1)));
    }
}

function updateFirstNum(e){

    const value = e.target.value;
    //Preventing Multiple Decimal places
    if (value === "." && firstNum.includes(".")) return;

    firstNum += value;
    screen.textContent = firstNum;
}

function updateSecondName(e){

    const value = e.target.value;
    //Preventing Multiple Decimal places
    if (value === "." && firstNum.includes(".")) return;
    
    secondNum += value
    screen.textContent = `${firstNum}${operation}${secondNum}`
}



