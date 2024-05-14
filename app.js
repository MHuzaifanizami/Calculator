// Getting From Html *******
var display1 = document.getElementById("display1");
var operatorSec = document.getElementById("operator-sec");
var display3 = document.getElementById("display3");
var result = document.getElementById("btn");
var zero = document.getElementById("zero");
var doubleZero = document.getElementById("double-zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var subtract = document.getElementById("subtract");
var plus = document.getElementById("plus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var point = document.getElementById("point");
var deleteAll = document.getElementById("delete-all");
var delet = document.getElementById("delete");


// Functions for Numbers ********
function doubleZeroFunction() {
    display1.value += "00"
}
function zeroFunction() {
    display1.value += "0"
}
function oneFunction() {
    display1.value += "1"
}
function twoFunction() {
    display1.value += "2"
}
function threeFunction() {
    display1.value += "3"
}
function fourFunction() {
    display1.value += "4"
}
function fiveFunction() {
    display1.value += "5"
}
function sixFunction() {
    display1.value += "6"
}
function sevenFunction() {
    display1.value += "7"
}
function eightFunction() {
    display1.value += "8"
}
function nineFunction() {
    display1.value += "9"
}
function pointFunction() {
    display1.value += "."
}


// Functions for Symbols ********

function subtractFunction() {
    operatorSec.value += "-";
    display3.value = display1.value;
    display1.value = "";
    // display3.value = final
    operatorSec.value = "-"

}

function multiplyFunction() {
    operatorSec.value += "*";
    display3.value = display1.value;
    display1.value = "";
    // display3.value = final;
    operatorSec.value = "*";
}

function divideFunction() {
    operatorSec.value += "/";
    display3.value = display1.value;
    display1.value = "";
    // display3.value = final
    operatorSec.value = "/"
}

function plusFunction() {
    operatorSec.value += "+";
    display3.value = display1.value;
    display1.value = "";
    // display3.value = final
    operatorSec.value = "+"

}
function myResult() {
    var final = ""
    if (operatorSec.value == "+") {
        var num1 = Number(display3.value);
        var num2 = Number(display1.value);
        final = num1 + num2
        operatorSec.value += num2 + "="
        display1.value = final




    }
    else if (operatorSec.value == "-") {
        var num1 = Number(display3.value);
        var num2 = Number(display1.value);
        final = num1 - num2
        operatorSec.value += num2 + "="
        display1.value = final

    }
    else if (operatorSec.value == "*") {
        var num1 = Number(display3.value);
        var num2 = Number(display1.value);
        final = num1 * num2
        operatorSec.value += num2 + "="
        display1.value = final

    }
    else if (operatorSec.value == "/") {
        var num1 = Number(display3.value);
        var num2 = Number(display1.value);
        final = num1 / num2
        operatorSec.value += num2 + "="
        display1.value = final

    }
}



// Delete all function ******
function deleteAllFunction() {
    display1.value = "";
    operatorSec.value = "";
    display3.value = "";
}

// single delete function ****
function deleteFunction() {
    display1.value = display1.value.slice(0, display1.value.length - 1);
}


