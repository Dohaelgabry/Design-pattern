////Books
let dbBook = [];
class Books {
  constructor(
    ID,
    author,
    names,
    price,
    rackno,
    statues,
    edition,
    dataOfpurchase
  ) {
    this.ID = ID;
    this.author = author;
    this.names = names;
    this.pric = price;
    this.rackno = rackno;
    this.statues = statues;
    this.edition = edition;
    this.dataOfpurchase = dataOfpurchase;
  }
  disply() {
    console.log(`name is ${this.name}  => price ${this.price} $`);
  }
  updateStatus() {
    this.status = !this.status;
  }
}

class Jounals extends Books {
  constructor(
    ID,
    author,
    names,
    price,
    rackno,
    statues,
    edition,
    dataOfpurchase
  ) {
    super(ID, author, names, price, rackno, statues, edition, dataOfpurchase);
  }
}

class Magzines extends Books {
  constructor(
    ID,
    author,
    names,
    price,
    rackno,
    statues,
    edition,
    dataOfpurchase
  ) {
    super(ID, author, names, price, rackno, statues, edition, dataOfpurchase);
  }
}

class StudyBooks extends Books {
  constructor(
    ID,
    author,
    names,
    price,
    rackno,
    statues,
    edition,
    dataOfpurchase
  ) {
    super(ID, author, names, price, rackno, statues, edition, dataOfpurchase);
  }
}

let nameBook = [
  Jounals[names],
  Magzines[names],
  Magzines[names],
  StudyBooks[names],
];
///////Libraian

class Librarian {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  searchBook(name) {
    let index = dbBook.findIndex((item) => item.name == name);
    if (index > 0) {
      return dbBook[index];
    }
    return "this book not found";
  }

  clacFine(name) {
    let book = this.searchBook(name);
    let n = new Transcation("1", book, new Date().toDateString());
    return n.createTrans();
  }
  creteBill(name) {
    let bill = new Bill(this.clacFine(name), "1");
  }
}

////////////Bill
class Bill {
  static #counter = 0;
  constructor(amount, memberid) {
    this.billNo = ++Bill.#counter;
    this.date = new Date().toDateString();
    this.amount = amount;
    this.memberid = memberid;
  }
  updateBill(amount) {
    this.amount = amount;
  }
}

class Transcation {
  constructor(memberid, book, date) {
    this.book = book;
    this.memberid = memberid;
    this.date = date;
  }
  createTrans() {
    console.log(
      `this member ${this.memberid} buy this book ${this.book.name} for price ${
        this.book.price
      } in date ${new Date().toDateString()}`
    );
    return this.book.price;
  }
}

let b1 = new Book(1, "c++", 33, true);
let b2 = new Book(2, "react", 55, true);
let b3 = new Book(3, "node", 66, true);
let b4 = new Book(4, "java", 466, true);
dbBook = [b1, b2, b3, b4];
let i = arr.findIndex((item) => item == 400);
console.log(i);
dbBook.findIndex((item) => console.log(item.name));

let lib = new Librarian("ali", "######");

console.log(lib.searchBook("c#"));

console.log(lib.creteBill("java"));
