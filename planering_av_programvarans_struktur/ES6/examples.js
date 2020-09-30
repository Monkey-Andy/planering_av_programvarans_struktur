/*Omvandla följande funktion till en ES6 pilfunktion. Skriv ut resultat med console.log()

function wholeName(firstName, lastName) {
	return 'Hello' + firstName + '' + lastName;
}*/

console.log(wholeName = () => 'Hello' + firstName + '' + lastName);

// använd map funktionen för att dubbla värdena i arrayn och skriv ut nya arrayn i konsolen

var numbers = [3, 4, 5, 6, 7];

var doubleNumbers = numbersItem => numbersItem * 2;


var numbers = numbers.map(doubleNumbers);

console.log(numbers);

// Tillägg en ny rad i numbers-arrayn med push. Generera en ul-list i DOMen med JavaScript.

var numbers = [3, 4, 5, 6, 7];
numbers.push(1);

document.body.onload = addElement;

function addElement () { 
    // create a new ul element 
    const newUl = document.createElement("ul"); 
    
    // and give it some content 
    const newUl = document.createTextNode(numbers); 
    
    // add the text node to the newly created div
    newUl.appendChild(newUl);  
  
    // add the newly created element and its content into the DOM 
    const currentUl = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

