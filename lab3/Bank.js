class account {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }
  getname() {
    return this.name;
  }
  getmoneye() {
    return this.money;
  }
  Display_Account() {
    return `your Acount name is:${this.name} you has ${this.money}`;
  }
}

class saving_account extends account {
  constructor(name, money) {
    super(name, money);
  }
}

class current_account extends account {
  constructor(name, money) {
    super(name, money);
  }
}

class Management_System {
  constructor(account, money) {
    this.account = account;
    this.money = money;
  }
  get_Deposit_Money() {
    // console.log(this.account.getmoneye());
    this.account.money += this.money;
  }

  get_Withdraw_Money() {
    this.account.money -= this.money;
  }
  transaction(account1, account2, money) {
    account1.money -= money;
    account2.money += money;
  }
}

let emp1 = new saving_account("Doha", 60000);
let emp2 = new current_account("Marwa", 50000);
console.log(emp1.Display_Account());

let Deposit_Money = new Management_System(emp1, 1000);
Deposit_Money.get_Deposit_Money();

console.log(emp1.Display_Account());

let transaction_between_2_accounts = new Management_System(emp1, emp2, 2000);

transaction_between_2_accounts.transaction(emp1, emp2, 2000);

console.log(emp1.Display_Account());
console.log(emp2.Display_Account());
