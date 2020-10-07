class Vehicle{//creation of parent class Vehicle
              //this class contains the skeleton for other types of cars/vehicles
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    information(){
        console.log(`Make ${this.make}, Model ${this.model}, Year ${this.year}`);
    }
}

class Cars extends Vehicle {//inheriting the traits from the parent class using keyword extends
    constructor(make, model, year, doors){//parameters of constructor
        super(make, model, year);
        this.doors = doors;//initiliazing
    }
    information(){
    super.information();//calling the information constructor from parent class
    console.log(`Doors: ${this.doors}`);
    }
}
let myCar = new Cars('VW','Golf', 2011, 5);//information on the child class of the car containing the information about doors
myCar.information();//calling the information method with information about the car including how many doors