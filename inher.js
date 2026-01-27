// // Inheritance means:
// // 👉 Child class uses parent class properties and methods
// // Parent → Father
// // Child → Son
// // Son can use father’s things 

// class Father {
//    constructor(name){
//     this.name=name;
//    }
// }

// class son extends Father{
//     constructor(name,age){
//         super(name);
//         this.age=age;
//     }}
//     let f1=new Father("John");
//     let s1=new son("Mike",20);
//     console.log(f1.name); // John

//     // Inheritance allows a class to acquire properties and methods of another class using extends.
// Parent class Vehicle → method start()

// Child class Bike → method ride()

// Create object of Bike and call both methods

class Vehicle {
  constructor(car) {
    this.car = car;
  }

  start() {
    console.log(`${this.car} started`);
  }
}

class Bike extends Vehicle {
  constructor(car, model) {
    super(car);
    this.model = model;
  }

  ride() {
    console.log(`Riding ${this.model}`);
  }
}

let b1 = new Bike("Honda", "CBR");
b1.start(); // Honda started
b1.ride();  // Riding CBR
