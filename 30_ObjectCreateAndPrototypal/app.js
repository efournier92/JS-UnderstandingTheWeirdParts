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
