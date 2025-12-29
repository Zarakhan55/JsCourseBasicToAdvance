// 🔹 What is an Operator?
// An operator is a symbol that performs an operation on values (operands).

let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1
console.log(a ** 2); // 100

let x=7;
x+=6;
console.log("x after +=7:",x); //14

let y=20;
y-=5;
console.log("y after -=5:",y); //15

console.log(5 == "5");   // true ❌
console.log(5 === "5"); // false ✅


let isLoggedIn = true;
let hasCard = false;

console.log(isLoggedIn && hasCard); // false
console.log(isLoggedIn || hasCard); // true
console.log(!isLoggedIn);           // false


let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


let price=600;
let discount=50;

let isPremiumMember=true;
let final=isPremiumMember ? price -discount :price;
console.log("Final Price:",final);

console.log(10 + "5");
console.log("10" - 5);


