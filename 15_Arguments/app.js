function greet(firstName, lastName, language) {

  language = language || 'Spanish';

  if (arguments.length === 0) {
    console.log('Missing Paramaters!');
    console.log('_________');
    return;
  }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
  console.log('1st Argument:', arguments[0]);
  console.log('_________');
}

greet();
greet('Ringo');
greet('Ringo', 'Starr');
greet('Ringo', 'Starr', 'English');
