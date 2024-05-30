"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Student1 = /** @class */ (function () {
    function Student1(name, age, email, courses, your_address) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getCourses = function () {
            return _this.courses;
        };
        this.getAddress = function () {
            return _this.your_address;
        };
        this.getDetails = function () {
            console.log("\nname is: ", _this.getName());
            console.log("Age is: ", _this.getAge());
            console.log("Email is: ", _this.getEmail());
            console.log("Interested courses are: ", _this.getCourses());
            console.log("Address is: ", _this.getAddress());
        };
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = courses;
        this.your_address = your_address;
    }
    return Student1;
}());
var Sreeja = new Student1("sreeja", 21, "sreejaamuda@gmail.com", ["typescript", "Blockchain"], { city: "Jagtial", state: "Telangana", pincode: 505327 });
Sreeja.getDetails();
//TASK- 2
console.log((0, utils_1.getValue)("sreeja"));
var SreejaReadonly = {
    name: "Sreeja",
    age: 21,
    email: "sreejaamuda@gmail.com",
    courses: ["typescript", "AI", "Blockchain"],
    your_address: {
        city: "Jagtial",
        state: "Telangana",
        pincode: 505327
    }
};
// SreejaReadonly.age=22; //gives error since properties changed to Read only. 
