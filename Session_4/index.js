var Profession;
(function (Profession) {
    Profession[Profession["SoftwareIntern"] = 0] = "SoftwareIntern";
    Profession[Profession["Doctor"] = 1] = "Doctor";
    Profession[Profession["Teacher"] = 2] = "Teacher";
})(Profession || (Profession = {}));
//TASK - 2 and 3
var Sreeja = {
    name: "sreeja",
    age: 21,
    occupation: Profession.SoftwareIntern,
    isMarried: false,
    email: "sreeja@gmail.com",
    skills: ["Blockchain", "TypeScript", "JavaScript"],
    person_address: {
        city: "Jagtial",
        state: "Telangana",
        pincode: 505327
    }
};
var arr = [];
var util;
(function (util) {
    function concatAndReturn(PersonRequired) {
        for (var key in PersonRequired) {
            if ((typeof PersonRequired[key]) === "object") {
                concatAndReturn(PersonRequired[key]);
            }
            else {
                arr.push("".concat(key, " : ").concat(PersonRequired[key]));
            }
        }
        return arr;
    }
    util.concatAndReturn = concatAndReturn;
})(util || (util = {}));
util.concatAndReturn(Sreeja);
var values = arr.join(" , ");
console.log(values);
