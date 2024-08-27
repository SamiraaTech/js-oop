/*
----------------------------
Mosh exercise
----------------------------
*/

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

/* 
---------------------------------
OOP Practice & Challenges
---------------------------------
*/

// 01
/* Create a Simple Class: 
Define a Car class with properties like make, model, and year.
Add a method startEngine() that logs a message indicating the car is starting.
Instantiate the class and call the method. */

//Constructor function for car
function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);

  //03
  // Private property (using closure)
  let _engineStatus = false; // Private engine status

  this.startEngine = function () {
    console.log(
      `The ${this.year} ${this.make} ${this.model}'s engine is starting.`
    );
  };

  Object.defineProperty(this, "engineStatus", {
    get: function () {
      return _engineStatus;
    },
    set: function (status) {
      if (typeof status === "boolean") {
        _engineStatus = status;
      } else {
        throw new Error(
          "Invalid value for engine status. Must be true or false."
        );
      }
    },
  });
}

// Instantiating the Car object
const myCar = new Car("Toyota", "Corolla", 2022);

// Calling the startEngine method
myCar.startEngine();

// Accessing and modifying the private property using the getter and setter
console.log(myCar.engineStatus);
myCar.engineStatus = true;
console.log(myCar.engineStatus);
myCar.engineStatus = false;

// 02
/*
Inheritance:
Create a ElectricCar class that extends the Car class.
Add a batteryLevel property and a method chargeBattery() that increases the battery level.
Demonstrate method overriding by redefining the startEngine() method to include a message about battery status. */

function ElectricCar(model, make, year, batteryLevel) {
  Car.call(this, make, model, year);

  this.batteryLevel = batteryLevel;

  this.chargeBattery = function () {
    this.batteryLevel += 10;
    console.log(
      `Battery charged. Current battery level: ${this.batteryLevel}%`
    );
  };

  this.startEngine = function () {
    if (batteryLevel > 0) {
      console.log(
        `The ${this.year} ${this.make} ${this.model}  's electric engine is starting. Battery level: ${this.batteryLevel}%.`
      );
    } else {
      console.log(`Battery is dead. Please charge the battery.`);
    }
  };
}

// Make ElectricCar inherit the prototype of Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

const myElectricalCar = new ElectricCar("Tesla", "Model 3", 2023, 40);

myElectricalCar.startEngine();
myElectricalCar.chargeBattery();
myElectricalCar.startEngine();

// 03
/* Encapsulation:
Add private properties to the Car class using the # prefix (e.g., #engineStatus).
Provide getter and setter methods for accessing and updating these properties. */

// 04
/* 
Polymorphism:
Implement polymorphism by creating a Vehicle superclass and having Car and Bike classes inherit from it.
Add a common method move() that behaves differently depending on the vehicle type. */

function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype.move = function () {
  console.log(`This ${this.make} ${this.model} is moving.`);
};

function Car(make, model, year) {
  this.year = year;
  Vehicle.call(this, make, model);
}

// Set the Car prototype to inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Override the move() method in Car
Car.prototype.move = function () {
  console.log(
    `This ${this.make} ${this.model} ${this.year} is driving on the road.`
  );
};

function Bike(make, model, type) {
  this.type = type;
  Vehicle.call(this, make, model);
}

// Set the Bike prototype to inherit from Vehicle
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

// Override the move() method in Bike
Bike.prototype.move = function () {
  console.log(`The ${this.make} ${this.model} bike is pedaling on the path.`);
};

// Instantiate objects for Car and Bike
const ownCar = new Car("Toyota", "Corolla", 2023);
const myBike = new Bike("Giant", "Escape", "road");

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
