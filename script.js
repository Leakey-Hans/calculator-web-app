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

let firstNum = '';
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
})
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
    
    if (operator === "+"){
        return addition(num1, num2);
    } else if (operator === "-"){
        return subtract(num1, num2);
    }  else if (operator === "*"){
        return multiply(num1, num2);
    } else if (operator === "/"){
        return divide(num1, num2)
    };
}

function updateFirstNum(e){
    firstNum += e.target.value;
    screen.textContent = firstNum;
}

function updateSecondName(e){
    secondNum += e.target.value
    screen.textContent = `${firstNum} ${secondNum}`
}



