// 2. Make a `Starship` constructor that takes a `model` and `ownerName`. 
// Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method 

// that let you change and read the `topSpeed`. *Assume `topSpeed` is just a number.*


// Give your `Starship` an `accelerateTo` method that sets `currentSpeed` 
// to some number, unless that number is greater than its `topSpeed`.


function StarShip(model, ownerName){
    this.model = model;
    this.ownerName = ownerName
    this.topSpeed = 100;
    this.currentSpeed;  
  }
  StarShip.prototype.setTopSpeed = function (newTopSpeed) {
  	this.topSpeed = newTopSpeed;
  };
  StarShip.prototype.getTopSpeed = function () {
  	return this.topSpeed;
  };
   StarShip.prototype.accelerateTo = function (accelerateAmt) {
   	if(accelerateAmt < this.topSpeed){
   		  this.currentSpeed = accelerateAmt;
   	}
  };


var jet = new Starship("jet", "deuber");


