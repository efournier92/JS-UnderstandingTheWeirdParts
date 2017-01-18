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

// this function will return 1, 2, 3 as array elements
function buildFunctions2() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }

  return arr;

}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

