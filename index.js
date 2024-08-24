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

// 1
/* Create a Simple Class: 
Define a Car class with properties like make, model, and year.
Add a method startEngine() that logs a message indicating the car is starting.
Instantiate the class and call the method. */
