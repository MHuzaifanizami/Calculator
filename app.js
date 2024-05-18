// Getting From Html *******
var CurrentNumber = document.getElementById("current-number");
var operatorSec = document.getElementById("operator-sec");
var previousNumber = document.getElementById("previous-number");
var result = document.getElementById("btn");
var deleteAll = document.getElementById("delete-all");
var delet = document.getElementById("delete");
var historySec = document.getElementById("history-sec");



// getting Value function  *****
function getValue(val) {
    var CurrentNumber = document.getElementById("current-number")
    CurrentNumber.value += val
    console.log(CurrentNumber.value)
}

function operatorFunction(opr) {
    if (CurrentNumber.value) {
        operatorSec.value = opr;
        previousNumber.value = CurrentNumber.value;
        CurrentNumber.value = "";
    } else {
        operatorSec.value = opr;
    }
}

// operator  function *****
function myResult() {
    var final = ""
    if (operatorSec.value == "+") {
        var num1 = Number(previousNumber.value);
        var num2 = Number(CurrentNumber.value);
        final = num1 + num2
        operatorSec.value += num2 + "="
        CurrentNumber.value = final

    }
    else if (operatorSec.value == "-") {
        var num1 = Number(previousNumber.value);
        var num2 = Number(CurrentNumber.value);
        final = num1 - num2
        operatorSec.value += num2 + "="
        CurrentNumber.value = final

    }
    else if (operatorSec.value == "*") {
        var num1 = Number(previousNumber.value);
        var num2 = Number(CurrentNumber.value);
        final = num1 * num2
        operatorSec.value += num2 + "="
       CurrentNumber.value = final

    }
    else if (operatorSec.value == "/") {
        var num1 = Number(previousNumber.value);
        var num2 = Number(CurrentNumber.value);
        final = num1 / num2
        operatorSec.value += num2 + "="
        CurrentNumber.value = final

    }
}



// Delete all function ******
function deleteAllFunction() {
    CurrentNumber.value = "";
    operatorSec.value = "";
    previousNumber.value = "";
}

// single delete function ****
function deleteFunction() {
    CurrentNumber.value = CurrentNumber.value.slice(0, CurrentNumber.value.length - 1);
}


