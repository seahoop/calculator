/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll(`.number`);
const calculator = document.querySelector(`#calculator`);
const operatorButtons = document.querySelectorAll(`.operator`);
const display = document.querySelector(`.display`);
const equalsButton = document.querySelector(`.equals`);
/*-------------------------------- Variables --------------------------------*/
let currentInput = ``;
let firstNumber = null;
let secondNumber = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
function updateDisplay(value){
    display.innerText = value;
}
//event listener for number button
numberButtons.forEach((button)=>{
    button.addEventListener(`click`, (event)=>{
        currentInput += event.target.innerText;
        updateDisplay(currentInput);
    });
});
//event listener for operator buttons
operatorButtons.forEach((button)=>{
    button.addEventListener(`click`, (event)=>{
    const clickedOperator = event.target.innerText;
    if(clickedOperator ===`C`){
        currentInput = ``;
        firstNumber = null;
        secondNumber = null;
        operator = null;
        updateDisplay(`0`);
    } else if (clickedOperator === `+`|| clickedOperator === `-` || clickedOperator === `/` || clickedOperator === `*`){
        if(currentInput !== ``){
            firstNumber = parseFloat(currentInput);
        currentInput = ``;
    operator = clickedOperator;
updateDisplay(operator);
        }
    }
});
});
equalsButton.addEventListener(`click`, () => {
    if(currentInput !== `` && operator) {
        secondNumber = parseFloat(currentInput);
        let result = 0;
        switch(operator){
            case `+`:
                result = firstNumber + secondNumber;
                break;
            case `-`:
                result = firstNumber - secondNumber;
                break;
            case `*`:
                result = firstNumber * secondNumber;
                break;
            case `/`:
                result = firstNumber / secondNumber;
                break;
        }
        updateDisplay(result);
        currentInput = result.toString();
        firstNumber = null;
        secondNumber = null;
        operator = null;
    }
});
/*-------------------------------- Functions --------------------------------*/
