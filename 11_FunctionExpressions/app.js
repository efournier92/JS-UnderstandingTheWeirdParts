(function greet() {
  console.log('hello');
})();

var anonymousGreet = function() {
  console.log('anonymous: hi');
}

anonymousGreet();

function log(a) {
  a();
}

log(3);

log("Test String");

log(function() {
  console.log('anonymous function: Hi!')
});


