// Javascript Practice Stuff with Brittney

// console.log("Hello World!")

// function test(a,b){
//     a+b
//     return(a+b)
// }

// test(2,2);

// console.log(test())



// These are primitive values data structures, data types. Simple information used in javascript.
// This is a string. Using quotes makes them a string.
const tag ='button'; 
// Not a string below
const fontSize = 50;
// 
const isActive = true;

const object = {
    tag: 'h1',
    fontSize: 30,
    isActive: true,
    innerText: ''
}





// Created new button below using techniques learned below. Can re-use variables instead of selectors.

// Create an element

const differentButton = document.createElement(object.tag);

// Will place an element on the body of the html file

document.body.appendChild(differentButton);

// Will update the innerHTML of button

differentButton.innerHTML = 'second button';

// creates a variable that point to a different variable

// const myButton = differentButton; Commented this bit out to show const object

// Variable (const) with self made name (myButton), followed by the method. Use a selector as you would CSS. Javascript is very laidback when it comes to spacing. Line is over once you use a semicolon. VV

const myButton = document.querySelector('#this-button');

// Similar to css selectors below VV

myButton.style.color = 'green';
differentButton.style.color = 'purple';

// Some classes are different than the CSS versions VV

myButton.style.fontSize = '50px';
differentButton.style.fontSize = '100px';

// Changes the text or html of a button

myButton.innerText = 'Changed'
myButton.innerHTML = 'Different'

// Listens to event, in this instance it is click, then it performs the function of alert. There are many different events to use.

myButton.addEventListener('click', function() {
    alert('hello')
});

console.log("Stephen");
console.log("Curry");