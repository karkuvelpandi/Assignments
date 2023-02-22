document.addEventListener("DOMContentLoaded", function () {



    let button = document.querySelectorAll('button');
    let screen = document.getElementById('toscreen')

    console.log(button);
    for (item of button) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText
            console.log(buttonText)
           
            if(buttonText==="x"){
                buttonText="*"
            }
            if (buttonText ==="=") {
                let x = screen.innerText
                let y = eval(x)
                 console.log(x)
                 console.log(y)
                screen.innerHTML = y
            }
            else if(buttonText === "AC"){
                  screen.innerHTML=""
            }
            else if(buttonText === "C"){
                screen.innerHTML=screen.innerHTML.slice(0,screen.innerHTML.length-1)
          }
            else {
              
                screen.innerHTML = screen.innerHTML + buttonText
            }
        })
    }
})