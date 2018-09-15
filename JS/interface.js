"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bike = /** @class */ (function () {
    function Bike(name) {
        this.drive = function () {
            console.log("Riding Bike");
        };
        this.name = name;
    }
    return Bike;
}());
var Car = /** @class */ (function () {
    function Car(name) {
        this.drive = function () { return console.log("Riding Car"); };
        this.name = name;
    }
    return Car;
}());
var bike = new Bike('bike');
bike.drive();
var car = new Car('car');
car.drive();
var anyObject = {
    'name': 'Sanjay',
    drive: function () {
        console.log('Any Object Visibility');
    }
};
anyObject.drive();
