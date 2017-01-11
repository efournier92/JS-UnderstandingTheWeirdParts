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
  console.log('Hi', person.firstName);
};

greet(person);

console.log(person);
