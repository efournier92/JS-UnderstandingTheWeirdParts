/////////////////////////////////////////////////////////////////
// REQUIREMENTS
/////////////////////////////////////////////////////////////////
// Takes first name, last name, and optional language as input
// Generates both formal & informal greetings
// Supports both English & Spanish
// Is a Reusable library / framework
// Simple to type 'G$()' structure
// Supports jQuery
/////////////////////////////////////////////////////////////////
(function(global, $) {

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  var supportedLangs = ['en', 'es'];

  greetings = {
    en: 'Hello',
    es: 'Hola'
  }
  
  formalGreetings = {
    en: 'Salutations',
    es: 'Saludos'
  }

  Greetr.prototype = {};
  
  Greetr.init = function(firstName, lastName, language) {
    
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

  

}(window, jQuery));
