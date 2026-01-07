// Definition::A higher order function is a function that:
// Takes another function as an argument, OR,Returns a function

// map() – Transform Data
//  Definition:map() creates a new array by changing each element.
let num=[1,2,3,4];
let sqaure=num.map(no=>no*no);
console.log(sqaure);


// filter() – Select Data
// Definition:filter() creates a new array with elements that pass a condition.
//  Use filter when you want to remove unwanted data.

let prices = [100, 250, 80, 400];

let expensive = prices.filter(price => price > 200);

console.log(expensive); // [250, 400]

// reduce() – Combine Data
//  Definition:reduce() reduces an array to one single value.
//  Can return number, string, object, array.
let nums = [10, 20, 30];

let total = nums.reduce((sum, num) => sum + num, 0);

console.log(total); // 60
//////////////////////
let cart = [200, 150, 300];

let bill = cart.reduce((total, price) => total + price, 0);

console.log("Total Bill:", bill);
////////////////
let numbers = [1, 2, 3, 4, 5];

let result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);

console.log(result); // 60
////////////////////////
// Use filter() → keep marks ≥ 50
//  Use map() → add 5 bonus marks
//  Use reduce() → calculate total marks
let marks = [45, 80, 30, 90, 60];

let totalMarks = marks
  .filter(mark => mark >= 50)   // keep marks ≥ 50
  .map(mark => mark + 5)        // add bonus marks
  .reduce((sum, mark) => sum + mark, 0); // total

console.log(totalMarks); // 240
//////////////
let prices = [100, 250, 80, 400, 150];

let total = prices
  .filter(price => price > 100)
  .map(price => price * 0.9) // 10% discount
  .reduce((sum, price) => sum + price, 0);

console.log(total); // 720
