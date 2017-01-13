var objectLiteral = {
  firstName: 'Mari',
  isAProgrammer: false 
}
console.log('Stringified:', JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Tony", "isAProgrammer": true }');
console.log('Parsed:', jsonValue);

// SAMPLE JSON SYNTAX
// {
//   "firstName": "Mary",
//   "isAProgrammer": true
// }
