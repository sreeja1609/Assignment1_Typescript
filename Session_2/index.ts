import {getValue} from "./utils"

//TASK- 1
type Address = {
    city: string;
    state: string;
    pincode: number;
}
class Student1{
    name: string;
    age: number;
    email: string;
    courses: string[];
    yourAddress: Address;
    constructor(name: string, age: number, email: string, courses: string[], yourAddress: Address){
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = courses;
        this.yourAddress = yourAddress;
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
    protected getAddress = (): Address =>{
        return this.yourAddress;
    }
    getDetails = (): void => {
        console.log("\nname is: ", this.getName());
        console.log("Age is: ", this.getAge());
        console.log("Email is: ", this.getEmail());
        console.log("Interested courses are: ", this.getCourses());
        console.log("Address is: ", this.getAddress());
    }
}

const sreeja= new Student1("sreeja", 21, "sreejaamuda@gmail.com", ["typescript", "Blockchain"], {city: "Jagtial", state: "Telangana", pincode: 505327});

sreeja.getDetails();

//TASK- 2

console.log(getValue("sreeja"));

//TASK- 3
interface Student{
    name: string;
    age: number;
    email: string;
    courses: string[];
    your_address: Address;
}

type CreateReadonly<Type> = {
    readonly[P in keyof Type]: Type[P];
}
type ReadonlyStudent = CreateReadonly<Student>

const sreejaReadonly: ReadonlyStudent = {
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

// sreejaReadonly.age=22; //gives error since properties changed to Read only. 

