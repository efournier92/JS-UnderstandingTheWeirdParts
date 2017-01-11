var greet = function(name) {
  name = name || '<name here>';
  console.log('Hello ' + name);
};

greet('Eric');

(function() {
  console.log('IIFE was Invoked!');
})();

