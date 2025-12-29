// A data type tells JavaScript what kind of value a variable holds.

// Example:

// "Zara" → text

// 20 → number

// true → yes/no

// typeof "Hello"     // string
// typeof 25          // number
// typeof true        // boolean
// typeof undefined   // undefined
// typeof null        // object ❌
// typeof {}          // object
// typeof []          // object
// typeof function(){} // function


const appN="FoodExpress";
let itemCount=50;
let isUserLoggedIn=true;
let deliveryBoy=null;

let user={
    name:"Zara",
    age:25,
    city:"Karachi"
}

let cart=["Pizza","Burger","Pasta"];

console.log("App Name:",typeof appN);
console.log("Item Count:",typeof itemCount);
console.log("Is User Logged In?:",typeof isUserLoggedIn);
console.log("Delivery Boy:",typeof deliveryBoy);