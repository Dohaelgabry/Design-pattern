////Books
class Books {
  constructor(
    _ID,
    _author,
    _names,
    _price,
    _rackno,
    _statues,
    _edition,
    _dataOfpurchase
  ) {
    this.ID = _ID;
    this.author = _author;
    this.name = _name;
    this.pric = _price;
    this.rackno = _rackno;
    this.statue = _statue;
    this.edition = _edition;
    this.dataOfpurchase = _dataOfpurchase;
  }
  displayDetalis() {}

  UpdatesStatus(newStatu) {
    this.statue = newStatu;
  }
}

class Jounals extends Books {
  constructor(
    _ID,
    _author,
    _names,
    _price,
    _rackno,
    _statues,
    _edition,
    _dataOfpurchase
  ) {
    super(
      _ID,
      _author,
      _names,
      _price,
      _rackno,
      _statues,
      _edition,
      _dataOfpurchase
    );
  }
}

class Magzines extends Books {
  constructor(
    _ID,
    _author,
    _names,
    _price,
    _rackno,
    _statues,
    _edition,
    _dataOfpurchase
  ) {
    super(
      _ID,
      _author,
      _names,
      _price,
      _rackno,
      _statues,
      _edition,
      _dataOfpurchase
    );
  }
}

class StudyBooks extends Books {
  constructor(
    _ID,
    _author,
    _names,
    _price,
    _rackno,
    _statues,
    _edition,
    _dataOfpurchase
  ) {
    super(
      _ID,
      _author,
      _names,
      _price,
      _rackno,
      _statues,
      _edition,
      _dataOfpurchase
    );
  }
}

let nameBook = [
  Jounals[_names],
  Magzines[_names],
  Magzines[_names],
  StudyBooks[_names],
];
///////Libraian

class Libraian {
  constructor(_names, _passWord) {
    this.name = _name;
    this.passWord = _passWord;
  }

  searchBook() {
    for (let x in nameBook) {
      if (neme == nameBook[x]) {
        return neme;
      }
    }
  }

  verifyMember() {}
}
