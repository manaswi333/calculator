let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    //onclick the button value is loaded
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            //clear the whole display box
            case 'C':
                display.innerText = '';
                break;
            //Evaluate the operation
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            //Clear one by one in the display box
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            //Calculate the square root of the number 
            case 'sqrt':
                display.innerText = eval(Math.sqrt(display.innerText));
                break; 
            default:
                display.innerText += e.target.innerText;
        }
    });
});