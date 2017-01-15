// safe code 
(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, 'Ringo')); // IIFE

console.log(greeting);

