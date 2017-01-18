// safe code 
(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, 'Ringo'));

console.log(greeting);

// alter global context greeting
(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Shalom';
    console.log(greeting + ' ' + name);
    
}(window, 'Ringo'));

console.log(greeting);

