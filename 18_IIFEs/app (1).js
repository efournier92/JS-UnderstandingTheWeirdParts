// function statement 
function greet(name) {
  console.log('Hello', name);
}
greet('Eric');

// function expression 
var greetFunc = function(name) {
  console.log('Hello', name);
};
greetFunc('Ringo');

// IIFE (Immediately Invoked Function Expression)
var greeting = function(name) {
  console.log('Hello', name);
}('George');

// another IIFE
var firstName = 'Paul';
(function(name) {
  var greeting = 'Hello';
  console.log('inside IIFE:', greeting, name);
}(firstName));

