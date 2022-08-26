let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (a) => {
        buttonText = a.target.innerText;

        console.log("test", buttonText);
        screen.value += buttonText;

        if (buttonText == "C") {
            let result = ""
            screenValue += ""
        }
        else if (buttonText == "=") {
            let result = eval(screen.value);
            screen.value = result;
        }
        else { screen.value += buttonText; }
    }

    )
}