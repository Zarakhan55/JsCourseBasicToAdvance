// // CLOSURE:Inner function remembers outer function’s data.
// // Why Closures Exist?

// // Because in JavaScript:

// // Functions are first-class

// // Functions can be returned

// // // Functions can be stored

// // // Closures allow:
// // // ✔ Data privacy
// // // ✔ State memory
// // // ✔ Function factories

// // function outer() {
// //   let name = "Zara";

// //   function inner() {
// //     console.log(name);
// //   }

// //   return inner;
// // }

// // let fn = outer();
// // fn(); // Zara
// // /////////////////////
// // function counter() {
// //   let count = 0;

// //   return function () {
// //     count++;
// //     console.log(count);
// //   };
// // }

// // let c1 = counter();
// // c1(); // 1
// // c1(); // 2
// // c1(); // 3
// // // 📌 count is private
// // // 📌 Cannot be accessed directly
// // ///////////////////////////////////////////
// // // ATM Machine:
// // // Balance is hidden
// // // Only accessible via buttons
// // function atm() {
// //   let balance = 1000;

// //   return {
// //     check: () => balance,
// //     withdraw: amt => balance -= amt
// //   };
// // }

// // let user = atm();
// // console.log(user.check()); // 1000
// // ///////////////
// // function test() {
// //   let x = 10;

// //   setTimeout(function () {
// //     console.log(x);
// //   }, 1000);
// // }

// // test(); // 10
// // // Uses of Closures (Interview ⭐)

// // // ✔ Data hiding
// // // ✔ Encapsulation
// // // ✔ Memoization
// // // ✔ Callbacks
// // // ✔ Event handlers

// // // 🎯 INTERVIEW QUESTIONS
// // // Q1️⃣ What is a closure?

// // // ➡ Function that remembers outer variables.

// // // Q2️⃣ When is a closure created?

// // // ➡ When a function accesses outer scope.

// // // Q3️⃣ Is closure created every time?

// // // ➡ Yes, when function is created.

// // // Q4️⃣ Difference between scope and closure?

// // // ➡ Scope = accessibility
// // // ➡ Closure = memory

// // // Q5️⃣ Why closures are powerful?

// // // ➡ Data privacy & state memory






// // function createAdder(x) {
// //   // return a function that adds x
// //   function add(){
// //     return x;
// //   }
// // }

// // let add5 = createAdder(5);
// // console.log(add5(10)); // 15










// ///////////////////

// function greet(name){
//   return function(){
//     console.log("Helllo"+ name);
//   }
// }
// let hi=greet(" zara khan");
// hi();




// //////////////////////
// function counter(){
//   let count=0;
//   return function(){
//     count++;
//     return count;
//   }
// }
// let c=counter();
// console.log(c());
// ///////////
// function test(){
//   let x=10;
//   setTimeout(function(){
//     console.log(x);
//   },2000);
// }
// test();
// //////////////
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// /////////////
// function power(exp){
//   return function (num){
//     return num ** exp;
//   };
// }
// let squer=power(3);
// let cube=power(2);

// console.log(squer(4));
// console.log(cube(2));
//////////////////
function secureCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
}

let counter = secureCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
/////////////



function secureCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
}

let counter = secureCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
///.//////////////////////////

for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  })(i);
}

