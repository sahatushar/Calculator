const display = document.getElementById('display');
const previous = document.querySelector(".previous");

const buttons = document.querySelectorAll('.btn');

let currentInput = "";
let previousInput = "";

let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener('click' , () => {
        let value = button.innerText;
        if(value === '='){
            previous.innerHTML = currentInput;
            currentInput = eval(currentInput).toString();
            display.innerHTML = currentInput;
            
        }

        else if(value === 'AC'){
            currentInput = "";
            previousInput = "";

            previous.textContent = "0";
            display.textContent = "0";
        }

        else if(value === 'DEL'){
            // console.log("DEL clicked")
            currentInput = currentInput.slice(0,-1);
            display.textContent = currentInput;
        }
        else{
            currentInput += value;
            display.innerHTML = currentInput;
        }
    })
})