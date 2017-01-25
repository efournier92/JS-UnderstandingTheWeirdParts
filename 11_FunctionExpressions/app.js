(function greet() {
  console.log('hello');
})();

var anonymousGreet = function() {
  console.log('anonymous: hi');
}

anonymousGreet();

function log(a) {
  console.log(a);
}

log(3);
log("Test String");

function logFunc(a) {
  a();
}

logFunc(function() {
  console.log('')
});


