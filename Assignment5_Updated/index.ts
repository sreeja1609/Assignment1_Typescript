//TASK - 1
interface address{
    city: string;
    state: string;
    pincode: number;
}
enum Profession{
    SoftwareIntern,
    Doctor,
    Teacher    
}
type Person = {
    name: string;
    age?: number;
    occupation: Profession;
    isMarried?: boolean;
    email?: string;
    skills: string[];
    person_address: address;
}
type CreateRequired<Type> = {
    [Property in keyof Type]-?: Type[Property];
}
type PersonRequired = CreateRequired<Person>;

//TASK - 2 and 3

let Sreeja: PersonRequired = {
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
}

let arr: string[] = [];
namespace util{
    export function concatAndReturn<T>(T): string[]{
        for(let key in T){
            if((typeof T[key]) === "object"){
                concatAndReturn(T[key]);
            }
            else{
            arr.push(`${key} : ${T[key]}`);
            }
        }
        return arr;
    }
}
util.concatAndReturn(Sreeja);
let values = arr.join(" , ");
console.log(values);