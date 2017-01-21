function Person(firstName, lastName) {

  console.log(this)
  this.firstName = firstName;
  this.lastName = lastName;
  console.log('function invoked!')

}

var ringo = new Person('Ringo', 'Starr');
console.log(ringo);

var george = new Person('George', 'Harrison');
console.log(george);
