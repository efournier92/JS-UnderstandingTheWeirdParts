function greet(whatToSay) {

  return function(name) {
    console.log(whatToSay, name);
  }

}

greet('Hello')('Eric');

var sayHi = greet('Hi');
sayHi('Ringo');

// this function will return 3 for all array elements
function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;

}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

