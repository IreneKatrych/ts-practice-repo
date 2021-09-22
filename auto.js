// 1) Зробити клас авто (абстрактний) в якому буде метод руху, проперті: бренд нейм та кількість коліс.
// 2) Зробити класи реалізацій для Ауді, БМВ, Порша та Тесли
// 3) Зробити клас Свого авто, яке отримує можливості кожного з цих автомобілів
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating abstract class Auto
var Auto = /** @class */ (function () {
    function Auto() {
        this.numberOfWheels = 4;
    }
    return Auto;
}());
//Audi
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    //constructor
    function Audi(brandName, numberOfWheels) {
        if (brandName === void 0) { brandName = "Audi"; }
        var _this = _super.call(this) || this;
        _this.brandName = brandName;
        _this.numberOfWheels = numberOfWheels;
        return _this;
    }
    //methods
    Audi.prototype.move = function () {
        console.log("Hey! This " + this.brandName + " is going with " + this.numberOfWheels + " wheels");
    };
    Audi.prototype.sounds = function () {
        console.log("Brr-Brr...");
    };
    return Audi;
}(Auto));
//BMW
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    //constructor
    function BMW(brandName, numberOfWheels) {
        if (brandName === void 0) { brandName = "BMW"; }
        var _this = _super.call(this) || this;
        _this.brandName = brandName;
        _this.numberOfWheels = numberOfWheels;
        return _this;
    }
    //methods
    BMW.prototype.move = function () {
        console.log("Hey! This " + this.brandName + " is going with " + this.numberOfWheels + " wheels");
    };
    BMW.prototype.petrol = function () {
        console.log("Need more...");
    };
    return BMW;
}(Auto));
//Porsche
var Porsche = /** @class */ (function (_super) {
    __extends(Porsche, _super);
    //constructor
    function Porsche(brandName, numberOfWheels) {
        if (brandName === void 0) { brandName = "Porsche"; }
        var _this = _super.call(this) || this;
        _this.brandName = brandName;
        _this.numberOfWheels = numberOfWheels;
        return _this;
    }
    //methods
    Porsche.prototype.move = function () {
        console.log("Hey! This " + this.brandName + " is going with " + this.numberOfWheels + " wheels");
    };
    Porsche.prototype.speed = function () {
        console.log("I'm like a jaguar...");
    };
    return Porsche;
}(Auto));
//Tesla
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    //constructor
    function Tesla(brandName, numberOfWheels) {
        if (brandName === void 0) { brandName = "Tesla"; }
        var _this = _super.call(this) || this;
        _this.brandName = brandName;
        _this.numberOfWheels = numberOfWheels;
        return _this;
    }
    //methods
    Tesla.prototype.move = function () {
        console.log("Hey! This " + this.brandName + " is going with " + this.numberOfWheels + " wheels");
    };
    Tesla.prototype.electricity = function () {
        console.log("Thunderbolt and lightning!");
    };
    return Tesla;
}(Auto));
//creating my own car
var SuperMixedCar = /** @class */ (function (_super) {
    __extends(SuperMixedCar, _super);
    function SuperMixedCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //properties
        _this.brandName = "SuperMixedCar";
        _this.numberOfWheels = 6;
        return _this;
    }
    return SuperMixedCar;
}(Auto));
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(SuperMixedCar, [BMW, Porsche, Audi, Tesla]);
var newLittleCar = new SuperMixedCar();
console.log(newLittleCar.numberOfWheels);
newLittleCar.move();
newLittleCar.electricity();
newLittleCar.petrol();
newLittleCar.sounds();
newLittleCar.speed();
