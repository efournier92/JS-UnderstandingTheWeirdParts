var person = {
  firstName: 'Ringo',
  lastName: 'Starr',
  getFullName: function() {

    var fullName = this.firstName + ' ' + this.lastName;
    return fullName

  }
}

var logName = function(lang1, lang2) {

  console.log('Logged:', this.getFullName());
  console.log('Arguments: ', lang1, lang2);
  console.log('___________');


}

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

// function borrowing
var person2 = {
  firstName: 'George',
  lastName: 'Harrison',
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4));
