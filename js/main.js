console.log('Hello this is the main, how are you?');

console.log(document.getElementsByTagName('h1'))


let secondHeader = document.getElementsByTagName('h1')[1];
console.log(secondHeader);

setTimeout(() => {
    secondHeader.innerHTML = 'New Text';
    secondHeader.className = 'color';
}, 3000);


let fourth = document.getElementById('fourth');
fourth.innerHTML = 'Goodbye';


let myElement = document.querySelector('#fourth');
console.log(myElement);

let comboQuery = document.querySelector('div > p');
console.log(comboQuery);

let comboQueryAll = document.querySelectorAll('div > p');
console.log(comboQueryAll);


// Set up a button to change the background of myElement

// Get the button from the document
let coolButton = document.getElementById('btn');
console.log(coolButton);

// Define the callback function for when the event is triggered

const colorChange = () => {
    if (myElement.className === ''){
        myElement.className = 'color'
    } else {
        myElement.className = ''
    }
}

// Add event listener to button to execute callback on event
coolButton.addEventListener('click', colorChange);

// More Event Listeners
let anotherHeader = document.getElementsByTagName('h1')[2];

// Add event listeners for mousing over and mouse leaving the h1
anotherHeader.addEventListener('mouseenter', () => anotherHeader.innerHTML = 'Test 123!');
anotherHeader.addEventListener('mouseleave', () => anotherHeader.innerHTML = 'Bye bye!');


// Use JS to create HTML Elements
let myNewButton = document.createElement('button');
myNewButton.innerHTML = 'I Am Alive!';
myNewButton.style = "color: blue; padding: 20px;"

// Add the element to the document
document.body.append(myNewButton);


// Add an event listener to new button to create new headers

myNewButton.addEventListener('click', () => {
    // console.log('I have been clicked!')
    let newHeader = document.createElement('h2');
    newHeader.innerHTML = prompt('What would you like to say? ');
    newHeader.className = 'color';
    document.body.append(newHeader);
})


// Using JS to grab data from a submitted form



