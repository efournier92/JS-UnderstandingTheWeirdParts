var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

var ringo = {
  firstName: 'Ringo',
  lastName: 'Starr'
}

// modern browsers allow this, but it's slow
// DON'T DO THIS
ringo.__proto__ = person;
console.log(ringo.getFullName());
console.log(ringo.firstName);
console.log(ringo.lastName);

