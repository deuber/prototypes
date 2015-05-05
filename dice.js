// 1. Make a `Dice` constructor that takes a `numberOfSides`. 
// Add a method called `roll` that randomly returns a number from `1` up to the `numberOfSides`.
// Modify your `roll` method to record the returned side in a `lastRoll` property.


function Dice(NumberOfSides){
    this.sides = NumberOfSides;
  }
  Dice.prototype.roll = function () {
  var lastRoll = Math.floor((Math.random() * this.sides) + 1)
  return "Your last roll was " + lastRoll;
  };

var test = new Dice(10);
test.roll()
