String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit; 
}

console.log("Ringo".isLengthGreaterThan(9));
