type address = {
    city: string;
    state: string;
    pincode: number;
}

interface Student{
    name: String;
    age: number;
    email: String;
    courses: "javascript" | "typescript" | "python";
    your_address: address;
}
let Sreeja: Student = {
    name: "Sreeja",
    age: 21,
    email: "sreejaamuda@gmail.com",
    courses: "python",
    your_address: {
        city: "Jagtial",
        state: "Telangana",
        pincode: 505327
    }
}
let Varsha: Student = {
    name: "Varsha",
    age: 21,
    email: "varsha@gmail.com",
    courses: "typescript",
    your_address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506002
    }
}

console.log(Sreeja);
console.log(Varsha);