var person = new Object();

person["firstname"] = "Eric";
person.lastname = "Fournier";
console.log(person.firstname, person["lastname"]);

person.address = new Object();
person.address.street = "123 Fake St.";
console.log(person.address.street);

console.log(person);
