let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let a=0;

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'ENTER') {
           if(a==0) {
            
                screen.value = eval(screenValue);
                screenValue = screen.value;
              }
            else {
              screenValue=Math.sqrt(screenValue.substring(1,screenValue.length));
              screen.value = eval(screenValue);
              screenValue = screen.value;
               a=0;
            }
            
        }
        else if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'Clear') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'Del') {
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else if (buttonText == '√') {
            screenValue=screenValue + buttonText; 
            screen.value = screenValue;
            a=1;
        }
        else if (buttonText == 'π') {
            screenValue=screenValue + 3.14; 
            screen.value = screenValue;
            
            
        }
        
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
