//STOPWATCH

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error(`Stopwatch has already started!`);

    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error(`Stopwatch isn't started! can't stop...`);

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    endTime = null;
    startTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch(10);

// 01
/* Create a Simple Class: 
Define a Car class with properties like make, model, and year.
Add a method startEngine() that logs a message indicating the car is starting.
Instantiate the class and call the method. */

//Constructor function for car
function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);

  this.startEngine = function () {
    console.log(
      `The ${this.year} ${this.make} ${this.model}'s engine is starting.`
    );
  };
}

// Instantiating the Car object
const mycar = new Car("Toyota", "Corolla", 2022);

// Calling the startEngine method
mycar.startEngine();

// 02
/*
Inheritance:
Create a ElectricCar class that extends the Car class.
Add a batteryLevel property and a method chargeBattery() that increases the battery level.
Demonstrate method overriding by redefining the startEngine() method to include a message about battery status. */

// 03
/* Encapsulation:
Add private properties to the Car class using the # prefix (e.g., #engineStatus).
Provide getter and setter methods for accessing and updating these properties. */

// 04
/* 
Polymorphism:
Implement polymorphism by creating a Vehicle superclass and having Car and Bike classes inherit from it.
Add a common method move() that behaves differently depending on the vehicle type. */

// 05
/* Composition:
Create a Driver class with a method drive(vehicle) that accepts any object with a startEngine() method.
Show how this method works with both Car and Bike objects. */

// 06
/* Practice with Static Methods:
Add a static method compareCars(car1, car2) to the Car class that compares two car objects based on their year. */

// 07
/* Chainable Methods:
Modify the Car class to allow method chaining (e.g., car.startEngine().drive()). */
