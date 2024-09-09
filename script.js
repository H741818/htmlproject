let displayValue='';
let operator='';
let operand1='';
let operand2='';

function appendNumber(number){
    displayValue +=number;
    document.getElementById('display').value = displayValue;
}
    function appendOperator(op){
        operator = op;
        operand1 = displayValue;
        displayValue ='';
        document.getElementById('display').value=displayValue;
    }
    function appendDecimal(){
        if (!displayValue.includes('.')){
        displayValue +='.';
        document.getElementById('display').value = displayValue;
    }
}
function calculator(){
    operand2 = displayValue;
    let result =0;
    switch (operator){
        case '+':
            result= parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result= parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result= parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
             result= parseFloat(operand1) / parseFloat(operand2);
             break;
    
    }
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    }
    function clearDisplay(){
        displayValue ='';
        operator = '';
        operand1 = '';
        operand2 = '';
        document.getElementById('display').value = displayValue;
    }