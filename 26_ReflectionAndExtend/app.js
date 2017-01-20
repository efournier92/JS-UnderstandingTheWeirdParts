var a = {};
var b = function() { };
var c = [1,2,3];

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

ringo.__proto__ = person;

for (var prop in ringo) {
  if (ringo.hasOwnProperty(prop)) {
    console.log(prop + ': ' + ringo[prop]);
  }
}

var george = {
  address: '123 Fake St.'
  get FormalFullName: function() {
    return this.lastName + ', ' + this.firstName;
  }
}

var paul = {
  getFirstName: function() {
    return firstName; 
  }
}


