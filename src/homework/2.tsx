class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

// Приклад використання класів
const employee = new Employee("John Doe", "HR", 50000);
console.log(employee.getEmployeeDetails());

const manager = new Manager("Alice Smith", "Marketing", 60000);
console.log(manager.getEmployeeDetails());
