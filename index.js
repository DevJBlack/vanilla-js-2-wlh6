function sayHi() {
  alert('hello')
}

function greet() {
  alert('aloha')
}

// let root = document.getElementById('root')

// root.addEventListener('click', function blah() {
//   console.log('hi')
// })

// root.addEventListener('click', greet)

let alerter = document.querySelector('#alerter')

alerter.addEventListener('click', function(e) {
  alert('I was clicked!')
})

let someButton = document.querySelector('.some-button')

someButton.addEventListener('click', function(event) {
  event.stopPropagation()
  console.log('some button was clicked')
})

let form = document.querySelector('form')
let userInput = form.querySelector('input')
let list = document.querySelector('ul')

let item1 = document.createElement('li')
item1.innerText = 'Aloha!'

list.appendChild(item1)

form.addEventListener('submit', function(e) {
  e.preventDefault()
  let text = userInput.value
  let item = document.createElement('li')
  item.innerText = text
  list.appendChild(item)
  userInput.value = ''
  let button = form.querySelector('button')
  console.log(button.getAttribute('type'))
})

userInput.addEventListener('keydown', function() {
  let button = form.querySelector('button')
  button.removeAttribute('disabled')
})

// list.remove('li')


