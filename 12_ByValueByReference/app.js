// by value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log('a:', a);
console.log('b:', b);

// by reference (all objects, including functions)
var c = { greeting: 'hi' };
var d;

d = c;

c.greeting = 'hello'; // mutate

console.log('c1:', c);
console.log('d1:', d);

function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log('c2:', c);
console.log('d2:', d);

// equals operator sets up new memory space (new address)
c = {greeting: 'howdy'};
console.log('c3:', c);
console.log('d3:', d);
