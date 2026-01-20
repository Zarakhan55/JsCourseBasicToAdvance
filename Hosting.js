// Hoisting means:
// JavaScript moves declarations to the top of the scope before execution.
//  Only declarations are hoisted, NOT values








// What is TDZ (Temporal Dead Zone)?

// TDZ = Time between:

// Variable creation

// Variable initialization

// //  During TDZ → variable exists but cannot be used
// TDZ starts
// let x;
// // TDZ ends
// x = 5;

// let name;
// console.log(name);
// let name="zara";
// Q1. What is TDZ?
// ➡️ Time where let/const exist but can’t be accessed.

// Q2. Why does let give error but var doesn’t?
// ➡️ Because let is in TDZ, var initializes as undefined.

// Q3. Is TDZ a runtime or compile-time error?
// ➡️ Runtime error (ReferenceError)

let x;
console.log(x);
x = 10;
console.log(x);

let y;
console.log(y);
 y = 20;
console.log(y);