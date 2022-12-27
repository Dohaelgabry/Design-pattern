class Monster {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  getName() {
    return this.name;
  }
  getHP() {
    return this.hp;
  }
  attack() {}
}

class Alien extends Monster {
  constructor(name, hp) {
    super(name, hp);
  }

  attack() {
    this.hp -= 20;
    if (this.hp <= 0) {
      console.log("game over");
    }
    return this.hp;
  }
}

class Beast extends Monster {
  constructor(name, hp) {
    super(name, hp);
  }
  attack() {
    this.hp -= 20;
    if (this.hp <= 0) {
      console.log("game over");
    }
    return this.hp;
  }
}

class Zombie extends Monster {
  constructor(name, hp) {
    super(name, hp);
  }
  attack() {
    this.hp -= 20;

    if (this.hp <= 0) {
      console.log("game over");
    }
    return this.hp;
  }
}

class Decorator {
  constructor(Monster, name, hp) {
    this.Monster = Monster;
    this.name = name;
    this.hp = hp;
  }

  attack() {
    return this.Monster.attack();
  }

  updated_name() {
    return this.Monster.getName() + this.name;
  }

  updated_hp() {
    return this.Monster.getHP() + this.hp;
  }
}

class lasers extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class poison extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class flying extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class speed extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class strength extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class fire extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

let x = new Alien("Alien1", 100);
console.log(x);

x.attack();

let flyAlien = new flying(x, "fly", 50);
console.log(flyAlien.updated_name());
console.log(flyAlien.updated_hp());
