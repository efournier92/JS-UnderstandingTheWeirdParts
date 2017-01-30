var people = [
  {
    // the 'ringo' object
    firstName: 'Ringo',
    lastName: 'Starr',
    addresses: [
      '123 Yellow Submarine Blvd',
      '485 Abbey Rd'
    ]
  },
  {
    // the 'john' object
    firstName: 'John',
    lastName: 'Lennon',
    addresses: [
      '485 Abbey Rd',
      '112 Penny Ln'
    ],
    greet: function() {
      return 'Hello ' + this.firstName + '!';
    }
  }
]

var john = people[1];
console.log(john.greet());
