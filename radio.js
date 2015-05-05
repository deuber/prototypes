// Make a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM"). 
// Add a `setStation` method to your radio that allows the following ranges for a `station` property:
// `535` to `1705` for "AM".
// `88` to `108` for "FM".
// `listen` method that returns the following:
// `"distorted music"` for "AM".
// `"clear music"` for "FM".


function Radio(owner, signalType){
	this.owner = owner;
	this.signalType = signalType;
	this.station;
}

Radio.prototype.setStation = function (newStation) {
  	if(signalType === "AM"){
		if(newStation > 535 && newStation < 1705){
			this.station = newStation;
		}
	}

	if(signalType === "FM"){
		if(newStation > 88 && newStation < 108){
			this.station = newStation;
		}
	}
}


Radio.prototype.listen = function () {
  	if (this.signalType == "AM"){
  		return "distorted music"
  	}else{
  		return "clear music"
  	}
}






var test = new Radio("KQED", "FM")
