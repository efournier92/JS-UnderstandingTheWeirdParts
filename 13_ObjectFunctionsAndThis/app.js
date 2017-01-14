function a() {
  console.log(this);
  this.newVariable = 'Why, Hello';
}

var b = function() {
  console.log(this);
}

a();
console.log(newVariable);
b();

var c = {
  name: 'The c object',
  log: function() {
    var self = this;

    self.name = 'updated c object';
    console.log(self);

    var setName = function(newName) {
      self.name = newName;
    }
    setName('Updated c object AGAIN!');
    console.log(self);
  }
}

c.log();
