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
    }
}

const car1 = new CarCl('BMW', 120);
const car2 = new CarCl('Mercedes', 95);

console.log(car1.speedUS);
console.log(car2.speedUS);

car1.speedUS = 60;
car2.speedUS = 80;

console.log(car1.speedUS);
console.log(car2.speedUS);

console.log(car1);
console.log(car2);

car1.accelerate();
car2.accelerate();

console.log(car1);
console.log(car2);

car1.brake();
car2.brake();

console.log(car1);
console.log(car2);