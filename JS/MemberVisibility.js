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
var Student = /** @class */ (function () {
    function Student(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }
    Student.prototype.getDetails = function () {
        console.log(this);
    };
    return Student;
}());
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    function FullTime(studentId, studentName, course) {
        var _this = _super.call(this, studentId, studentName) || this;
        _this.course = course;
        return _this;
    }
    FullTime.prototype.getFullTimeDetails = function () {
        this.getDetails();
        console.log(this.course);
    };
    return FullTime;
}(Student));
var x = new FullTime(6100, 'Sanjay', 'FullTime');
x.getFullTimeDetails();
x.getDetails();
