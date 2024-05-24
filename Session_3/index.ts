//TASK- 1
type address = {
    city: string;
    state: string;
    pincode: number;
}
interface Student {
    name: string;
    age: number;
    email: string;
    course_list: string[];
    your_address: address;
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

type isString<T> = T extends string ? "Yes" : "No";
function isStringOrNot<T>(value :T): void{
    type check = isString<typeof value>
    const result : check = (typeof value === 'string' ? 'Yes' : 'No') as check;
    console.log(result)
}

//Example:
const name1 = "Sreeja";
const element: isString<typeof name1>="Yes"; 

isStringOrNot("Sreeja");

//TASK- 3 and 4
type Employee = {
    name: string;
    isLead: boolean;
    team?: Employee[];
};

//this employee type contains name of that employee, whether he is lead or not?, and his team members details if he is a lead. 

const employees: Employee[] = [
    { name: "Sreeja", isLead: true, team: [
      { name: "rekha", isLead: false },
      { name: "anju", isLead: false }
    ]},
    { name: "anusha", isLead: false },
    { name: "nikitha", isLead: true, team: [
      { name: "mamatha", isLead: false },
      { name: "keerthana", isLead: false }
    ]},
    { name: "rekha", isLead: false }
];

function printLeadStatus(employee: Employee): void {
    if (employee.isLead) {
      console.log(`\n ${employee.name} is Lead`);
    } else {
      console.log(`${employee.name} is not Lead`);
    }
  
    if (employee.team) {
      employee.team.forEach(member => printLeadStatus(member));
    }
}

employees.forEach(employee => printLeadStatus(employee));
  