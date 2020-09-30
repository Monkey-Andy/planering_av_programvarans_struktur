// array för korrekt kod
const pinCode = ["1","2","3","4"]

// tom array för inmatning av kod
userInput = []

// Väljer alla button element med querySelectorAll, buttons sparas i ett objekt
const buttons = document.querySelectorAll('button.input');
const clear = document.querySelector('.clear');

// Loopar igenom objektet och plockar värdet (från value attributet) click eventListener
buttons.forEach(button => {
    button.addEventListener('click', event => {
        // pushar värdet till userInput-arrayn
        userInput.push(button.value)
        console.log(userInput)
    })
})

// tömmer arrayn
clear.addEventListener('click', event => {
    userInput = []
    console.log('userInput tömd')
})

// funktion som jämför arrayna mot varandra
const arraysMatch = (pinCode, userInput) => {
    // Checkar att array längderna är samma
    if(pinCode.length !== userInput.length) return false;

    // kollar att alla värden stämmer och är i rätt ordning
    for (var i = 0; i < pinCode.length; i++) {
        if(pinCode[i] !== userInput[i]) return false;
    }
    // Om allt stämmer överens returneras true
    return true;
}