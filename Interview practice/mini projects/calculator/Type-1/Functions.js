function input(a) {
    document.getElementById("display").value += a
}

function solve() {
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y
}

function del() {
    document.getElementById("display").value = ""
}

function bac() {
    document.getElementById("display").value = value.substr(0,value.length-1);
}
