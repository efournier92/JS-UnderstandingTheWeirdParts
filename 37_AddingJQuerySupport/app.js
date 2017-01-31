// gets a new object
var g = G$('Ringo', 'Starr');

// use our chainable methods
g.greet().setLang('en').greet(true);

$('#login').click(function() {
  
  // create new 'Greetr' object
  var loginGreetr = G$('Ringo', 'Starr');

  // hide the login on screen
  $('#logindiv').hide();

  // fire HTML greeting
  // pass '#greeting' as the selector
  // also log the welcome
  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})
