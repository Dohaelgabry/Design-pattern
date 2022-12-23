////vehicles
class vehicles {
  constructor(mileage, pric) {
    this.mileage = mileage;
    this.pric = pric;
  }
}

////Car
class Car extends vehicles {
  constructor(
    mileage,
    pric,
    ownership_cost,
    warranty,
    seating_capacity,
    fuel_typ
  ) {
    super(mileage, pric);

    this.ownership_cost = ownership_cost;
    this.warranty = warranty;
    this.seating_capacity = seating_capacity;
    this.fuel_typ = fuel_typ;
  }
}

////Audi
class Audi extends Car {
  constructor(
    mileage,
    pric,
    ownership_cost,
    warranty,
    seating_capacity,
    fuel_typ,
    model_type
  ) {
    super(mileage, pric, ownership_cost, warranty, seating_capacity, fuel_typ);
    this.model_type = model_type;
  }
}

let info_Audi = new Audi("1", "10000", "52$", "3", "5", "petrol", "Audi");
console.log(info_Audi);

console.log(`info_Audi:
             mileage==>${info_Audi.mileage}
             pric==>${info_Audi.pric}
             ownership_cost==>${info_Audi.ownership_cost}
             warranty==>${info_Audi.warranty}
             seating_capacity==>${info_Audi.seating_capacity}
             fuel_typ==>${info_Audi.fuel_typ} 
             model_type==>${info_Audi.model_type}`);

////Ford
class Ford extends Car {
  constructor(
    mileage,
    pric,
    ownership_cost,
    warranty,
    seating_capacity,
    fuel_typ,
    model_type
  ) {
    super(mileage, pric, ownership_cost, warranty, seating_capacity, fuel_typ);
    this.model_type = model_type;
  }
}

let info_Ford = new Ford("2", "30000", "55$", "4", "6", "diesel ", "Ford");
console.log(info_Ford);

console.log(`info_Ford:
             mileage==>${info_Ford.mileage}
             pric==>${info_Ford.pric}
             ownership_cost==>${info_Ford.ownership_cost}
             warranty==>${info_Ford.warranty}
             seating_capacity==>${info_Ford.seating_capacity}
             fuel_typ==>${info_Ford.fuel_typ} 
             model_type==>${info_Ford.model_type}`);

////Bike
class Bike extends vehicles {
  constructor(
    mileage,
    pric,
    cylinders,
    gears,
    cooling_type,
    wheel_type,
    fuel_tank_size
  ) {
    super(mileage, pric);

    this.cylinders = cylinders;
    this.gears = gears;
    this.cooling_type = cooling_type;
    this.wheel_type = wheel_type;
    this.fuel_tank_size = fuel_tank_size;
  }
}

////Bajaj
class Bajaj extends Bike {
  constructor(
    mileage,
    pric,
    cylinders,
    gears,
    cooling_type,
    wheel_type,
    fuel_tank_size,
    make_typeo
  ) {
    super(
      mileage,
      pric,
      cylinders,
      gears,
      cooling_type,
      wheel_type,
      fuel_tank_size
    );

    this.make_typeo = make_typeo;
  }
}

let info_Bajaj = new Bajaj(
  ".5",
  "2000",
  "5",
  "4",
  "6",
  "air ",
  "alloys ",
  "300"
);
console.log(info_Bajaj);
console.log(`info_Bajaj:
             mileage==>${info_Bajaj.mileage}
             pric==>${info_Bajaj.pric}
             cylinders==>${info_Bajaj.cylinders}
             number of gears==>${info_Bajaj.gears}
             cooling_type==>${info_Bajaj.cooling_type}
             wheel_type==>${info_Bajaj.wheel_type} 
             fuel_tank_size==>${info_Bajaj.fuel_tank_size}`);

////TVS
class TVS extends Bike {
  constructor(
    mileage,
    pric,
    cylinders,
    gears,
    cooling_type,
    wheel_type,
    fuel_tank_size,
    make_typeo
  ) {
    super(
      mileage,
      pric,
      cylinders,
      gears,
      cooling_type,
      wheel_type,
      fuel_tank_size
    );

    this.make_typeo = make_typeo;
  }
}

let info_TVS = new TVS(".5", "1500", "6", "3", "5", "liquid", "spokes ", "200");
console.log(info_TVS);
console.log(`info_TVS:
             mileage==>${info_TVS.mileage}
             pric==>${info_TVS.pric}
             cylinders==>${info_TVS.cylinders}
             number of gears==>${info_TVS.gears}
             cooling_type==>${info_TVS.cooling_type}
             wheel_type==>${info_TVS.wheel_type} 
             fuel_tank_size==>${info_TVS.fuel_tank_size}`);
