class Employee {
  // constructor(name, jobtitle) {
  //   this.name = name;
  //   this.jobtitle = jobtitle;
  // }

  #name;
  #jobtitle;
  get name() {
    return this._name;
  }

  set name(newname) {
    return (this._name = newname);
  }
  get jobtitle() {
    return this._jobtitle;
  }

  set jobtitle(newjobtitle) {
    return (this._jobtitle = newjobtitle);
  }
}

let x = new Employee("Doha", "mearn");
console.log(x.name);

// class HourlyEmployee {
//   constructor(name, jobtitle, pay_rate, hours) {
//     super(name, jobtitle);
//     this.pay_rate = pay_rate;
//     this.hours = hours;
//   }
// }
