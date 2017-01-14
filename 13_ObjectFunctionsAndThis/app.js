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
    this.name = 'updated c object';
    console.log(this);

    var setName = function(newName) {
      this.name = newName;
    }
    setname('Updated c object AGAIN!');
    console.log(this);
  }
}

c.log();
