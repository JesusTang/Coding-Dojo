var number1=''
var number2=''
var op = ''
var displayDiv = document.querySelector("#display");
function press(number) {
    number1 += number
    displayDiv.innerText = number1
}

function setOP(operator) {
    number2=number1
    number1=''
    displayDiv.innerText = "0"
    op = operator
}

function clr() {
    number1=''
    number2=''
    op = ''
    displayDiv.innerText = '0'
}

function calculate() {
    var res = 0
    var x = parseFloat(number2)
    var y = parseFloat(number1)
    if (op == '*') {
        res = x*y
        displayDiv.innerText =  res
    }
    else if (op == '+') {
        res = x+y
        displayDiv.innerText = res
    }
    else if (op == '-') {
        res = x-y
        displayDiv.innerText =  res
    }
    else if (op == '/') {
        res = x/y
        displayDiv.innerText =  res
    }
    number1 = ''
    number2 = ''
}
const btn = document.getElementById('btn');

