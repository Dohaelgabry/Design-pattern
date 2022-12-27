class Employee {
  constructor(name, jobTitle) {
    this.name = name;
    this.jobTitle = jobTitle;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getJobTitle() {
    return this.jobTitle;
  }

  setJobTitle(newTitle) {
    this.jobTitle = newTitle;
  }
  calculateWeeklySalary() {}
}

class HourlyEmployee extends Employee {
  constructor(name, jobTitle, payRate, hoursWorked) {
    super(name, jobTitle);
    this.payRate = payRate;
    this.hoursWorked = hoursWorked;
  }
  calculateWeeklySalary() {
    return this.payRate * this.hoursWorked;
  }
}

class SalaryEmployee extends Employee {
  constructor(name, jobTitle, weeklySalary) {
    super(name, jobTitle);
    this.weeklySalary = weeklySalary;
  }
  getWeeklySalary() {
    return this.weeklySalary;
  }
  setWeeklySalary(newWeeklySalary) {
    this.weeklySalary = newWeeklySalary;
  }
  calculateWeeklySalary() {
    return this.getWeeklySalary();
  }
}

let employee1 = new Employee("Doaa", "Fornt-end");
employee1.setName("Doha");
console.log(employee1.getName());

let houremployee1 = new HourlyEmployee("sara", "back-end", 100, 100);
console.log(houremployee1.calculateWeeklySalary());

let weekemployee1 = new SalaryEmployee();
weekemployee1.setWeeklySalary(500);
console.log(weekemployee1.getWeeklySalary());
console.log(weekemployee1.calculateWeeklySalary());
