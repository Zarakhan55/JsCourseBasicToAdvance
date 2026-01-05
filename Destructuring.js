// // // Destructuring allows you to extract values from arrays or objects
// // // and store them in variables in one line.

// // let colors = ["red", "green", "blue"];

// // let [firstColor, secondColor] = colors;

// // console.log(firstColor);  // red
// // console.log(secondColor); // green



// // //Without Destructing
// // let user = {
// //   name: "Zara",
// //   age: 22,
// //   city: "Karachi"
// // };

// // let userName = user.name;
// // let userAge = user.age;




// // //With Destructing
// // let user = {
// //   name: "Zara",
// //   age: 22,
// //   city: "Karachi"
// // };

// // let { name, age } = user;

// // console.log(name); // Zara
// // console.log(age);  // 22



// // //  Destructuring in Function Parameters (🔥 Interview Favorite)
// // function showUser({ name, age }) {
// //   console.log(`Name: ${name}, Age: ${age}`);
// // }

// // showUser({ name: "Ali", age: 25 });











// // //practice

// let arr = [100, 200, 300];

// let [first, , third] = arr;

// console.log(first); // 100
// console.log(third); // 300


// // Q2
// let student = {
//   name: "Sara",
//   marks: 90
// };
// let {name,marks}=student;
// console.log(name);






// // Use destructuring inside a function parameter.
// function show({ rollNo, marks }) {
//   console.log(`Roll Num: ${rollNo}, Marks: ${marks}`);
// }

// show({ rollNo: 898998, marks: 999 });


// /////////////////
// let numbers = [5, 10, 15];
// let [first, , last] = numbers;

// console.log(first); // 5
// console.log(last);  // 15

// let users = {
//   username: "zara123",
//   email: "zara@gmail.com",
//   age: 22
// };

// let { username, email } = users;

// console.log(username);
// console.log(email);





// /////////////////nested

// let response = {
//   status: 200,
//   data: {
//     id: 1,
//     name: "Laptop",
//     price: 1200
//   }
// };

// let {
//   data: { name, price }
// } = response;

// console.log(name);   // Laptop
// console.log(price);  // 1200

// ///////////////
let order = {
  orderId: 101,
  customer: {
    name: "Zara",
    address: "Karachi"
  },
  total: 200000
};
let {
  customer: { name },
  total
} = order;

console.log(`${name} - Total: ${total}`);
