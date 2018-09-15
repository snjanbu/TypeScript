"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lorry = /** @class */ (function () {
    function Lorry(name) {
        this.name = name;
    }
    Lorry.prototype.drive = function () {
        console.log('Driving Lorry');
    };
    return Lorry;
}());
var lorry = new Lorry('Benz');
lorry.drive();
