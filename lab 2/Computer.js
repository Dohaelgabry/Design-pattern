class Computer {
  constructor(pric, processor, IPAddress, MACAddress, description) {
    this.pric = pric;
    this.processor = processor;
    this.IPAddress = IPAddress;
    this.MACAddress = MACAddress;
    this.description = description;
  }

  change_IPAddress(New_IPAddress) {
    return (this.IPAddress = New_IPAddress);
  }

  change_MACAddress(New_MACAddress) {
    return (this.MACAddress = New_MACAddress);
  }
}

let arremail = [];

class SmartPhone extends Computer {
  constructor(pric, processor, IPAddress, MACAddress, description, email) {
    super(pric, processor, IPAddress, MACAddress, description);
    this.email = email;
  }
  searchemail(email) {
    arremail.push(this.email);
    let index = arremail.includes(email);
    if (index > 0) {
      return `this smart phone is found`;
    } else {
      return "this smart phone is not found";
    }
  }
}

let inf_SmartPhone = new SmartPhone(
  5000,
  "820sd",
  "192.186.0.5",
  "00-1B-63-84-45-E6",
  "lorem...",
  "dohaGamal1254@gmail.come"
);

let x = inf_SmartPhone.searchemail("dohaGamal1254@gmail.come");

console.log(x);

class Laptop extends Computer {
  constructor(
    pric,
    processor,
    IPAddress,
    MACAddress,
    description,
    hard_disk_type
  ) {
    super(pric, processor, IPAddress, MACAddress, description);
    this.hard_disk_type = hard_disk_type;
  }
  show() {
    return `Laptop:
           pric:${this.pric}
           cpu_type:${this.cpu_type}
           IPAddress:${this.IPAddress}
           MACAddress:${this.MACAddress}
           description:${this.description}
           hard_disk_type:${this.hard_disk_type} `;
  }
}

let v = new Laptop(
  20000,
  "820sd",
  "192.186.0.5",
  "00-1B-63-84-45-E6",
  "lorem...",
  "doaaGamal1254@gmail.come"
);

console.log(v.show());
