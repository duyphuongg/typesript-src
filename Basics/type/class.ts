/**CLASS */
export class Employee {
  // public name: string
  // private age: number
  // readonly male: boolean

  // constructor(n: string, a: number, m: boolean) {
  //   this.name = n
  //   this.age = a
  //   this.male = m
  // }
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Name : ${this.name}, Age : ${this.age}, Male: ${this.male}`;
  }
}

const phuong = new Employee("Phuong", 28, true);
// console.log(phuong.name);
// console.log(phuong.age);
// console.log(phuong.male);

// phuong.name = "test";
// phuong.age = 2
// phuong.male = false
// console.log(phuong.print());

const bob = new Employee("Bob", 25, false);

let employees: Employee[] = [];
employees.push(phuong);
employees.push(bob);

employees.forEach((employee) =>
  console.log(employee.name, employee.male, employee.print())
);
