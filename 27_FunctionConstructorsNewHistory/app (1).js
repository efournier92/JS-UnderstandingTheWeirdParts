function Person(firstName, lastName) {

  console.log(this)
  // function constructor
  this.firstName = firstName;
  this.lastName = lastName;
  console.log('function invoked!')

}

var ringo = new Person('Ringo', 'Starr');
console.log(ringo);

var george = new Person('George', 'Harrison');
console.log();
