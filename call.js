// // // When should you use call() instead of bind()?

// // // ✔ Use call() when:

// // // You want to execute immediately

// // // ✔ Use bind() when:

// // // You want to execute later


// // let obj={
// //     value:10,
// // };
// //  function print(){
// //     console.log(this.value);
// //  }

// //  print.call(obj);


// //  let product={
// //     chose:"chococ",
// //  };

// //  function productprice(){
// //     console.log(this.chose);
// //  }

// //  productprice.call(product);










// //bind:bind() does NOT call the function immediately.It returns a new function with this fixed.
// let product = {
//   name: "Chocolate",
// };

// function showProduct() {
//   console.log(this.name);
// }

// let boundFunc = showProduct.bind(product);

// // function is NOT executed yet
// boundFunc(); // Chocolate

// //bind() returns a new function with this permanently bound.

// let user={name:"zara"};
// function greet(city){
//     console.log(this.name +"from" + city);
// }
// let greetuser=greet.bind(user);
// greetuser("karachi");








// //apply
// // () is used to call a function immediately while:

// // 1️⃣ Setting the value of this
// // 2️⃣ Passing arguments as an array

// // 📌 Simple Definition (Easy Words)

// // apply() lets you borrow a function and run it for another object, with arguments in array form.

// let user = { name: "Zara" };

// function greet(city, country) {
//   console.log(this.name + " from " + city + ", " + country);
// }

// greet.apply(user, ["Karachi", "Pakistan"]);




let student = { name: "Ali" };

function intro(age, city) {
  console.log(this.name, age, city);
}

// Use apply to print: Ali 21 Lahore
intro.apply(student,[21,"Lahore"]);