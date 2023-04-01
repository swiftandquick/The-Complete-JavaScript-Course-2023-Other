'use strict';

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
    accelerate() {
        this.speed = this.speed + 10;
    }
    brake() {
        this.speed = this.speed - 5;
        console.log(`${this.make} speed is reduced to ${this.speed} km/h.`);
        return this;
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Car battery is now at ${this.#charge}%.`);
        return this;
    }
    accelerate() {
        this.speed = this.speed + 20;
        this.#charge = this.#charge - 1; 
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%.`);
        return this;
    }
}

const car = new EVCl('Riian', 120, 23);

car.accelerate().accelerate().brake().chargeBattery(90).accelerate().accelerate();
console.log(car);