// console.log('hello world');
var main = document.querySelector('main')
var textNode = document.createElement('li')



fetch('http://localhost:3000/animals')
  .then(function(response) {
    return response.json();
  }).then(function(response) {
        response.forEach(function(animals) {
          console.log('animals')
        })
  })





  main.appendChild(textNode)













  // var image = document.querySelector('card-img-top')
  // var names = document.querySelector('card-title')
  // var text = document.querySelector('card-text')

  // main.innerHTML.image
  // main.innerHTML.names
  // main.innerHTML.text
