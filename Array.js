// An array stores multiple values in a single variable.

// Accessing & Updating Array Elements
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Access
fruits[1] = "Blueberry"; // Update
console.log(fruits);

// Important Array Properties
console.log("Length:", fruits.length); // Length

// Array Methods
fruits.push("Date"); // Add to end
console.log("After push:", fruits);
fruits.pop(); // Remove from end
console.log("After pop:", fruits);
fruits.shift(); // Remove from start
console.log("After shift:", fruits);
fruits.unshift("Apricot");
console.log("After unshift:", fruits); // Add to start


// Looping Through Arrays
let orders = ["Pizza", "Burger", "Pasta"];

for (let i = 0; i < orders.length; i++) {
  console.log(orders[i]);
}

// Using for...of (Modern)
for (let item of orders) {
  console.log(item);
}

// Important Advanced Methods 
// map() – creates a new array by applying a function to each element.

let num = [1, 2, 3, 4, 5];
let square=num.map(num => num * num);
console.log("Squares:", square);


// filter() – creates a new array with elements that pass a test.
let no=[10,15,20,25,30];
let even=no.filter(no => no % 2 === 0);
console.log("Even Numbers:", even);

// reduce() – reduces the array to a single value by applying a function.
let values = [1, 2, 3, 4];
let sum = values.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum);


// map() → returns new array
// forEach() → does not return anything

// Create an array of 5 numbers and:
// Print first & last element
let numbers = [11, 22, 33, 44, 55];
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);
// Use push() and pop() on an array.
let sampleArray = [1, 2, 3];
sampleArray.push(4);
console.log("After push:", sampleArray);
sampleArray.pop();
console.log("After pop:", sampleArray);