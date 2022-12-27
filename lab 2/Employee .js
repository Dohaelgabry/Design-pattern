class Employee{
    #name;
    #jobTitle;

    constructor(){
        this.#name="Doha";
        this.#jobTitle="developer";
    }

    getName(){
        return this.#name;
    }
    setName(newName){
        this.#name=newName;
    }

    getJobTitle(){
        return this.#jobTitle;
    }
    setJobTitle(newTitle){
        this.#jobTitle=newTitle;
    }
    calculateWeeklySalary();
}

class HourlyEmployee extends Employee{
    constructor(payRate,hoursWorked){
        super()
        this.payRate=payRate;
        this.hoursWorked=hoursWorked;
    }
    calculateWeeklySalary(){
        return this.payRate*this.hoursWorked;
    }
}

class SalaryEmployee extends Employee{
    #weeklySalary;
    constructor(){
        this.#weeklySalary=0;
    }
    getWeeklySalary(){
        return this.#weeklySalary;
    }
    setWeeklySalary(newWeeklySalary){
        this.#weeklySalary=newWeeklySalary;
    }
    calculateWeeklySalary(){
        return this.getWeeklySalary();
    }
}

let employee1=new Employee();
console.log(employee1.getName());
employee1.setName("Doaa");
console.log(employee1.getName());

let houremployee1=new HourlyEmployee(100, 100);
console.log(houremployee1.calculateWeeklySalary());

let weekemployee1=new SalaryEmployee();
console.log(weekemployee1.getWeeklySalary());
weekemployee1.setWeeklySalary(500);
console.log(weekemployee1.getWeeklySalary());
console.log(weekemployee1.calculateWeeklySalary());
