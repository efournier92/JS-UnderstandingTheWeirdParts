function greet(firstName, lastName, language) {

  language = language || 'Spanish';

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
  console.log('_________');
}

greet();
greet('Ringo');
greet('Ringo', 'Starr');
greet('Ringo', 'Starr', 'English');
