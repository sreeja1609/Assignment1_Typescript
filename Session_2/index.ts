import {getValue} from "./utils"

//TASK- 1
type address = {
    city: string;
    state: string;
    pincode: number;
}
class Student1{
    name: string;
    age: number;
    email: string;
    courses: string[];
    your_address: address;
    constructor(name: string, age: number, email: string, courses: string[], your_address: address){
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = courses;
        this.your_address = your_address;
    }
    protected getName = (): string =>{
        return this.name;
    }
    protected getAge = (): number =>{
        return this.age;
    }
    protected getEmail = (): string =>{
        return this.email;
    }
    protected getCourses = (): string[] =>{
        return this.courses;
    }
    protected getAddress = (): address =>{
        return this.your_address;
    }
    getDetails = (): void => {
        console.log("\nname is: ", this.getName());
        console.log("Age is: ", this.getAge());
        console.log("Email is: ", this.getEmail());
        console.log("Interested courses are: ", this.getCourses());
        console.log("Address is: ", this.getAddress());
    }
}



const Sreeja= new Student1("sreeja", 21, "sreejaamuda@gmail.com", ["typescript", "Blockchain"], {city: "Jagtial", state: "Telangana", pincode: 505327});

Sreeja.getDetails();

//TASK- 2

console.log(getValue("\nsreeja"));

//TASK- 3
interface Student{
    name: string;
    age: number;
    email: string;
    courses: string[];
    your_address: address;
}

type CreateReadonly<Type> = {
    readonly[P in keyof Type]: Type[P];
}
type ReadonlyStudent = CreateReadonly<Student>

const SreejaReadonly: ReadonlyStudent = {
    name: "Sreeja",
    age: 21,
    email: "sreejaamuda@gmail.com",
    courses: ["typescript", "AI", "Blockchain"],
    your_address: {
        city: "Jagtial",
        state: "Telangana",
        pincode: 505327
    }
}

// SreejaReadonly.age=22; //gives error since properties changed to Read only. 

