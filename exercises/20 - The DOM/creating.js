// Creating an element

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200'
myImage.alt = 'random image'
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);


// Appending elements to the body

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);
// document.querySelector('body').appendChild(myParagraph)  // This is valid too

// Inserting adjacent elements
const myHeader = document.createElement('h2');
myHeader.textContent = 'I am a Heather! Ehm, header';
myDiv.insertAdjacentElement('beforebegin', myHeader);

// Appending a list - Excercise
// List UL
const myList = document.createElement('ul');
// List item - 3
const myListItem3 = document.createElement('li');
myListItem3.textContent = 'three';
myList.appendChild(myListItem3);
// List item - 1
const myListItem1 = document.createElement('li');
myListItem1.textContent = 'one';
myListItem3.insertAdjacentElement('beforebegin', myListItem1);
// List item - 4
const myListItem4 = document.createElement('li');
myListItem4.textContent = 'four';
myList.appendChild(myListItem4);
// List item - 2
const myListItem2 = document.createElement('li');
myListItem2.textContent = 'two';
myListItem1.insertAdjacentElement('afterend', myListItem2);
// List item - 5
const myListItem5 = document.createElement('li');
myListItem5.textContent = 'five';
myList.insertAdjacentElement('beforeend', myListItem5);
// Append finished UL to body
document.body.appendChild(myList);
