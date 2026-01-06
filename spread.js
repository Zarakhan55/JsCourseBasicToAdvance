// Spread Operator
// The spread operator expands elements of an array or object into individual values.
let no=[1,2,3];
let newNo=[...no,4,5];
console.log(newNo);


///
let use={name:"zara",age:21};
let update={...use,city:"karachi"};
console.log(update);
///
let cart1 = ["Phone"];
let cart2 = ["Laptop"];

let cart = [...cart1, ...cart2];
console.log(cart);




// Rest Operator
// The rest operator collects multiple values into a single array.
// Rest in Function
function add(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(add(1, 2, 3)); // 6

// Rest in Destructuring
let colors = ["red", "green", "blue"];

let [first, ...remaining] = colors;

console.log(remaining); // ["green", "blue"]

////practice q
let fruits = ["apple", "banana"];
let newFruits = [...fruits, "mango", "orange"];
console.log(newFruits);
///
let user1 = {
  name: "Zara",
  age: 22
};
let user2={
    ...user1,city:"karachi",age:21
};
console.log(user2);
