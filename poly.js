// // What is Method Overriding?Polymorphism 
// // When child class changes parent’s method behavior, it’s called method overriding.
// // 👉 Same method name
// // 👉 Child version runs instead of parents
// // Interview Quick Answers

// // Q: What is polymorphism?
// // 👉 One method, many forms

// // Q: How method overriding works?
// // 👉 Child method replaces parent method

// // Q: Which keyword calls parent method?
// // 👉 super

// class Animals{
//     speak(){
//         console.log("Animal speaks");
//     }
// }

// class Dog extends Animals{
//     speak(){
//                 super.speak();

//         console.log("Dog barks");
//     }}
//     let a1=new Dog();
//     a1.speak();


class Employee{
    salary(){
        console.log("Employee Salary: $5000");
    }
}
class Manager extends Employee{
    salary(){
        super.salary();
        console.log("Manager Salary: $8000");
    }}
    let m1=new Manager();
    m1.salary();