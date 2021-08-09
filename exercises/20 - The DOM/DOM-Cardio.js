// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const myElement1 = document.createElement('li');
myElement1.innerText = 'one'
myList.appendChild(myElement1);
const myElement2 = document.createElement('li');
myElement2.innerText = 'two'
myList.appendChild(myElement2);
const myElement3 = document.createElement('li');
myElement3.innerText = 'three'
myList.appendChild(myElement3);
// put that list into the above wrapper
myDiv.appendChild(myList)

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://source.unsplash.com/random/600x600';
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
<div>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
`;
const innerHTMLDiv = document.querySelector('.wrapper').innerHTML
myDiv.innerHTML = myHTML + innerHTMLDiv

// add a class to the second paragraph called warning
// remove the first paragraph
const secondNode = myDiv.childNodes[1].children[1];
secondNode.classList.add('warning')
console.log(secondNode.previousSibling);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
