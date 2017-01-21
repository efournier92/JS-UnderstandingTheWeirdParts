function Person(firstName, lastName) {
  // function constructor
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

var ringo = new Person('Ringo', 'Starr');
console.log(ringo);
console.log(ringo.getFullName());

var george = new Person('George', 'Harrison');
console.log(george);

Person.prototype.getFormalFullName = function() {
  return this.lastName + ', ' + this.firstName;
}
console.log(george);
console.log(george.getFormalFullName());
