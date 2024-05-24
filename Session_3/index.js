var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Sreeja = {
    name: "Sreeja",
    age: 20,
    email: "sreejaamuda@gmail.com",
    course_list: ["blockchain", "python"],
    your_address: {
        city: "Jagtial",
        state: "Telangana",
        pincode: 505327
    }
};
function updateStudent(Sreeja, updates) {
    return __assign(__assign({}, Sreeja), updates);
}
//Ex: updating name and email of the student; we can pass any properties here to update
var updates = {
    name: "sree",
    email: "sreeja@gmail.com",
};
var updatedStudent = updateStudent(Sreeja, updates);
console.log(updatedStudent, "\n");
function isStringOrNot(value) {
    var result = (typeof value === 'string' ? 'Yes' : 'No');
    console.log(result);
}
//Example:
var name1 = "Sreeja";
var element = "Yes";
isStringOrNot("Sreeja");
//this employee type contains name of that employee, whether he is lead or not?, and his team members details if he is a lead. 
var employees = [
    { name: "Sreeja", isLead: true, team: [
            { name: "rekha", isLead: false },
            { name: "anju", isLead: false }
        ] },
    { name: "anusha", isLead: false },
    { name: "nikitha", isLead: true, team: [
            { name: "mamatha", isLead: false },
            { name: "keerthana", isLead: false }
        ] },
    { name: "rekha", isLead: false }
];
function printLeadStatus(employee) {
    if (employee.isLead) {
        console.log("\n ".concat(employee.name, " is Lead"));
    }
    else {
        console.log("".concat(employee.name, " is not Lead"));
    }
    if (employee.team) {
        employee.team.forEach(function (member) { return printLeadStatus(member); });
    }
}
employees.forEach(function (employee) { return printLeadStatus(employee); });
