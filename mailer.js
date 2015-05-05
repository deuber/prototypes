
// Make a `Mailer` constructor that takes a `from` email address, 
// and has `currentMessage` set to an empty object, as well as a `sentMessages` array.

// Add a `setSendTo` method that sets `currentMessage.sendTo` to be a specified email.
// Add a `setSubject` method that sets `currentMessage.subject` to be a specified subject.

// Add a `send` method that sets `currentMessage.from` to be `this.from`, 
// pushes `currentMessage` into `sentMessages`, and sets `currentMessage` to be a new object.
// Modify `send` so that it checks if `currentMessage` has both a `sendTo` and `subject` 
// before pushing to `sentMessages`.


function Mailer(from){
	this.from = from;
	this.currentMessage = {};
	this.sentMessages = [];
}

Mailer.prototype.setSendTo = function (userSendTo) {
	this.currentMessage.sendTo = userSendTo;
}

Mailer.prototype.setSubject = function (userSubject) {
	this.currentMessage.subject = userSubject;
}

Mailer.prototype.send = function () {
	this.currentMessage.from = this.from 
	this.sentMessages.push(this.currentMessage)
	this.currentMessage = {};
	return this.sentMessages; 
}

