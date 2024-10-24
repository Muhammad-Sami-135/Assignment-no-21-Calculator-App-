var input = document.getElementById("inputFeild")

function sin() {
    input.value = Math.sin(input.value)
}

function cos() {
    input.value = Math.cos(input.value)
}

function tan() {
    input.value = Math.tan(input.value)
}

function getValue(number) {
    input.value += number
}

function square() {
    input.value = input.value * input.value
}

function squareRoot() {
    input.value = Math.sqrt(input.value)
}

function clrChar() {
    input.value = "0"
}

function del() {
    input.value = input.value.slice(0, -1)
}

function logarithum() {
    input.value = Math.log(input.value)
}

function solve() {
    if (input.value) {
        input.value = eval(input.value)
    }
    else {
        input.value = "Syntex error"
    }
}

