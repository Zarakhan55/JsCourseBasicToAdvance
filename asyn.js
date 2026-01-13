
// // Q: Why async/await is better?
// //  Cleaner, readable, avoids .then() chains
// //  1️⃣ async keyword makes a function return a Promise
// // 2️⃣ await waits for a Promise to finish
// // 3️⃣ await works only inside async functions
// // 4️⃣ Use try...catch to handle errors
// // 👉 async / await is a clean and modern way to work with Promises.
// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from Promise");
//     }, 2000);
//   });
// }

// async function showMessage() {
//   let msg = await getMessage();
//   console.log(msg);
// }

// showMessage();

// ///async + reject + try/catch

// function checkLogin(isLoggedIn) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isLoggedIn) {
//         resolve("Login Successful");
//       } else {
//         reject("Login Failed");
//       }
//     }, 1500);
//   });
// }

// async function loginUser() {
//   try {
//     let result = await checkLogin(false);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// loginUser();
// /////////////////////async function orderFlow() {


// function loadData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data loaded");
//         },2000);
//     });
// }
// async function rslt(){
//     let print=await loadData();
//     console.log(print);
// }
// rslt();

/////////////////////////////////
// Create a function checkAge(age):

// Resolves "Access Granted" if age ≥ 18

 // Rejects "Access Denied" if age < 18

// Use async/await + try...catch
// function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("Access Granted");
//       } else {
//         reject("Access Denied");
//       }
//     }, 1000);
//   });
// }

// async function ageCheck() {
//   try {
//     let result = await checkAge(18);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ageCheck();













// Create 3 functions that return Promises:

// 1️⃣ placeOrder() → resolves "Order Placed" after 1 sec
// 2️⃣ makePayment() → resolves "Payment Completed" after 1.5 sec
// 3️⃣ deliverOrder() → resolves "Order Delivered" after 2 sec

// 👉 Create an async function orderProcess() that:

// Calls them in order using await

// Prints each result

// Uses try...catch

function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Placed");
    }, 1000);
  });
}

function makePayment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payment Completed");
    }, 1500);
  });
}

function deliverOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Delivered");
    }, 2000);
  });
}

async function orderProcess() {
  try {
    const order = await placeOrder();
    console.log(order);

    const payment = await makePayment();
    console.log(payment);

    const delivery = await deliverOrder();
    console.log(delivery);
  } catch (error) {
    console.log(error);
  }
}

orderProcess();
