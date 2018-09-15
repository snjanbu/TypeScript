"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var _ = __importStar(require("lodash"));
var sanjay = new Employee_1.Employee(6100, 'Sanjay');
var santhosh = new Employee_1.Employee(6101, 'Santhosh');
console.log(sanjay);
console.log(santhosh);
var arr = [1, 2, 3, 4, 5];
console.log(_.reverse(arr));
