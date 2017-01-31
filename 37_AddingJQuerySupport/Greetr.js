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
  
  // 'new' object method
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }
  
  // this is hidden within the scope of the IIFE
  // therefore, it's never directly accessible
  var supportedLangs = ['en', 'es'];
  
  // informal greetings
  var greetings = {
    en: 'Hi',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Salutations',
    es: 'Saludos'
  };

  // logger messages 
  var logMessages = {
    en: 'Logged in...',
    es: 'Inició sesión...',
  };

  Greetr.prototype = {
    
    // 'this' refers to the calling object at execution time
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      // ensure language is valid
      // references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "ERROR: invalid language";
      } 
    },

    // retrieve messages from object by referring to preperties using [] syntax
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName() + '.';
    },

    greet: function(formal) {
      var msg;

      // if undefined or null, it is coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // make chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      // make chainable
      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },
    
    HTMLGreeting: function(selector, formal) {

      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'jQuery selector not found';
      }
      
      // determine the messsage
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);

      // make chainable
      return this;
    }

  };

  // the actual object is created here
  // allows us to 'new' an object without calling 'new'
  Greetr.init = function(firstName, lastName, language) {

    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();

  }

  // allows us to exclude the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;
  
  // attach Greetr to global object
  // provides shorthand '$G' for ease of typing
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));

