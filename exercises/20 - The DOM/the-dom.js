// Getting properties of elements
const element = document.querySelector('h2')
console.dir(element)  // Get all properties of an element
console.log(element.textContent);

// Inserting elements
const pizzaElement = document.querySelector('.pizzaList')
pizzaElement.insertAdjacentText('beforeend', '🍕')

// Working with classes
const imageClass = document.querySelector('.nice')
console.log(imageClass.classList);
// imageClass.classList.remove('cool')
// imageClass.classList.add('round')
// imageClass.classList.toggle('round')
function transformImage() {
  imageClass.classList.toggle('round')
}
imageClass.addEventListener('click', transformImage)