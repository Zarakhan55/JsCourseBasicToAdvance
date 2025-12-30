// // Scope means where a variable can be accessed.
// //Global Scope .........Variables declared outside any function.
// let globalVar = "I am global";

// function show() {
//   console.log(globalVar);
// }

// show();


// // Function Scope (var) ......Variables inside a function.
// function funcScope() {
//   var funcVar = "I am inside a function";
//   console.log(funcVar);
// }
// funcScope();
// //console.log(funcVar); // Error: funcVar is not defined

// // Block Scope (let, const) ......Variables inside a block {...}
// if (true) {
//   var x = 10;
//   let y = 20;
// }

// console.log(x); // 10
// // console.log(y); ❌ Error

// // "var is function-scoped, let and const are block-scoped."

// // HOSTING
// // JavaScript moves declarations to the top before execution.
// //  Hoisting with var
// // console.log(a);
// // var a = 5; // undefined

// var a;
// console.log(a);
// a = 10;

// //function hoisting
// greet();

// function greet() {
//   console.log("Hello!");
// }

// Why is let safer than var?
// Block scoped,No accidental overwrites,Avoids hoisting bugs



// ❓ Difference between function declaration & expression?
// Function Declaration is hoisted and can be called before its definition.
// Function Expression is not hoisted and cannot be called before its definition.
