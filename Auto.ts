// 1) Зробити клас авто (абстрактний) в якому буде метод руху, проперті: бренд нейм та кількість коліс.
// 2) Зробити класи реалізацій для Ауді, БМВ, Порша та Тесли
// 3) Зробити клас Свого авто, яке отримує можливості кожного з цих автомобілів

//creating abstract class Auto
abstract class Auto {
  //properties
  abstract brandName: string;
  numberOfWheels: number = 4;

  //methods
  abstract move(): void;
}

//Audi
class Audi extends Auto {
  //constructor
  constructor(
    public brandName: string = "Audi",
    public numberOfWheels: number
  ) {
    super();
  }

  //methods
  move() {
    console.log(
      `Hey! This ${this.brandName} is going with ${this.numberOfWheels} wheels`
    );
  }

  sounds() {
    console.log(`Brr-Brr...`);
  }
}

//BMW
class BMW extends Auto {
  //constructor
  constructor(public brandName: string = "BMW", public numberOfWheels: number) {
    super();
  }

  //methods
  move() {
    console.log(
      `Hey! This ${this.brandName} is going with ${this.numberOfWheels} wheels`
    );
  }

  petrol() {
    console.log(`Need more...`);
  }
}

//Porsche
class Porsche extends Auto {
  //constructor
  constructor(
    public brandName: string = "Porsche",
    public numberOfWheels: number
  ) {
    super();
  }

  //methods
  move() {
    console.log(
      `Hey! This ${this.brandName} is going with ${this.numberOfWheels} wheels`
    );
  }

  speed() {
    console.log(`I'm like a jaguar...`);
  }
}

//Tesla
class Tesla extends Auto {
  //constructor
  constructor(
    public brandName: string = "Tesla",
    public numberOfWheels: number
  ) {
    super();
  }

  //methods
  move() {
    console.log(
      `Hey! This ${this.brandName} is going with ${this.numberOfWheels} wheels`
    );
  }

  electricity() {
    console.log(`Thunderbolt and lightning!`);
  }
}

//creating my own car
class SuperMixedCar extends Auto {
  //properties
  brandName: string = "SuperMixedCar";
  numberOfWheels: number = 6;
}

interface SuperMixedCar extends BMW, Porsche, Audi, Tesla {}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(SuperMixedCar, [BMW, Porsche, Audi, Tesla]);

let newLittleCar: SuperMixedCar = new SuperMixedCar();

console.log(newLittleCar.numberOfWheels);
newLittleCar.move();
newLittleCar.electricity();
newLittleCar.petrol();
newLittleCar.sounds();
newLittleCar.speed();
