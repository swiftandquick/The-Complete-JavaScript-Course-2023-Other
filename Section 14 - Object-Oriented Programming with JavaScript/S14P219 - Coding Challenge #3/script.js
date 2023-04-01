'use strict';

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed = this.speed + 10;
}

Car.prototype.brake = function() {
    this.speed = this.speed - 5;
}

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

// Overwrites Car's accelerate() function.  
EV.prototype.accelerate = function() {
    this.speed = this.speed + 20;
    this.charge = this.charge - 1; 
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`);
}

const car = new EV('Tesla', 120, 23);
console.log(car);
car.accelerate();
car.chargeBattery(90);
console.log(car);
car.accelerate();
car.brake();
console.log(car);