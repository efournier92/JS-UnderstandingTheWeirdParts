var arr = ['John', 'Paul', 'George', 'Ringo'];

// Dangerous
for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}
console.log('_________');

// Safe 
for (var i = 0; i < arr.length; i++) {
  console.log(i + ': ' + arr[i]);
}
console.log('_________');

var person = {
  firstName: 'Default',
  lastName: 'Default',
  greet: function() {
    return 'Hi ' + this.firstName;
  }
}

var ringo = Object.create(person);
console.log(ringo);
console.log(ringo.greet());
console.log('_________');

ringo.firstName = 'Ringo';
ringo.lastName = 'Starr';
console.log(ringo);
console.log(ringo.greet());
console.log('_________');

