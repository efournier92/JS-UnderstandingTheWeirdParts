var person = {
  firstName: 'Eric',
  lastName: 'Fournier',
  address: {
    street: '123 Fake St.',
    city: 'New York',
    state: 'NY'
  }
};

function greet(person) {
  console.log('Hi', person.firstName, person.lastName);
};

greet(person);

greet({
  firstName: 'Ringo',
  lastName: 'Starr'
});

console.log(person);
