function sayHiLater() {

  var greeting = 'Hi!';

  setTimeout(function() {
    console.log(greeting) 
  }, 3000);

}

sayHiLater();

// //jQuery uses function expressions & first-class functions
// $("button").click(function() {
//
// });

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback(); // runs the functions it's given
}

tellMeWhenDone(function() {
  console.log("I'm done!")
})

tellMeWhenDone(function() {
  console.log("I'm done too!")
})

tellMeWhenDone(function() {
  console.log("I'm done three!")
})
