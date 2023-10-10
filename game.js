function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}
Vehicle.prototype.accelerate = function(){
    let spd = this.speed;
    spd += 1;
    return spd;
}
Vehicle.prototype.brake = function(){
    let spd = this.speed;
    spd -= 1;
    return spd;
}
Vehicle.prototype.refuel = function(){
    console.log("vehicle is refuling");
}

function Car(brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
    this.honk = function(){
        console.log("honking intensifies");
    }
}
Car.prototype = Object.create(Vehicle.prototype);

function Airplane(brand, model, speed, fuelType, numberOfEngines){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfEngines;
    this.takeOff = function(){
        console.log("Plane is taking off");
    }
}
Airplane.prototype = Object.create(Vehicle.prototype);

const car1 = new Car("bmw", "ZX", 256, "petrol", 4);
console.log(car1.accelerate());
console.log(car1.brake());
car1.refuel();
car1.honk();

const airplane1 = new Airplane("Boeing", "TT", 1000, "Diesel", 40);
console.log(airplane1.accelerate());
console.log(airplane1.brake());
airplane1.refuel();
airplane1.takeOff();


