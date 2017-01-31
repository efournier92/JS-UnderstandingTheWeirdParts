var g = G$('Ringo', 'Starr');

g.greet().setLang('en').greet(true);

$('#login').click(function() {
  
  var loginGreetr = G$('Ringo', 'Starr');

  $('#logindiv').hide();

  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})
