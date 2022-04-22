var memoryRegister = '';

let op = document.getElementById('op');
buttons = document.querySelectorAll('button');
let opValue = ' ';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            opValue += buttonText;
            op.value = opValue;
        }
        else if (buttonText == '√') {
            opValue += Math.sqrt(opValue);
            op.value = opValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            opValue += buttonText;
            op.value = opValue;
        }
        else if (buttonText == '±') {
            buttonText = '-';
            opValue = opValue - (opValue * 2);;
            op.value = opValue;
        }
        else if (buttonText == 'AC') {
            opValue = "";
            op.value = opValue;
        }
        else if (buttonText == '=') {
            op.value = eval(opValue);
        }
        else if (buttonText == '⌫') {
            opValue = opValue.slice(0, (opValue.length - 1));
            op.value = opValue;
        }
        else if (buttonText == 'MS') {
            memoryRegister = opValue;
        }
        else if (buttonText == 'MR') {
            opValue = memoryRegister;
            op.value = opValue;
        }
        else {
            opValue += buttonText;
            op.value = opValue;
        }
    });
}

