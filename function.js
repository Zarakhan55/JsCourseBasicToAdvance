
// A function is a block of code that:

// Does one specific task

// Can be reused

// Runs only when called

//  Real life:

// Coffee machine → press button → coffee

// Function → call → result

//  Function Declaration
function greet(){
    console.log("Hello, welcome to the JavaScript world!");
}
greet();



// Function with Parameters
function add(a,b){
console.log("Sum:",a+b);}
add(5, 10);

// Return Statement
function multiply(x,y){
    return x*y;
}
let result = multiply(4, 6);
console.log("Product:", result);

// Function Expression
let divide = function(p, q){
    return p / q;
}
let division = divide(20, 4);
console.log("Quotient:", division);

// Arrow Functions
let square = (n) => n * n;
console.log("Square:", square(5));

//Food delivery App
function calculateTotalPrice(prices, taxRate){
    let total = 0;
    for(let price of prices){
        total += price + (price * taxRate);
    }
    return total;
}
let itemPrices = [10, 20, 30];
let tax = 0.1;
let totalPrice = calculateTotalPrice(itemPrices, tax);
console.log("Total Price with Tax:", totalPrice);

// ❓ Difference between function declaration & expression?
// Declaration → hoisted,,,,,,,,,,,,Expression → not hoisted

// Q1:Takes name.Prints "Hello, <name>"
function sayHello(name){
    console.log("Hello,",name);
}
sayHello("Alice");

//two number retun sum
function sumNumbers(num1,num2){
    return num1+num2;
}
let sumResult=sumNumbers(7,3);
console.log("Sum Result:",sumResult);

// function isEven(num) {
//   return num % 2 === 0;
// }
// cpnvet in arry function
let checkEven = (num) => num % 2 === 0;
console.log("Is 7 even?", checkEven(7));

// Q 3:
function applyDiscount(price){
    if(price>1000){
        return price - (price * 0.1);
    }
    return price;
}
let finalPrice=applyDiscount(1200);
console.log("Final Price after Discount:",finalPrice);