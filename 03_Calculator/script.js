const elementInputField = document.querySelector("#input");
const elementSavedValue = document.querySelector("#saved-value");

const elementButtonFactorial = document.querySelector("#btn-factorial");
const elementButtonCE = document.querySelector("#btn-ce");
const elementButtonC = document.querySelector("#btn-c");
const elementButtonDelete = document.querySelector("#btn-delete");

const elementButtonReciprocal = document.querySelector("#btn-reciprocal");
const elementButtonSquare = document.querySelector("#btn-square");
const elementButtonSquareRoot = document.querySelector("#btn-sqrt");
const elementButtonDivide = document.querySelector("#btn-divide");

const elementButtonNumber = document.getElementsByClassName("btn-number");
const elementButtonMultiply = document.querySelector("#btn-multiply");
const elementButtonSubtract = document.querySelector("#btn-subtract");
const elementButtonAdd = document.querySelector("#btn-add");

const elementButtonNegate = document.querySelector("#btn-negative");
const elementButtonDecimal = document.querySelector("#btn-decimal");
const elementButtonEqual = document.querySelector("#btn-equal");

function funcGetInputValue(){
    let inputValue = elementInputField.innerHTML;
    return(inputValue);
}

function funcGetInputValueAsNumber(){
    let num = Number.parseFloat(funcGetInputValue());
    return(num);
}

function funcGetInputValueAsString(){
    let str = funcGetInputValue().toString();
    return(str);
}

function funcSendInputValue(inputValue){
    elementInputField.innerHTML = inputValue;
}

function funcSendSavedValue(inputValue){
    elementSavedValue.innerHTML = inputValue;
}







// -------------------------
// Button n! (Factorial)

function funcFactorial(value){
    let numOutput = 1;
    if (!Number.isInteger(value)){
        return("Input must be an integer");
    } else {
        let numRecurrenceCount = value;
        for (let i = 1; i <= numRecurrenceCount; i++){
	        numOutput = numOutput * i;
        }
        return(numOutput);
    }
}

elementButtonFactorial.addEventListener("click", function(){
    let value = funcGetInputValueAsNumber();

    funcSendSavedValue(`${value}!`);
    
    value = funcFactorial(value);
    funcSendInputValue(value);
    }
)

// -------------------------
// Button "CE" (clear input only)

elementButtonCE.addEventListener("click", function(){
    funcSendInputValue(0);
    }
)

// -------------------------
// Button "C" (clear input and saved value both)

elementButtonC.addEventListener("click", function(){
    funcSendInputValue(0);
    funcSendSavedValue(0);
    }
)

// -------------------------
// Button "Delete" (deletes last character from input)

elementButtonDelete.addEventListener("click", function(){

    let stringFromValue = funcGetInputValueAsString(); // get input field value as a string

    if (stringFromValue.length <= 1){ // if string length is just one char
        funcSendInputValue(0); // change it to zero
    } else {
        newValue = parseFloat(stringFromValue.slice(0,-1)); // else pop last char
        funcSendInputValue(newValue); // and send value to input field
        }
    }
)

// -------------------------
// Button 1/x (Reciproce)

function funcReciproce(value){
    return(1/value);
}

elementButtonReciprocal.addEventListener("click", function(){
    let value = funcGetInputValueAsNumber();
    funcSendSavedValue(`1/${value}`);
    funcSendInputValue(funcReciproce(value));
    }
)

// -------------------------
// Button x^2 (square)

function funcSquare(value){
    return(value**2);
}

elementButtonSquare.addEventListener("click", function(){
    let value = funcGetInputValueAsNumber();
    funcSendSavedValue(`${value}^2`);
    value = funcSquare(value);
    funcSendInputValue(value);
    }
)

// -------------------------
// Button SQRT

function funcSquareRoot(value){
    return(Math.sqrt(value));
}

elementButtonSquareRoot.addEventListener("click", 
    function(){
        let value = funcGetInputValueAsNumber();
        funcSendSavedValue(`SQRT(${value})`);
        value = funcSquareRoot(value);
        funcSendInputValue(value);
    }
)

// -------------------------
// Button NUMBER

for (let i = 0; i < elementButtonNumber.length; i++){
    elementButtonNumber[i].addEventListener("click", 
        function(){
            if (funcGetInputValueAsString() == "0"){ // check if input field is only zero
                funcSendInputValue(this.innerHTML); // if true change zero to clicked number
            } else {
                let value = funcGetInputValueAsString() + this.innerHTML.toString(); // else concatenate clicked number
                funcSendInputValue(value); // and send it to input field
            }
        }
    )
}

// -------------------------
// Button decimal .

elementButtonDecimal.addEventListener("click", 
    function(){
        let string = funcGetInputValueAsString();
        if (string.includes(".")) {
            // do nothing
        } else {
            string = string + this.innerHTML.toString();
            funcSendInputValue(string);
        }
    }
)

// -------------------------
// Button negate

elementButtonNegate.addEventListener("click",
    function(){
        let value = funcGetInputValueAsNumber();
        funcSendInputValue(-value);
    }
)


// -------------------------
// Button equal


let operation, value1, value2, result;


elementButtonEqual.addEventListener("click",
    function(){
        value2 = funcGetInputValueAsNumber();

        if (operation == 'divide'){
            result = Math.floor((value1/value2)*100000000)/100000000;
            funcSendSavedValue(`${value1}/${value2}=`);
        }

        if (operation == 'multiply'){
            result = Math.floor((value1*value2)*100000000)/100000000;
            funcSendSavedValue(`${value1}*${value2}=`);
        }

        if (operation == 'add'){
            result = Math.floor((value1+value2)*100000000)/100000000;
            funcSendSavedValue(`${value1}+${value2}=`);
        }

        if (operation == 'subtract'){
            result = Math.floor((value1-value2)*100000000)/100000000;
            funcSendSavedValue(`${value1}-${value2}=`);
        }

        if (operation == 'none'){
            // do nothing
        }

        funcSendInputValue(result);
        value1 = result;
        operation = 'none';
    }
)


elementButtonDivide.addEventListener("click",
    function(){
        value1 = funcGetInputValueAsNumber();
        funcSendSavedValue(`${value1}/`);
        funcSendInputValue(0);
        operation = 'divide';        
    }
)

elementButtonMultiply.addEventListener("click",
    function(){
        value1 = funcGetInputValueAsNumber();
        funcSendSavedValue(`${value1}*`);
        funcSendInputValue(0);
        operation = 'multiply';        
    }
)

elementButtonAdd.addEventListener("click",
    function(){
        value1 = funcGetInputValueAsNumber();
        funcSendSavedValue(`${value1}+`);
        funcSendInputValue(0);
        operation = 'add';        
    }
)

elementButtonSubtract.addEventListener("click",
    function(){
        value1 = funcGetInputValueAsNumber();
        funcSendSavedValue(`${value1}-`);
        funcSendInputValue(0);
        operation = 'subtract';        
    }
)