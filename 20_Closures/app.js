function greet(whatToSay) {

  return function(name) {
    console.log(whatToSay, name);
  }

}

greet('Hello')('Eric');

var sayHi = greet('Hi');
sayHi('Ringo');
