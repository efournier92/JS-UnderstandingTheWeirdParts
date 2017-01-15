// regular function declaration
function greet(name) {
  console.log('Hello', name);
}
greet('Eric');

// using a function expression 
var greetFunc = function(name) {
  console.log('Hello', name);
};
greetFunc('Ringo');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {

  console.log('Hello', name);

}('George');

