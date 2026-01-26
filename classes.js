// Class is a template
// A class is a blueprint used to create multiple objects with same structure and behavior.

// Methods are stored in prototype

// constructor runs automatically

// Classes are not hoisted

// Class syntax = prototype under the hood


// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     greet(){
//         console.log(`Hello my name is ${this.name} and my age is ${this.age}`);

//     }
// }

// const p1= new person("Zara Khan",19);
// p1.greet();

// Task 1:
// Create a class Car that:
// Takes brand and year
// Has a method getInfo()
// Output: "Toyota 2022"

// class Car{
//     constructor(brand,year){
//         this.brand=brand;
//         this.year=year;}
// getInfo(){
//     console.log(`${this.brand} ${this.year}`);
// }}
// const car1=new Car("Toyota",2022);
// car1.getInfo();


// class Test {
//   show() {
//     console.log("A");
//   }
// }

// const t1 = new Test();
// const t2 = new Test();

// console.log(t1.show === t2.show);

// Create a class Car with:

// property: brand

// method: start() → prints "Car started"
class Car2{
    constructor(brand){
        this.brand=brand;
    }
    start(){
        console.log(`${this.brand} Car started`);

    }

}
const myCar=new Car2("Honda");
myCar.start();