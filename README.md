# Intro Prototypes



### Directions

* Fork this repo
* Clone it from your github account onto your computer, and switch into the directory
	* Make a JS file for each exercise you attempt.
	* Play with your code in your snippets or console to verify it works correctly.
* Once finished do the following:
	* `git add . -A` from the prototypes folder.
	* `git commit -m 'solutions'`
	* `git push origin master`
* Submit the link to your fork in the homework form.

----

| Goal |
| :--- |
| Try to complete the **dice**, **starship**, and **radio** problems.|

**NOTE**: it's very hard to express an exhaustive description of each custom type outlined below. We encourage you to discuss the ambiguity of requirements for **methods** and **properties**. Also, for some exercises, you might need to add a property (or properties) to the prototype in order to make your method work. 

## Exercises

1. Make a `Dice` constructor that takes a `numberOfSides`. Add a method called `roll` that randomly returns a number from `1` up to the `numberOfSides`.
  * Modify your `roll` method to record the returned side in a `lastRoll` property.

2. Make a `Starship` constructor that takes a `model` and `ownerName`. 
  * Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method that let you change and read the `topSpeed`. *Assume `topSpeed` is just a number.*
  * Give your `Starship` an `accelerateTo` method that sets `currentSpeed` to some number, unless that number is greater than its `topSpeed`.
 
3. Make a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM"). 
  * Add a `setStation` method to your radio that allows the following ranges for a `station` property:
    * `535` to `1705` for "AM".
    * `88` to `108` for "FM".
  * Add a `listen` method that returns the following:
    * `"distorted music"` for "AM".
    * `"clear music"` for "FM".
 

5. Make a `Mailer` constructor that takes a `from` email address, and has `currentMessage` set to an empty object, as well as a `sentMessages` array.
  * Add a `setSendTo` method that sets `currentMessage.sendTo` to be a specified email.
  * Add a `setSubject` method that sets `currentMessage.subject` to be a specified subject.
  * Add a `send` method that sets `currentMessage.from` to be `this.from`, pushes `currentMessage` into `sentMessages`, and sets `currentMessage` to be a new object.
    * Modify `send` so that it checks if `currentMessage` has both a `sendTo` and `subject` before pushing to `sentMessages`.
