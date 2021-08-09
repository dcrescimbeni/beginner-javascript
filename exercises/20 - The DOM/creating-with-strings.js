const targetDiv = document.querySelector('.target')
const imageSrc = 'https://source.unsplash.com/random/400x400'
const imageAlt = 'random image'

const myHTML = `
  <div>
    <h2>${imageAlt}</h2>
    <img src="${imageSrc}" alt="${imageAlt}"></img>
  </div>
`

const myFragment =  document.createRange().createContextualFragment(myHTML)
myFragment.querySelector('img').alt = 'another string'

document.body.appendChild(myFragment)