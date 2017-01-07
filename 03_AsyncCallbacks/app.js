// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);

console.log('waiting...');
waitThreeSeconds();
console.log('finished execution');

var a = 2, b = 3, c = 4;

a = b = c;

console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
