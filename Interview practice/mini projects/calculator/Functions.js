function input(a) {
    document.getElementById("display").value += a
}

function solve() {
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y
}

function clear() {
    document.getElementById("display").value = ""
}

function backspace() {
    document.getElementById("display").value = value.slice(length - 1)
}
