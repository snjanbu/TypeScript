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
var Employee = /** @class */ (function () {
    function Employee(employeeNo, employeeName) {
        this.employeeNo = employeeNo;
        this.employeeName = employeeName;
    }
    Employee.prototype.getFullName = function () {
        return this.employeeNo + " " + this.employeeName;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(employeeNo, employeeName, project) {
        var _this = _super.call(this, employeeNo, employeeName) || this;
        _this.project = project;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return this.employeeNo + " " + this.employeeName + " " + this.project;
    };
    return Manager;
}(Employee));
var sanjay = new Employee(6100, 'Sanjayanbu');
var santhosh = new Employee(6101, 'Santhosh');
var manager = new Manager(6102, 'Seetha', 'HUE');
console.log(sanjay.getFullName());
console.log(santhosh.getFullName());
console.log(manager.getDetails());
