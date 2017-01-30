var person = new Object();

person["firstname"] = "Eric";
person.lastname = "Fournier";
console.log(person.firstname, person["lastname"]);

person.address = new Object();
person.address.street = "123 Fake St.";
person.address.city = "New York";
person.address.state = "NY";
console.log(person.address);

console.log(person);

