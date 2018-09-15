"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printValue(arg) {
    return arg;
}
console.log(printValue('Sanjay'));
console.log(printValue(true));
console.log(printValue(2345));
var Emp = /** @class */ (function () {
    function Emp(employeeNumber, employeeName) {
        this.employeeNumber = employeeNumber;
        this.employeeName = employeeName;
    }
    Emp.prototype.printEmp = function () {
        return this.employeeNumber + " " + this.employeeName;
    };
    return Emp;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(employeeNumber, employeeName, allowance) {
        var _this = _super.call(this, employeeNumber, employeeName) || this;
        _this.allowance = allowance;
        return _this;
    }
    return Man;
}(Emp));
function printVal(arg) {
    return arg.printEmp();
}
var tt = new Man(1234, 'Jim', 'Car');
console.log(printVal(tt));
