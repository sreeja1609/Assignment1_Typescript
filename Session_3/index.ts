//TASK- 1
type Address = {
    city: string;
    state: string;
    pincode: number;
}
interface Student {
    name: string;
    age: number;
    email: string;
    course_list: string[];
    your_address: Address;
}
const Sreeja: Student = {
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

type Update<T extends keyof Student> = Pick<Student, T>;

function updateStudent<T extends keyof Student>(Sreeja: Student, updates: Update<T>): Student {
    return { ...Sreeja, ...updates };
}
//Ex: updating name and email of the student; we can pass any properties here to update
const updates: Update<'name' | 'email' > = {
    name: "sree",
    email: "sreeja@gmail.com",
};
const updatedStudent = updateStudent(Sreeja, updates);
  
console.log(updatedStudent, "\n");

//TASK- 2

type IsString<T> = T extends string ? "Yes" : "No"; 

type A = IsString<string>;
const abc: A = "Yes"
console.log(abc);

//TASK- 3 and 4
type Employee = {
    name: string;
    team?: Employee[];
};

//this employee type contains name of that employee, whether he is lead or not?, and his team members details if he is a lead. 

const employees: Employee[] = [
    { name: "Sreeja", team: [
      { name: "rekha"},
      { name: "anju"}
    ]},
    { name: "anusha"},
    { name: "nikitha", team: [
      { name: "mamatha"},
      { name: "keerthana"}
    ]},
    { name: "rekha"}
];

function printLeadStatus(employee: Employee): void {
  if (typeof employee.team != "undefined" && employee.team != null) {
      console.log(`\n ${employee.name} is Lead`);
  } else {
      console.log(`${employee.name} is not Lead`);
  }
  leadStatus(employee.team);
}

function leadStatus(employees?: Employee[]): void {
  if (employees) {
      employees.forEach(employee => printLeadStatus(employee));
  }
}

leadStatus(employees);